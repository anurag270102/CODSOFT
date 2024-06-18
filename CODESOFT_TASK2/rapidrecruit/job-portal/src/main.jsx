import React from "react";
import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./Router/Router.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>,
  // <Auth0Provider
  //   domain="dev-j7w30ek5raajqd47.us.auth0.com"
  //   clientId="xrL0yQOyjiAUOlOTUXuQEEKBBi5Aw6Xu"
  //   authorizationParams={{
  //     redirect_uri: window.location.origin,
  //   }}
  // >
  //   <RouterProvider router={router} />
  // </Auth0Provider>
);
