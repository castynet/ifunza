import { Routes, Route } from "react-router-dom";
import { useStore } from "./store";

import StepOne from "components/stepOne/stepOne";
import StepTwo from "components/stepTwo/stepTwo";
import StepThree from "components/stepThree/stepThree";
import WhereAmI from "components/whereAmI/whereAmI";

export default function App() {
  const whereAmI = useStore((state) => state.whereAmI);
  console.log(whereAmI);

  return (
    <>
      <div data-testid="app" id="app">
        <WhereAmI />
        <Routes>
          <Route path="/" element={<StepOne />} />
          <Route path="student" element={<StepOne />} />
          <Route path="parent" element={<StepTwo />} />
          <Route path="overview" element={<StepThree />} />
        </Routes>
      </div>
    </>
  );
}
