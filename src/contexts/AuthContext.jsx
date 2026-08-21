import { createContext, useContext, useEffect, useState } from "react";

import * as authApi from "../api/authApi";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // True while we're checking for an existing session on first load.
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (!token) {
      setLoading(false);
      return;
    }

    authApi
      .me()
      .then((response) => setUser(response.data))
      .catch(() => {
        localStorage.removeItem("access_token");
      })
      .finally(() => setLoading(false));
  }, []);

  const login = async (username, password) => {
    const response = await authApi.login({ username, password });

    localStorage.setItem("access_token", response.data.access_token);

    const me = await authApi.me();
    setUser(me.data);

    return me.data;
  };

  const register = async (payload) => {
    const response = await authApi.register(payload);
    return response.data;
  };

  const logout = async () => {
    try {
      await authApi.logout();
    } finally {
      // Always clear local session, even if the network call fails -
      // the user should never be "stuck" logged in on the client.
      localStorage.removeItem("access_token");
      setUser(null);
    }
  };

  const value = {
    user,
    loading,
    isAuthenticated: Boolean(user),
    login,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export default AuthContext;
