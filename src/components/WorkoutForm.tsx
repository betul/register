/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useMemo } from "react";
import styles from "../styles/WorkoutForm.module.scss";
import animationStyles from "../styles/animations.module.scss";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import { workoutAPI } from "../services/mockAPI";
import SuccessModal from "./SuccessModal";
import { translations } from "../i18n/translations";
import { createSchemas } from "../validations/schemas";
import { ValidationError } from "yup";

const WorkoutForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [weight, setWeight] = useState<number | "">("");
  const [height, setHeight] = useState<number | "">("");
  const [ratio, setRatio] = useState<number>(0);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [goal, setGoal] = useState<string>("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    surname: "",
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [slideDirection, setSlideDirection] = useState<"ltr" | "rtl">("ltr");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const { stepOneSchema, stepTwoSchema, stepThreeSchema, stepFourSchema } =
    useMemo(() => {
      return createSchemas(language);
    }, [language]);

  const validateStep = async () => {
    try {
      switch (step) {
        case 1:
          await stepOneSchema.validate(
            { weight, height },
            { abortEarly: false }
          );
          break;
        case 2:
          await stepTwoSchema.validate({ selectedDays }, { abortEarly: false });
          break;
        case 3:
          await stepThreeSchema.validate({ goal }, { abortEarly: false });
          break;
        case 4:
          await stepFourSchema.validate(formData, { abortEarly: false });
          break;
      }
      setErrors({});
      return true;
    } catch (err) {
      if (err instanceof ValidationError) {
        const validationErrors: { [key: string]: string } = {};
        err.inner.forEach((error) => {
          if (error.path) {
            validationErrors[error.path] = error.message;
          }
        });
        setErrors(validationErrors);
      }
      return false;
    }
  };
  const handleNextStep = async () => {
    const isValid = await validateStep();
    if (!isValid) return;

    if (step === 1) {
      const calculatedRatio = calculateRatio(Number(height), Number(weight));
      if (isNaN(calculatedRatio)) {
        setErrors({ ratio: getMessage("ratio.invalid", language) });
        return;
      }
      setRatio(calculatedRatio);

      try {
        await workoutAPI.saveMeasurements({
          height: `${height}cm`,
          weight: `${weight}kg`,
          ratio: calculatedRatio.toFixed(2),
        });
      } catch (error) {
        setErrors({ api: "An error occurred but you can continue." });
      }

      setSelectedDays([]);

      setSlideDirection("rtl");
      setStep(step + 1);
      return;
    }

    if (step === 2) {
      try {
        await workoutAPI.saveSchedule({ selectedDays });
        setSlideDirection("rtl");
        setStep(step + 1);
      } catch (error) {
        console.error("An error occurred. Please try again.");
      }
      return;
    }

    if (step === 3) {
      try {
        await workoutAPI.saveGoal(goal);
        setSlideDirection("rtl");
        setStep(step + 1);
      } catch (error) {
        console.error("An error occurred. Please try again.");
      }
      return;
    }
  };

  const handlePrevStep = () => {
    setSlideDirection("ltr");
    setStep(step - 1);
  };

  const handleDaySelection = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const handleFormSubmit = async () => {
    try {
      await workoutAPI.saveUser(formData);
      setShowSuccessModal(true);
    } catch (_error) {
      console.error("An error occurred. Please try again.");
    }
  };

  const isNextDisabled = () => {
    switch (step) {
      case 1:
        return !weight || !height;
      case 2:
        return selectedDays.length === 0;
      case 3:
        return !goal;
      case 4:
        return (
          !formData.email ||
          !formData.password ||
          !formData.fullName ||
          !formData.surname
        );
      default:
        return false;
    }
  };

  const resetForm = () => {
    setStep(1);
    setWeight("");
    setHeight("");
    setRatio(0);
    setSelectedDays([]);
    setGoal("");
    setFormData({
      email: "",
      password: "",
      fullName: "",
      surname: "",
    });
    setShowSuccessModal(false);
    setSlideDirection("ltr");
    setErrors({});
  };

  return (
    <div className={styles["app-container"]}>
      <button
        className={styles["language-button"]}
        onClick={() => {
          setLanguage(language === "en" ? "ar" : "en");
          setSlideDirection(language === "en" ? "rtl" : "ltr");
        }}
      >
        {language === "en" ? "عربي" : "English"}
      </button>
      <div
        className={`${styles["workout-form-container"]} ${styles[language]} ${
          animationStyles[`slide-${slideDirection}`]
        }`}
        key={step}
      >
        {step === 1 && (
          <StepOne
            weight={weight}
            height={height}
            setWeight={setWeight}
            setHeight={setHeight}
            language={language}
            errors={errors}
          />
        )}
        {step === 2 && (
          <StepTwo
            ratio={ratio}
            selectedDays={selectedDays}
            handleDaySelection={handleDaySelection}
            language={language}
          />
        )}
        {step === 3 && (
          <StepThree
            selectedGoal={goal}
            setSelectedGoal={setGoal}
            language={language}
          />
        )}
        {step === 4 && (
          <StepFour
            formData={formData}
            setFormData={setFormData}
            language={language}
          />
        )}
        <div className={styles["button-container"]}>
          {step > 1 && (
            <button className={styles["back-button"]} onClick={handlePrevStep}>
              {translations[language].buttons.back}
            </button>
          )}
          {step < 4 && (
            <button
              className={`${styles["next-button"]} ${
                isNextDisabled() ? styles["disabled"] : ""
              }`}
              onClick={handleNextStep}
              disabled={isNextDisabled()}
            >
              {translations[language].buttons.next}
            </button>
          )}
          {step === 4 && (
            <button
              className={`${styles["next-button"]} ${
                isNextDisabled() ? styles["disabled"] : ""
              }`}
              onClick={handleFormSubmit}
              disabled={isNextDisabled()}
            >
              {translations[language].buttons.save}
            </button>
          )}
        </div>
      </div>
      {showSuccessModal && (
        <SuccessModal onClose={resetForm} language={language} />
      )}
    </div>
  );
};

export default WorkoutForm;

const getMessage = (key: string, language: "en" | "ar"): string => {
  const keys = key.split(".");
  let value: unknown = translations[language];

  for (const k of keys) {
    value = (value as Record<string, unknown>)?.[k];
  }

  return typeof value === "string" ? value : key;
};

const calculateRatio = (height: number, weight: number): number => {
  if (height === 0 || weight === 0) return 0;
  return weight / height;
};
