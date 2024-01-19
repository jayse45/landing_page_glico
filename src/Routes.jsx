import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Benefits60aboveenhanced = React.lazy(
  () => import("pages/Benefits60aboveenhanced"),
);
const Register = React.lazy(() => import("pages/Register"));
const Under60Eight = React.lazy(() => import("pages/Under60Eight"));
const AboveNine = React.lazy(() => import("pages/AboveNine"));
const AboveEight = React.lazy(() => import("pages/AboveEight"));
const AboveSeven = React.lazy(() => import("pages/AboveSeven"));
const AboveSix = React.lazy(() => import("pages/AboveSix"));
const AboveFive = React.lazy(() => import("pages/AboveFive"));
const Under60Seven = React.lazy(() => import("pages/Under60Seven"));
const AboveFour = React.lazy(() => import("pages/AboveFour"));
const AboveThree = React.lazy(() => import("pages/AboveThree"));
const AboveTwo = React.lazy(() => import("pages/AboveTwo"));
const AboveOne = React.lazy(() => import("pages/AboveOne"));
const Under60Six = React.lazy(() => import("pages/Under60Six"));
const Under60Five = React.lazy(() => import("pages/Under60Five"));
const Under60Four = React.lazy(() => import("pages/Under60Four"));
const Login = React.lazy(() => import("pages/Login"));
const Under60Three = React.lazy(() => import("pages/Under60Three"));
const Above = React.lazy(() => import("pages/Above"));
const Under60Two = React.lazy(() => import("pages/Under60Two"));
const Under60One = React.lazy(() => import("pages/Under60One"));
const Sunkwaplan = React.lazy(() => import("pages/Sunkwaplan"));
const Under60 = React.lazy(() => import("pages/Under60"));
const Frame370 = React.lazy(() => import("pages/Frame370"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Sunkwaplan />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/frame370" element={<Frame370 />} />
          <Route path="/under60" element={<Under60 />} />
          <Route path="/under60one" element={<Under60One />} />
          <Route path="/under60two" element={<Under60Two />} />
          <Route path="/above" element={<Above />} />
          <Route path="/under60three" element={<Under60Three />} />
          <Route path="/login" element={<Login />} />
          <Route path="/under60four" element={<Under60Four />} />
          <Route path="/under60five" element={<Under60Five />} />
          <Route path="/under60six" element={<Under60Six />} />
          <Route path="/aboveone" element={<AboveOne />} />
          <Route path="/abovetwo" element={<AboveTwo />} />
          <Route path="/abovethree" element={<AboveThree />} />
          <Route path="/abovefour" element={<AboveFour />} />
          <Route path="/under60seven" element={<Under60Seven />} />
          <Route path="/abovefive" element={<AboveFive />} />
          <Route path="/abovesix" element={<AboveSix />} />
          <Route path="/aboveseven" element={<AboveSeven />} />
          <Route path="/aboveeight" element={<AboveEight />} />
          <Route path="/abovenine" element={<AboveNine />} />
          <Route path="/under60eight" element={<Under60Eight />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/benefits60aboveenhanced"
            element={<Benefits60aboveenhanced />}
          />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
