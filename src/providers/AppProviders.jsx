import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const AppProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />

      {children}
    </BrowserRouter>
  );
};

export default AppProviders;
