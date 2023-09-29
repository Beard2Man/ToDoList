import React from "react";

import Navigation from "./Navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faCircleCheck,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

const ToDo = ({ toDo, markDone, setUpdateData, deleteTask }) => {
  return (
    <div className="container">
      <>
        {toDo &&
          toDo
            .sort((a, b) => (a.id > b.id ? 1 : -1))
            .map((task, index) => {
              return (
                <React.Fragment key={task.id}>
                  <div className=" tasksContainer">
                    <div className={task.status ? "done" : ""}>
                      <span className="taskNumber">{index + 1}</span>
                      <span className="taskText">{task.title}</span>
                    </div>
                    <div>
                      <span className="taskText">{task.description}</span>
                    </div>

                    <div className="iconContent">
                      <span
                        title="Completed / Not Completed"
                        onClick={(e) => markDone(task.id)}
                      >
                        <FontAwesomeIcon icon={faCircleCheck} />
                      </span>
                      <span>
                        {task.status ? null : (
                          <span
                            title="Edit"
                            onClick={() =>
                              setUpdateData({
                                id: task.id,
                                title: task.title,
                                status: task.status ? true : false,
                              })
                            }
                          >
                            <FontAwesomeIcon icon={faPen} />
                          </span>
                        )}
                      </span>
                      <span>
                        <span
                          title="Delete"
                          onClick={() => deleteTask(task.id)}
                        >
                          <FontAwesomeIcon icon={faTrashCan} />
                        </span>
                      </span>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
      </>
    </div>
  );
};

export default ToDo;
