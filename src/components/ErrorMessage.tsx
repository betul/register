import React from "react";
import styles from "../styles/ErrorMessage.module.scss";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <div className={styles.error}>{message}</div>;
};

export default ErrorMessage;
