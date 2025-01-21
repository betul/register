import React from "react";
import styles from "../styles/WorkoutForm.module.scss";
import { translations } from "../i18n/translations";
import ErrorMessage from "./ErrorMessage";

interface StepOneProps {
  weight: number | "";
  height: number | "";
  setWeight: (weight: number | "") => void;
  setHeight: (height: number | "") => void;
  language: "en" | "ar";
  errors: { [key: string]: string };
}

const StepOne: React.FC<StepOneProps> = ({
  weight,
  height,
  setWeight,
  setHeight,
  language,
  errors,
}) => {
  const t = translations[language];

  return (
    <>
      <span className={styles["title"]}>{t.stepOne.title}</span>
      <div className={styles["input-fields-container"]}>
        <div className={styles["input-field"]}>
          <input
            type="number"
            placeholder={t.stepOne.height}
            value={height}
            onChange={(e) =>
              setHeight(e.target.value ? Number(e.target.value) : "")
            }
          />
          {errors.height && <ErrorMessage message={errors.height} />}
        </div>
        <div className={styles["input-field"]}>
          <input
            type="number"
            placeholder={t.stepOne.weight}
            value={weight}
            onChange={(e) =>
              setWeight(e.target.value ? Number(e.target.value) : "")
            }
          />
          {errors.weight && <ErrorMessage message={errors.weight} />}
        </div>
      </div>
    </>
  );
};

export default StepOne;
