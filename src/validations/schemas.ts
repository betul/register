/* eslint-disable @typescript-eslint/no-explicit-any */
import * as yup from "yup";
import { translations } from "../i18n/translations";

type ValidationCategory = keyof typeof translations.en.validation;
type ValidationField<T extends ValidationCategory> =
  keyof (typeof translations.en.validation)[T];

const getValidationMessage = (key: string, language: "en" | "ar"): string => {
  try {
    const [category, field] = key.split(".") as [
      ValidationCategory,
      ValidationField<ValidationCategory>
    ];
    const message = translations[language]?.validation?.[category]?.[field];
    return message || translations.en.validation[category][field];
  } catch (error) {
    console.error(
      `Translation error for key: ${key}, language: ${language}`,
      error
    );
    const [category, field] = key.split(".") as [
      ValidationCategory,
      ValidationField<ValidationCategory>
    ];
    return translations.en.validation[category][field];
  }
};

export const createSchemas = (language: "en" | "ar") => {
  return {
    stepOneSchema: yup.object().shape({
      weight: yup
        .number()
        .typeError(getValidationMessage("weight.typeError", language))
        .positive(getValidationMessage("weight.positive", language))
        .min(30, getValidationMessage("weight.min", language))
        .max(250, getValidationMessage("weight.max", language))
        .required(getValidationMessage("weight.required", language)),

      height: yup
        .number()
        .typeError(getValidationMessage("height.typeError", language))
        .positive(getValidationMessage("height.positive", language))
        .min(100, getValidationMessage("height.min", language))
        .max(250, getValidationMessage("height.max", language))
        .required(getValidationMessage("height.required", language)),

      ratio: yup
        .number()
        .typeError(getValidationMessage("ratio.typeError", language))
        .positive(getValidationMessage("ratio.positive", language)),
    }),

    stepTwoSchema: yup.object().shape({
      selectedDays: yup
        .array()
        .min(1, getValidationMessage("days.min", language))
        .required(getValidationMessage("days.required", language)),
    }),

    stepThreeSchema: yup.object().shape({
      goal: yup
        .string()
        .required(getValidationMessage("goal.required", language)),
    }),

    stepFourSchema: yup.object().shape({
      email: yup
        .string()
        .required(getValidationMessage("email.required", language))
        .email(getValidationMessage("email.format", language)),
      password: yup
        .string()
        .required(getValidationMessage("password.required", language))
        .min(8, getValidationMessage("password.min", language))
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          getValidationMessage("password.format", language)
        ),
      fullName: yup
        .string()
        .required(getValidationMessage("fullName.required", language))
        .matches(
          /^[a-zA-Z\s]*$/,
          getValidationMessage("fullName.format", language)
        ),
      surname: yup
        .string()
        .required(getValidationMessage("surname.required", language))
        .matches(
          /^[a-zA-Z\s]*$/,
          getValidationMessage("surname.format", language)
        ),
    }),
  };
};
