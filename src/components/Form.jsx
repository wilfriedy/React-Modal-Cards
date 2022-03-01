import React, { useState } from "react";
import styles from "../css/Form.module.css";

export default function Form({ addEvents, closeModal }) {
  const [title, setTitle] = useState("");
  const [passage, Setpassage] = useState("");
  const [author, Setauthor] = useState("");
  // let err = "";
  const [err, setErr] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (title && passage && author) {
      const newEvent = {
        title: title,
        passage: passage,
        author: author,
        id: Math.random() * 100,
      };
      addEvents(newEvent);
      setTitle("");
      Setpassage("");
      Setauthor("");
      setErr("");
      setTimeout(() => {
        closeModal();
      }, 1000);
    } else {
      setErr("Please enter the required values");
      console.log(err);
    }
  };

  return (
    <div>
      <p className={styles.errors}>{err}</p>
      <form className={styles.form} onSubmit={submitHandler}>
        <label>
          <span>Event</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <br />
        <label>
          <span>Author</span>
          <input
            type="text"
            onChange={(e) => Setauthor(e.target.value)}
            value={author}
          />
        </label>
        <br />
        <label>
          <span>Passage</span>
          <input
            type="text"
            onChange={(e) => Setpassage(e.target.value)}
            value={passage}
          />
        </label>
        <br />
        <button>Save</button>
      </form>
    </div>
  );
}
