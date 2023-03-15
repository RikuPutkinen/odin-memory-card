import { useState } from "react";

export default function Card(props) {
  const [clicked, setClicked] = useState(false);

  return (
    <button onClick={() => setClicked(true)}>
      <img src={props.src} alt={props.alt}></img>
    </button>
  )
}