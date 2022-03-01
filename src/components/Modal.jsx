import React, { useState } from "react";
import styles from "../css/Modal.module.css";
import Form from "./Form";

export default function Modal({ addEvents }) {
  const [prompts, setPrompt] = useState(true);
  const handleClose = () => {
    setPrompt((prev) => {
      return !prev;
    });
  };

  return (
    <>
      {prompts && (
        <div className={styles.mainBg}>
          <div className={styles.modalInner}>
            <Form addEvents={addEvents} closeModal={handleClose} />
          </div>
        </div>
      )}
    </>
  );
}
