import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useStore } from "./store";

import StepOne from "components/stepOne/stepOne";
import StepTwo from "components/stepTwo/stepTwo";
import StepThree from "components/stepThree/stepThree";
import WhereAmI from "components/whereAmI/whereAmI";

export default function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { student, parent, updateWhereAmI } = useStore((state) => state);

  useEffect(() => {
    // update the steps indicator using the url
    if (pathname.includes("student")) updateWhereAmI(0);
    if (pathname.includes("parent")) updateWhereAmI(1);

    // if someone is already in the homepage let them be, do not redirect.
    if (pathname === "/") {
      updateWhereAmI(0);
      return;
    }

    // if someone is anywhere else and has not filled in the required
    // student details, redirect them to the student page
    if (
      student.sName === "" ||
      student.fName === "" ||
      student.dob === "" ||
      student.aNo === ""
    ) {
      navigate("/student");
      return;
    }

    // if someone is anywhere else and has not filled in the required
    // parent details, redirect them to the parent page
    if (
      (parent.email === "" ||
        parent.phone === "" ||
        parent.fName === "" ||
        parent.sName === "") &&
      !pathname.includes("parent") &&
      !pathname.includes("student")
    )
      navigate("/parent");

    // if someone has filled in the required details & is on the review page
    // update the steps indicator to 2
    if (pathname.includes("review")) updateWhereAmI(2);
  }, [pathname, navigate, student, parent, updateWhereAmI]);

  return (
    <>
      <div data-testid="app" id="app">
        <WhereAmI />
        <Routes>
          <Route path="/" element={<StepOne />} />
          <Route path="student" element={<StepOne />} />
          <Route path="parent" element={<StepTwo />} />
          <Route path="review" element={<StepThree />} />
          <Route path="*" element={<StepOne />} />
        </Routes>
      </div>
    </>
  );
}
