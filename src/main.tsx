import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import SignUp from "./SignUp.tsx";
import Layout from "./components/Layout.tsx";
import UserActivation from "./components/UserActivation.tsx";
import LogIn from "./LogIn.tsx";
import Users from "./components/Users.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/sign-up" />,
  },
  {
    path: "/sign-up",
    element: (
      <Layout>
        <SignUp />
      </Layout>
    ),
  },
  {
    path: "/activation/:token",
    element: (
      <Layout>
        <UserActivation />
      </Layout>
    ),
  },
  {
    path: "/log-in",
    element: (
      <Layout>
        <LogIn />
      </Layout>
    ),
  },
  {
    path: "/users",
    element: (
      <Layout>
        <Users />
      </Layout>
    ),
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
