import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  Shop,
  Profile,
  Businesses,
  About,
  Help,
  Settings,
  Trading,
  ErrorPage,
  History,
} from "./pages";
import PrivateRoute from "./Service/PrivateRouter.jsx";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store/store.js";
import { Provider } from "react-redux";
import Login from "./pages/Login.jsx";
import BusinessDashboard from "./pages/Business-sub-pages/BusinessDashboard.jsx";
import BusinessBuy from "./pages/Business-sub-pages/BusinessBuy.jsx";
import BusinessCreate from "./pages/Business-sub-pages/BusinessCreate.jsx";
import Register from "./pages/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <App />
      </PrivateRoute>
    ),
    children: [
      { path: "/", element: <Home />, index: true },
      { path: "/About", element: <About /> },
      {
        path: "/Businesses",
        element: <Businesses />,
        children: [
          { path: "", element: <BusinessDashboard /> },
          { path: "buy", element: <BusinessBuy /> },
          { path: "create", element: <BusinessCreate /> },
        ],
      },
      { path: "/Help", element: <Help /> },
      { path: "/History", element: <History /> },
      { path: "/Profile", element: <Profile /> },
      { path: "/Settings", element: <Settings /> },
      { path: "/Shop", element: <Shop /> },
      { path: "/Trading", element: <Trading /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
  {
    path: "/auth",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>
);
