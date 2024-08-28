import React from "react";
import "./cards.css";

export const Card = ({ url, text, openModal }) => {
  return (
    <div className="category" onClick={openModal}>
      <img src={url} className="category_image" />
      <div className="category_title">{text}</div>
    </div>
  );
};
