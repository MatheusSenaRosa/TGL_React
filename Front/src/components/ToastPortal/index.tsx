import { createPortal } from "react-dom";
import { ToastContainer } from "react-toastify";

const container = document.getElementById("toast");

export const ToastPortal = () =>
  container &&
  createPortal(
    <ToastContainer
      position="top-right"
      autoClose={5000}
      theme="colored"
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />,
    container
  );
