import { useState } from "react";
import "./AlertButton.css";

export default function AlertButton({ text, message }) {
  const [textP, setTextP] = useState("data bisa berubah");

  const handleClick = () => {
    setTextP(textP === message ? "data bisa berubah" : message);
  };

  return (
    <>
      <button onClick={handleClick}>{text}</button>
      <p id="text">{textP}</p>
    </>
  );
}