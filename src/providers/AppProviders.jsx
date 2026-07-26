import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const AppProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      {children}
    </BrowserRouter>
  );
};

export default AppProviders;
