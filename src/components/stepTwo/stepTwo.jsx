import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "antd";

import { UploadImage, Label } from "elements";
import { useStore } from "store";

import styles from "./stepTwo.module.scss";
import { validateEmail, validatePhone } from "./helpers";

export default function StepTwo() {
  const navigate = useNavigate();
  const { updateParent, parent } = useStore((state) => state);

  const [fName, setFName] = useState(parent.fName);
  const [sName, setLName] = useState(parent.sName);
  const [phone, setPhone] = useState(parent.phone);
  const [phoneError, setPhoneError] = useState(false);
  const [email, setEmail] = useState(parent.email);
  const [emailError, setEmailError] = useState(false);
  const [address, setAddress] = useState(parent.address);
  const [clickedNext, setClickedNext] = useState(false);

  const handleNext = () => {
    if (validateEmail(email) === null) {
      setEmailError(true);
      setClickedNext(true);
    }

    if (!validatePhone(phone)) {
      setPhoneError(true);
      setClickedNext(true);
      return;
    }

    if (fName && sName && phone && email && address) {
      updateParent({
        fName,
        sName,
        phone: validatePhone(phone),
        email,
        address,
      });
      navigate("/review");
      setClickedNext(false);
      return;
    }
  };

  return (
    <>
      <div className={styles.formWrapper}>
        <UploadImage step="parent" />
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

          <Label for="phone" label="Phone Number" required />
          <Input
            placeholder="+254"
            id="phone"
            type="text"
            name="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={
              (clickedNext && !phone) || (clickedNext && phoneError)
                ? styles.error
                : clickedNext
                ? styles.okay
                : null
            }
          />

          <Label for="email" label="Email" required />
          <Input
            placeholder="you@mail.com"
            id="email"
            type="email"
            name="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={
              (clickedNext && !email) || (clickedNext && emailError)
                ? styles.error
                : clickedNext
                ? styles.okay
                : null
            }
          />

          <Label for="address" label="Address (Residence)" required />
          <Input
            placeholder="Address"
            id="address"
            type="text"
            name="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className={
              clickedNext && !address
                ? styles.error
                : clickedNext
                ? styles.okay
                : null
            }
          />
        </form>
      </div>
      <div className={styles.navBtn}>
        <Button
          type="primary"
          className={styles.prev}
          onClick={() => navigate("/student")}
        >
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
