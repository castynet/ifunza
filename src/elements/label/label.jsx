import styles from "./label.module.scss";

export default function Label(params) {
  const { for: htmlFor, label, required = false } = params;

  return (
    <label className={styles.lbl} htmlFor={htmlFor}>
      {required && <span>*</span>} {label} :
    </label>
  );
}
