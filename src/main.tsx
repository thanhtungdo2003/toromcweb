import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import 'antd/dist/reset.css'
import AppRoutes from "./routes";
import { ConfigProvider } from "antd";
import { antdConfig } from "./config/antd.config";
import { Toaster } from "sonner";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ToastContainer position="bottom-center" theme="dark"/>
    <ConfigProvider {...antdConfig}>
      <AppRoutes />
      <Toaster
        position="top-right"
        expand={false}
        richColors
        closeButton
      />
    </ConfigProvider>
  </React.StrictMode>,
);
