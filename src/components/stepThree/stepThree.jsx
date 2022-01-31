import { Card } from "antd";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { useStore } from "store";
import { useNavigate } from "react-router-dom";
import styles from "./stepThree.module.scss";

export default function StepThree() {
  const { parent, student } = useStore();
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.wrapper}>
        <Card
          title="Student Info"
          extra={<Link to="/student">Edit</Link>}
          className={styles.card}
        >
          <div className={styles.imgWrapper}>
            <img src={student.img} alt={student.fName} />
          </div>
          <p>
            {student.fName} {student.sName}
          </p>
          <p>
            <span>DoB: </span>
            {student.dob}
          </p>
          <p>
            <span>Admission Number: </span>
            {student.aNo}
          </p>
        </Card>
        <Card
          title="Parent Info"
          extra={<Link to="/parent">Edit</Link>}
          className={styles.card}
        >
          <div className={styles.imgWrapper}>
            <img src={parent.img} alt={parent.fName} />
          </div>
          <p>
            {parent.fName} {parent.sName}
          </p>
          <p>
            <span>Email: </span>
            {parent.email}
          </p>
          <p>
            <span>Phone: </span>
            {parent.phone}
          </p>
          <p>{parent.address}</p>
        </Card>
      </div>
      <Button
        type="primary"
        className={styles.prev}
        onClick={() => navigate("/parent")}
      >
        Prev
      </Button>
      <Button
        type="primary"
        className={styles.next}
        onClick={() =>
          console.log("Student:", student, "\n", "Parent:", parent)
        }
      >
        Confirm
      </Button>
    </>
  );
}
