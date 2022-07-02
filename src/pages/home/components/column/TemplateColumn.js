import React from "react";
import { Container, Draggable } from "react-smooth-dnd";
import CardItem from "../cardItem/CardItem";
import "./TemplateColumn.scss";

export default function TemplateColumn(wrapComponent) {
  const getCardPayload = (columnId, index) => {
    console.log(columnId, index);
  };
  return (props) => (
    <>
      <wrapComponent {...props} className="col-4 column">
        <div
          className="title column-drag-handle"
          style={{ backgroundColor: props.color }}
        >
          {" "}
          {props.title}
        </div>
        <div className="filter">
          <i class="fa fa-filter"></i>
        </div>
        <div className="taskList">
          <Container
            // onDragStart={(e) => console.log("drag started", e)}
            // onDragEnd={(e) => console.log("drag end", e)}
            // onDragEnter={() => {
            //   console.log("drag enter:", column.id);
            // }}
            // onDragLeave={() => {
            //   console.log("drag leave:", column.id);
            // }}
            groupName="col"
            onDrop={(dropResult) =>
              props.onCardDrop(props.column.id, dropResult)
            }
            getChildPayload={(index) => props.column.cards[index]}
            dragClass="card-ghost"
            dropClass="card-ghost-drop"
            onDropReady={(p) => console.log("Drop ready: ", p)}
            dropPlaceholder={{
              animationDuration: 150,
              showOnTop: true,
              className: "drop-preview",
            }}
            dropPlaceholderAnimationDuration={200}
          >
            {props.column.cards.map((card, index) => {
              return (
                <Draggable key={index}>
                  <CardItem color={props.color} card={card} />
                </Draggable>
              );
            })}
          </Container>
        </div>
      </wrapComponent>

      {/* modal
      <TaskDetails /> */}
    </>
  );
}
