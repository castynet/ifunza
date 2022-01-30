import { Steps } from "antd";
import { useStore } from "store";

const { Step } = Steps;

export default function WhereAmI() {
  const whereAmI = useStore((state) => state.whereAmI);

  return (
    <Steps current={whereAmI}>
      <Step title="Student Info" description="Fill in student's data." />
      <Step title="Parent Info" description="Fill in parent's data." />
      <Step title="Overview" description="Review your data" />
    </Steps>
  );
}
