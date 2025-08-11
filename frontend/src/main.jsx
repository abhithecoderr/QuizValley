import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.jsx";
import { App } from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Loader } from "./components/Loader.jsx";
import { Input } from "./components/Input.jsx";
import { CustomQuiz } from "./pages/CustomQuiz.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/custom-quiz", element: <CustomQuiz /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App/>
    </RouterProvider>
  </StrictMode>
);
