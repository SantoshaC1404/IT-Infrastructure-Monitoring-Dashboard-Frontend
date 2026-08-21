import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { AuthProvider } from "../contexts/AuthContext";
import { ThresholdsProvider } from "../features/monitoring/contexts/ThresholdsContext";

const AppProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />

      <AuthProvider>
        <ThresholdsProvider>{children}</ThresholdsProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default AppProviders;
