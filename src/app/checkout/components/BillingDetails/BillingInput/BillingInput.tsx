import styles from "./BillingInput.module.css";

type Props = {
  label: string;
  value: string;
  setValue: (value: string) => void;
};

const BillingInput = ({ label, value, setValue }: Props) => (
  <div className={styles.billingInput}>
    <label htmlFor={label}>{label}</label>
    <input
      type="text"
      id={label}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  </div>
);

export default BillingInput;
