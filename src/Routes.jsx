import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Benefits60aboveenhanced = React.lazy(
  () => import("pages/Benefits60aboveenhanced"),
);
const Register = React.lazy(() => import("pages/Register"));
const AboveEight = React.lazy(() => import("pages/AboveEight"));
const AboveSeven = React.lazy(() => import("pages/AboveSeven"));
const AboveFive = React.lazy(() => import("pages/AboveFive"));
const AboveTwo = React.lazy(() => import("pages/AboveTwo"));
const AboveOne = React.lazy(() => import("pages/AboveOne"));
const Login = React.lazy(() => import("pages/Login"));
const Sunkwaplan = React.lazy(() => import("pages/Sunkwaplan"));
const Under60 = React.lazy(() => import("pages/Under60"));
const Under60Eight = React.lazy(() => import("pages/Under60Eight"));
const AboveNine = React.lazy(() => import("pages/AboveNine"));
const AboveSix = React.lazy(() => import("pages/AboveSix"));
const Under60Seven = React.lazy(() => import("pages/Under60Seven"));
const AboveFour = React.lazy(() => import("pages/AboveFour"));
const AboveThree = React.lazy(() => import("pages/AboveThree"));
const Under60Six = React.lazy(() => import("pages/Under60Six"));
const Under60Five = React.lazy(() => import("pages/Under60Five"));
const Under60Four = React.lazy(() => import("pages/Under60Four"));
const Under60Three = React.lazy(() => import("pages/Under60Three"));
const Above = React.lazy(() => import("pages/Above"));
const Under60Two = React.lazy(() => import("pages/Under60Two"));
const Under60One = React.lazy(() => import("pages/Under60One"));
const PaymentPortalFive = React.lazy(() => import("pages/PaymentPortalFive"));
const PaymentPortal = React.lazy(() => import("pages/PaymentPortal"));
const PaymentPortalOne1 = React.lazy(() => import("pages/PaymentPortalOne1"));
const PaymentPortalThree = React.lazy(() => import("pages/PaymentPortalThree"));
const PaymentPortalSeven = React.lazy(() => import("pages/PaymentPortalSeven"));
const PaymentPortalFour = React.lazy(() => import("pages/PaymentPortalFour"));
const PaymentPortalTwo = React.lazy(() => import("pages/PaymentPortalTwo"));
const PaymentPortalEight = React.lazy(() => import("pages/PaymentPortalEight"));
const PaymentPortalSix = React.lazy(() => import("pages/PaymentPortalSix"));
const PaymentPortalOne = React.lazy(() => import("pages/PaymentPortalOne"));
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
          <Route path="/paymentportalone" element={<PaymentPortalOne />} />
          <Route path="/paymentportalsix" element={<PaymentPortalSix />} />
          <Route path="/paymentportaleight" element={<PaymentPortalEight />} />
          <Route path="/paymentportaltwo" element={<PaymentPortalTwo />} />
          <Route path="/paymentportalfour" element={<PaymentPortalFour />} />
          <Route path="/paymentportalseven" element={<PaymentPortalSeven />} />
          <Route path="/paymentportalthree" element={<PaymentPortalThree />} />
          <Route path="/paymentportalone1" element={<PaymentPortalOne1 />} />
          <Route path="/paymentportal" element={<PaymentPortal />} />
          <Route path="/paymentportalfive" element={<PaymentPortalFive />} />
          <Route path="/under60one" element={<Under60One />} />
          <Route path="/under60two" element={<Under60Two />} />
          <Route path="/above" element={<Above />} />
          <Route path="/under60three" element={<Under60Three />} />
          <Route path="/under60four" element={<Under60Four />} />
          <Route path="/under60five" element={<Under60Five />} />
          <Route path="/under60six" element={<Under60Six />} />
          <Route path="/abovethree" element={<AboveThree />} />
          <Route path="/abovefour" element={<AboveFour />} />
          <Route path="/under60seven" element={<Under60Seven />} />
          <Route path="/abovesix" element={<AboveSix />} />
          <Route path="/abovenine" element={<AboveNine />} />
          <Route path="/under60eight" element={<Under60Eight />} />
          <Route path="/under60" element={<Under60 />} />
          <Route path="/sunkwaplan" element={<Sunkwaplan />} />
          <Route path="/login" element={<Login />} />
          <Route path="/aboveone" element={<AboveOne />} />
          <Route path="/abovetwo" element={<AboveTwo />} />
          <Route path="/abovefive" element={<AboveFive />} />
          <Route path="/aboveseven" element={<AboveSeven />} />
          <Route path="/aboveeight" element={<AboveEight />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/desktopthree" element={<DesktopThree />} /> */}
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
