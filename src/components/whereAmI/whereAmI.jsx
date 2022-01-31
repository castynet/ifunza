import { Steps } from "antd";
import { useStore } from "store";

const { Step } = Steps;

export default function WhereAmI() {
  const whereAmI = useStore((state) => state.whereAmI);

  return (
    <Steps current={whereAmI}>
      <Step title="Student Info" />
      <Step title="Parent Info" />
      <Step title="Overview" />
    </Steps>
  );
}
