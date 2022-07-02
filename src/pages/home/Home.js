import React from "react";
import Menu from "./components/menu/Menu";
import TaskDetails from "./components/taskDetails/TaskDetails";
import TopContent from "./components/topContent/TopContent";
import BoardContent from "./components/boardContent/BoardContent";
import "./Home.scss";
import AddNewTask from "./components/addNewTask/AddNewTask";

export default function Home() {
  return (
    <>
      <div className="row home">
        <Menu />

        <div className="col-10">
          {/* topContent*/}
          <TopContent />

          {/* boardContent contains taskList */}
          <BoardContent />
        </div>
      </div>

      {/* MODAL Task details */}
      <TaskDetails />

      {/* MODAL form add new task */}
      <AddNewTask />
    </>
  );
}
