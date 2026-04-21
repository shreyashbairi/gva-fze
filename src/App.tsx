import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import ServerErrorPage from "./pages/ServerErrorPage";
import NotFoundPage from "./pages/NotFoundPage";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const CookiePage = lazy(() => import("./pages/CookiePage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ServerErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "privacy", element: <PrivacyPage /> },
      { path: "terms", element: <TermsPage /> },
      { path: "cookies", element: <CookiePage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}