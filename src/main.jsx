import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />

    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={12}
      toastOptions={{
        duration: 4000,

        style: {
          borderRadius: "12px",
          background: "#fff",
          color: "#111827",
        },

        success: {
          iconTheme: {
            primary: "#16a34a",
            secondary: "#fff",
          },
        },

        error: {
          iconTheme: {
            primary: "#dc2626",
            secondary: "#fff",
          },
        },
      }}
    />
  </StrictMode>,
);
