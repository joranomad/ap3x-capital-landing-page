import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { paths } from "./paths";

const Home = React.lazy(() => import("@/pages/home"));
const About = React.lazy(() => import("@/pages/about"))
const Investments = React.lazy(() => import("@/pages/investments"));
const Research = React.lazy(() => import("@/pages/research"));
const Teams = React.lazy(() => import("@/pages/teams"));
const Contact = React.lazy(() => import("@/pages/contact"));

export default function Router() {
  return useRoutes([...root]);
}

const root = [
  {
    path: paths.root,
    element: <Home />,
  },
  {
    path: paths.about,
    element: <About />,
  },
  {
    path: paths.research,
    element: <Research />,
  },
  {
    path: paths.investments,
    element: <Investments />,
  },
  {
    path: paths.contact,
    element: <Contact />,
  },
  { path: "*", element: <Navigate to="/404" replace /> },
];

export * from "./paths";
