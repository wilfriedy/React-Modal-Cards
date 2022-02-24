import React from "react";
import styles from "../css/Cards.module.css";

export default function Card({ eventsdata, handleClick }) {
  return (
    <div className={styles.containerCards}>
      {eventsdata.map((event) => {
        return (
          <div className={styles.cards_box} key={event.id}>
            <h2 className="title">{event.title}</h2>
            <b className="author">{event.author}</b>
            <p className="passage">{event.passage}</p>
            <button
              onClick={() => {
                handleClick(event.id);
              }}
              className="read-more"
            >
              Close
            </button>
          </div>
        );
      })}
    </div>
  );
}
