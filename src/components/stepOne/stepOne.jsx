import { Input } from "antd";
import { UploadImage } from "elements";

export default function StepOne() {
  return (
    <>
      <div>
        <UploadImage />x
        <label htmlFor="fName">First Name</label>
        <Input placeholder="Basic usage" />
      </div>
    </>
  );
}
