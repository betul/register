import React from "react";
import styles from "../styles/WorkoutForm.module.scss";
import { translations } from "../i18n/translations";

interface StepFourProps {
  formData: {
    email: string;
    password: string;
    fullName: string;
    surname: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      email: string;
      password: string;
      fullName: string;
      surname: string;
    }>
  >;
  language: "en" | "ar";
}

const StepFour: React.FC<StepFourProps> = ({
  formData,
  setFormData,
  language,
}) => {
  const t = translations[language];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <span className={styles["title"]}>{t.stepFour.title}</span>
      <div className={styles["input-fields-container"]}>
        <div className={styles["input-field"]}>
          <input
            type="text"
            name="fullName"
            placeholder={t.stepFour.name}
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <div className={styles["input-field"]}>
          <input
            type="text"
            name="surname"
            placeholder={t.stepFour.surname}
            value={formData.surname}
            onChange={handleChange}
          />
        </div>
        <div className={styles["input-field"]}>
          <input
            type="email"
            name="email"
            placeholder={t.stepFour.email}
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles["input-field"]}>
          <input
            type="password"
            name="password"
            placeholder={t.stepFour.password}
            value={formData.password}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};

export default StepFour;
