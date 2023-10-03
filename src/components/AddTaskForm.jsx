import "../styleComponents/addTask.scss";
import Calendar from "react-calendar";
import { useEffect, useState } from "react";

const AddTaskForm = ({
  newTask,
  setNewTask,
  addTask,
  desc,
  setDesc,
  calendar,
  setCalendar,
}) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  console.log("Ustaw kalendarz", calendar);

  return (
    <>
      <div className="  addTaskContainer">
        <div>
          <form className="taskForm" action="" onSubmit={addTask}>
            <input
              placeholder="Task title..."
              type="text"
              className="inputTask"
              value={newTask}
              onKeyDown={handleKeyDown}
              onChange={(e) => setNewTask(e.target.value)}
            />

            <textarea
              type="text"
              className="textareaTask"
              value={desc}
              placeholder="Task description..."
              onChange={(e) => setDesc(e.target.value)}
            />
          </form>
        </div>
        <div className="addTaskCalendar">
          <div className="choseCalendar">
            <div className="calendar-container">
              <Calendar
                onClick={() => setCalendar()}
                value={calendar}
                onChange={setCalendar}
                setCalendar={true}
              />
            </div>
            <div>
              {calendar.length > 0 ? (
                <p type="text">
                  {calendar[0].toDateString("")}
                  &nbsp;|&nbsp;
                </p>
              ) : (
                <p>
                  {/* <span>Selected date: </span> */}
                  {/* {calendar.toDateString("")} */}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="btnAdd">
          <button onClick={addTask}>Add Task</button>
        </div>
      </div>
    </>
  );
};

export default AddTaskForm;
