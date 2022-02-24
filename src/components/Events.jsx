import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";

export default function Events() {
  const [events, setEvents] = useState([
    {
      id: uuidv4(),
      title: "Hope & Trust",
      author: "James Clearence",
      brief: "Lorem ipsum dolor sit amet",
      passage:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nostrum distinctio deleniti perspiciatis excepturi, cum ipsa veniam nisi dolor deserunt.",
      showpop: false,
    },
    {
      id: uuidv4(),
      title: "Lie & Truth",
      author: "James Bondes",
      brief: "Lorem ipsum dolor sit amet",
      passage:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nostrum distinctio deleniti perspiciatis excepturi, cum ipsa veniam nisi dolor deserunt.",
      showpop: false,
    },
    {
      id: uuidv4(),
      title: "Justice & Finance",
      author: "Bill Gated",
      brief: "Lorem ipsum dolor sit amet",
      passage:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nostrum distinctio deleniti perspiciatis excepturi, cum ipsa veniam nisi dolor deserunt.",
      showpop: false,
    },
    {
      id: uuidv4(),
      title: "Faith & Belief",
      author: "Jr Martin",
      brief: "Lorem ipsum dolor sit amet",
      passage:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nostrum distinctio deleniti perspiciatis excepturi, cum ipsa veniam nisi dolor deserunt.",
      showpop: false,
    },
    {
      id: uuidv4(),
      title: "Happy & Sad",
      author: "Willy Sam",
      brief: "Lorem ipsum dolor sit amet",
      passage:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nostrum distinctio deleniti perspiciatis excepturi, cum ipsa veniam nisi dolor deserunt.",
      showpop: false,
    },
  ]);

  const handleClick = (id) => {
    console.log(id);
  };

  return (
    <div>
      <Card eventsdata={events} handleClick={handleClick} />;
    </div>
  );
}
