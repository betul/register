import React from "react";
import styles from "../styles/WorkoutForm.module.scss";
import { translations } from "../i18n/translations";

interface StepThreeProps {
  selectedGoal: string;
  setSelectedGoal: (goal: string) => void;
  language: "en" | "ar";
}

const StepThree: React.FC<StepThreeProps> = ({
  selectedGoal,
  setSelectedGoal,
  language,
}) => {
  const t = translations[language];
  const goals = [
    { id: "lose_weight", icon: "⚡", label: t.stepThree.goals.loseWeight },
    { id: "build_muscle", icon: "💪", label: t.stepThree.goals.buildMuscle },
    { id: "stay_healthy", icon: "😊", label: t.stepThree.goals.stayHealthy },
  ];

  return (
    <>
      <span className={styles["title"]}>{t.stepThree.title}</span>
      <div className={styles["input-fields-container"]}>
        <ul className={styles["goals-list"]}>
          {goals.map((goalItem) => (
            <li
              key={goalItem.id}
              className={`${styles["goal-item"]} ${
                selectedGoal === goalItem.id ? styles["selected"] : ""
              }`}
              onClick={() => setSelectedGoal(goalItem.id)}
            >
              <div className={styles["goal-icon"]}>
                <span>{goalItem.icon}</span>
                <span>{goalItem.label}</span>
              </div>
              <div
                className={`${styles["radio-button"]} ${
                  selectedGoal === goalItem.id ? styles["selected"] : ""
                }`}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default StepThree;
