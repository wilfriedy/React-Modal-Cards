import React from "react";

export default function Card({ eventsdata, handleClick }) {
  return (
    <div className="cards-contain">
      {eventsdata.map((event) => {
        return (
          <div className="box" key={event.id}>
            <h2 className="title">{event.title}</h2>
            <b className="author">{event.author}</b>
            <p className="passage">{event.passage}</p>
            <button
              onClick={() => {
                handleClick(event.id);
              }}
              className="read-more"
            >
              Read More
            </button>
          </div>
        );
      })}
    </div>
  );
}
