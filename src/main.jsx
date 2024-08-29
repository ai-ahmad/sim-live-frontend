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
import Auth from "./pages/Auth.jsx"; 

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
      { path: "/Businesses", element: <Businesses /> },
      { path: "/Help", element: <Help /> },
      { path: "/History", element: <History /> },
      { path: "/Profile", element: <Profile /> },
      { path: "/Settings", element: <Settings /> },
      { path: "/Shop", element: <Shop /> },
      { path: "/Trading", element: <Trading /> },
      { path: "*", element: <ErrorPage /> }, // Error page for undefined routes
    ],
  },
  {
    path: "/auth",
    element: <Auth />, 
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
