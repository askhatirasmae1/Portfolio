import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";

import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Formations from "../pages/Formations";
import Certifications from "../pages/Certifications";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <Projects /> },
      { path: "formations", element: <Formations /> },
      { path: "certifications", element: <Certifications /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);