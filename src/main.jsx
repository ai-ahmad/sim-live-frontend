import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Shop, Profile, Businesses, About, Help, Settings, Trading, ErrorPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home />, index: true },
      { path: "/About", element: <About />},
      { path: "/Businesses", element: <Businesses />},
      { path: "/Help", element: <Help />},
      { path: "/History", element: <History />},
      { path: "/Profile", element: <Profile />},
      { path: "/Settings", element: <Settings />},
      { path: "/Shop", element: <Shop />},
      { path: "/Trading", element: <Trading />},
      { path: "*", element: <ErrorPage />},
      
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
