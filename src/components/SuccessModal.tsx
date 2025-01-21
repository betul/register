import React from "react";
import styles from "../styles/WorkoutForm.module.scss";
import { translations } from "../i18n/translations";

interface SuccessModalProps {
  onClose: () => void;
  language: "en" | "ar";
}

const SuccessModal: React.FC<SuccessModalProps> = ({ onClose, language }) => {
  const t = translations[language];

  return (
    <div className={styles["modal-overlay"]}>
      <div className={`${styles["modal-content"]} ${styles[language]}`}>
        <span className={styles["success-icon"]}>✓</span>
        <h2>{t.success.title}</h2>
        <p>{t.success.message}</p>
        <button className={styles["next-button"]} onClick={onClose}>
          {t.buttons.done}
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
