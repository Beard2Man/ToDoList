import { useEffect } from "react";

const AddTaskForm = ({ newTask, setNewTask, addTask, toDo }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <>
      <div>
        <div>
          <input
            type="text"
            className=""
            value={newTask}
            onKeyDown={handleKeyDown}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </div>
        <div>
          <button onClick={addTask}>Add Task</button>
        </div>
      </div>
    </>
  );
};

export default AddTaskForm;
