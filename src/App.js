import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faTrashCan,
  faPen,
} from "@fortawesome/free-solid-svg-icons";

// import "../src/App.scss";

import "./App.scss";

function App() {
  const [toDo, setToDo] = useState([
    { id: 1, title: "Task 1", status: false },
    { id: 2, title: "Task 2", status: false },
  ]);

  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  const addTask = () => {};
  const deleteTask = (id) => {};
  const markDone = (id) => {};
  const cancelUpdate = () => {};
  const changeTask = (e) => {};
  const updateTask = () => {};

  return (
    <div className="App">
      {toDo && toDo.length ? "" : "No Tasks..."}
      {toDo &&
        toDo.map((task, index) => {
          return (
            <React.Fragment key={task.id}>
              <div className="container tasksContainer">
                <div className={task.status ? "done" : ""}>
                  <span className="taskNumber">{index + 1}</span>
                  <span className="taskText">{task.title}</span>
                </div>
                <div className="iconContent">
                  <span>
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                  <span>
                    <span>
                      <FontAwesomeIcon icon={faPen} />
                    </span>
                  </span>
                  <span>
                    <span>
                      <FontAwesomeIcon icon={faTrashCan} />
                    </span>
                  </span>
                </div>
              </div>
            </React.Fragment>
          );
        })}
    </div>
  );
}

export default App;
