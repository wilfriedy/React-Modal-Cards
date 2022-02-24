import React, { useState } from "react";
import styles from "../css/Modal.module.css";

export default function Modal() {
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
            <h2>Hello welcome to the events</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              amet inventore qui! Quibusdam totam nostrum culpa repudiandae
              aspernatur officia distinctio est aliquam libero! Aliquam, ullam!
              Repellat aliquam autem consequatur amet!
            </p>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
