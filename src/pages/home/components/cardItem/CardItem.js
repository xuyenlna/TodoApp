import React from "react";
import "./CardItem.scss";

export default function CardItem(props) {
  const { card, color } = props;
  return (
    <div
      className="cardItem"
      style={{ borderColor: color }}
      data-bs-toggle="modal"
      data-bs-target="#infoModal"
    >
      <p className="taskName">{card.title}</p>
      <p className="deadline">{card.deadline}</p>
      <p className="priority">
        <i class="fa fa-arrow-up"></i> {card.priority}
      </p>
    </div>
  );
}
