import styles from "./fieldTab.module.css";

interface FieldTabProps {
  fields: string[];
  selectedField: string;
  onSelectField: (field: string) => void;
}

export default function FieldTab({
  fields,
  selectedField,
  onSelectField,
}: FieldTabProps) {
  return (
    <div className={styles.fieldTabWrap}>
      {fields.map((field) => (
        <button
          key={field}
          className={`${styles.fieldTab} ${
            selectedField === field ? styles.selected : ""
          }`}
          onClick={() => onSelectField(field)}
        >
          {field}
        </button>
      ))}
    </div>
  );
}
