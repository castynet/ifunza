import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, DatePicker, Select, InputNumber } from "antd";

import { useStore } from "store";
import styles from "./stepOne.module.scss";
import { UploadImage, Label } from "elements";

export default function StepOne() {
  const navigate = useNavigate();
  const { Option } = Select;
  const { student, updateStudent } = useStore((state) => state);

  const [fName, setFName] = useState(student.fName);
  const [sName, setLName] = useState(student.sName);
  const [aNo, setANo] = useState(student.aNo);
  const [dob, setDob] = useState(student.dob);
  const [gender, setGender] = useState(student.gender);
  const [clickedNext, setClickedNext] = useState(false);

  const handleNext = () => {
    if (fName && sName && dob && aNo) {
      updateStudent({ fName, sName, dob, gender, aNo });
      navigate("/parent");
    } else setClickedNext(true);
  };

  return (
    <>
      <div className={styles.formWrapper}>
        <UploadImage step="student" />
        <form className={styles.inputsWrapper}>
          <Label for="fName" label="First Name" required />
          <Input
            placeholder="First Name"
            id="fName"
            type="text"
            name="First Name"
            value={fName}
            onChange={(e) => setFName(e.target.value)}
            className={
              clickedNext && !fName
                ? styles.error
                : clickedNext
                ? styles.okay
                : null
            }
          />

          <Label for="sName" label="Second Name" required />
          <Input
            placeholder="Second Name"
            id="sName"
            type="text"
            name="Second Name"
            value={sName}
            onChange={(e) => setLName(e.target.value)}
            className={
              clickedNext && !sName
                ? styles.error
                : clickedNext
                ? styles.okay
                : null
            }
          />

          <Label for="aNo" label="Admission Number" required />
          <InputNumber
            placeholder="001"
            id="aNo"
            name="Admission Number"
            value={aNo}
            onChange={(value) => setANo(value)}
            min={1}
            className={`${styles.inputNumber} ${
              clickedNext && !aNo
                ? styles.error
                : clickedNext
                ? styles.okay
                : null
            }`}
          />

          <Label for="dob" label="Date of Birth" required />
          <DatePicker
            id="dob"
            onChange={(date, dateStr) => setDob(dateStr)}
            className={`${styles.datePicker} ${
              clickedNext && !dob
                ? styles.error
                : clickedNext
                ? styles.okay
                : null
            }`}
          />

          <Label for="gender" label="Gender" />
          <Select
            className={styles.select}
            id="gender"
            value={gender}
            placeholder="Select Gender"
            onChange={(value) => setGender(value)}
          >
            <Option value="Female">Female</Option>
            <Option value="Male">Male</Option>
          </Select>
        </form>
      </div>
      <div className={styles.navBtn}>
        <Button type="primary" className={styles.prev} disabled>
          Prev Step
        </Button>
        <Button
          type="primary"
          className={styles.next}
          onClick={() => handleNext()}
        >
          Next Step
        </Button>
      </div>
    </>
  );
}
