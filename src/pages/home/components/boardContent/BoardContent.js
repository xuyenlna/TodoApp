import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { Container, Draggable } from "react-smooth-dnd";
import { initalData } from "../../../../data/initialData";
import { applyDrag } from "../../../../utilities/drapDrop";
import { mapOrder } from "../../../../utilities/sort";
import Column from "../column/Column";
import "./BoardContent.scss";

export default function BoardContent() {
  const [board, setBoard] = useState({});
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const dataFromDb = initalData.boards.find(
      (board) => board.id === "board-1"
    );
    if (dataFromDb) {
      setBoard(dataFromDb);
      //   setColumns(dataFromDb.columns);
      setColumns(mapOrder(dataFromDb.columns, dataFromDb.columnOrder, "id"));
    }
  }, []);

  if (isEmpty(board)) {
    return <div>data not found</div>;
  }

  const onColumnDrop = (dropResult) => {
    let newColumns = [...columns];
    newColumns = applyDrag(newColumns, dropResult);

    let newBoard = { ...board };
    newBoard.columnOrder = newColumns.map((item) => item.id);
    newBoard.columns = newColumns;

    setColumns(newColumns);
    setBoard(newBoard);
  };

  const onCardDrop = (columnId, dropResult) => {
    if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
      let newColumns = [...columns];
      let currentColumn = newColumns.find((item) => item.id === columnId);
      currentColumn.cards = applyDrag(currentColumn.cards, dropResult);
      currentColumn.cardOrder = currentColumn.cards.map((item) => item.id);

      setColumns(newColumns);
    }
  };
  return (
    <div className="container">
      <div className="todoTask row">
        {/* todo */}

        <Container
          orientation="horizontal"
          onDrop={onColumnDrop}
          dragHandleSelector=".column-drag-handle"
          getChildPayload={(index) => columns[index]}
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: "column-drop-preview",
          }}
        >
          {columns.map((column, index) => {
            return (
              <Draggable key={index}>
                <Column
                  onCardDrop={onCardDrop}
                  column={column}
                  title={column.title.toUpperCase()}
                  color={
                    column.title === "todo"
                      ? "orange"
                      : column.title === "doing"
                      ? "#AE36B0"
                      : "#78D628"
                  }
                />
              </Draggable>
            );
          })}
        </Container>
      </div>
    </div>
  );
}
