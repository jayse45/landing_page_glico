import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Benefits60aboveenhanced = React.lazy(
  () => import("pages/Benefits60aboveenhanced"),
);
const Register = React.lazy(() => import("pages/Register"));
const AboveOne = React.lazy(() => import("pages/AboveOne"));
const Login = React.lazy(() => import("pages/Login"));
const Sunkwaplan = React.lazy(() => import("pages/Sunkwaplan"));
const AboveNine = React.lazy(() => import("pages/AboveNine"));
const Under60Seven = React.lazy(() => import("pages/Under60Seven"));
const AboveThree = React.lazy(() => import("pages/AboveThree"));
const Under60Five = React.lazy(() => import("pages/Under60Five"));
const Under60Three = React.lazy(() => import("pages/Under60Three"));
const Above = React.lazy(() => import("pages/Above"));
const Under60One = React.lazy(() => import("pages/Under60One"));
const Frame370 = React.lazy(() => import("pages/Frame370"));
const DesktopThree = React.lazy(() => import("pages/DesktopThree"));
const Payments = React.lazy(() => import("pages/Payments"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Sunkwaplan />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/frame370" element={<Frame370 />} />
          <Route path="/under60one" element={<Under60One />} />
          <Route path="/above" element={<Above />} />
          <Route path="/under60three" element={<Under60Three />} />
          <Route path="/under60five" element={<Under60Five />} />
          <Route path="/abovethree" element={<AboveThree />} />
          <Route path="/under60seven" element={<Under60Seven />} />
          <Route path="/abovenine" element={<AboveNine />} />
          <Route path="/sunkwaplan" element={<Sunkwaplan />} />
          <Route path="/login" element={<Login />} />
          <Route path="/aboveone" element={<AboveOne />} />
          <Route path="/register" element={<Register />} />
          <Route path="/desktopthree" element={<DesktopThree />} />
          <Route path="/payments" element={<Payments />} />
          <Route
            path="/benefits60aboveenhanced"
            element={<Benefits60aboveenhanced />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
