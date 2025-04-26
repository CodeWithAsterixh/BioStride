import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/styles/components.css"

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import {
  NotFoundPage,
  Root,
  MainLayout,
  PatientsLayout,
  Home,
  Patients,
} from "./App";
import { ThemeProvider } from "./contexts/ThemeContext";
// import PatientsLayout from "./Layouts/PagesLayout/PatientsLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<NotFoundPage />}>
      
      {/* <Route element={<HomeLayout />}>
        <Route index element={<Home />} />
      </Route> */}
      <Route element={<MainLayout />}>
        {/* Pages with header and footer */}
        <Route index element={<Home />} />
        <Route path="/patients" element={<PatientsLayout />}>
          <Route path=":patient_id" element={<Patients />} />
        </Route>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
