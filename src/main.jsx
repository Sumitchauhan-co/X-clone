import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import "./index.css";
// import App from "./App.jsx";
import AppRoutes from "./routes/AppRoutes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
  </StrictMode>
);
