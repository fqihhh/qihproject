import { useState } from "react";
import "./AlertButton.css";

export default function AlertButton({ text, message }) {
  const [textP, setTextP] = useState("ubah");

  const handleClick = () => {
    setTextP(textP === message ? "ubah" : message);
  };

  return (
    <>
      <button onClick={handleClick}>{text}</button>
      <p id="text">{textP}</p>
    </>
  );
}