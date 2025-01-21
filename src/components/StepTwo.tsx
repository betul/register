import React from "react";
import styles from "../styles/WorkoutForm.module.scss";
import { translations } from "../i18n/translations";

interface StepTwoProps {
  ratio: number;
  selectedDays: string[];
  handleDaySelection: (day: string) => void;
  language: "en" | "ar";
}

const StepTwo: React.FC<StepTwoProps> = ({
  ratio,
  selectedDays,
  handleDaySelection,
  language,
}) => {
  const isHighRatio = ratio > 0.5;
  const t = translations[language];

  return (
    <>
      <span className={styles["title"]}>{t.stepTwo.title}</span>
      <div className={styles["input-fields-container"]}>
        <ul className={styles["days-list"]}>
          {Object.entries(t.stepTwo.days).map(([key, day]) => (
            <li
              key={key}
              className={`${styles["day-item"]} ${
                selectedDays.includes(key) ? styles["selected"] : ""
              }`}
              onClick={() => {
                if (
                  !isHighRatio ||
                  ["monday", "wednesday", "saturday", "sunday"].includes(key)
                ) {
                  handleDaySelection(key);
                }
              }}
              style={{
                opacity:
                  isHighRatio &&
                  !["monday", "wednesday", "saturday", "sunday"].includes(key)
                    ? 0.5
                    : 1,
                cursor:
                  isHighRatio &&
                  !["monday", "wednesday", "saturday", "sunday"].includes(key)
                    ? "not-allowed"
                    : "pointer",
              }}
            >
              {day}
              {selectedDays.includes(key) && (
                <span className={styles["checkmark"]}>✔</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default StepTwo;
