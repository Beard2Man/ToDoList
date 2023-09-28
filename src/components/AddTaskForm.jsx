import "../styleComponents/addTask.scss";

const AddTaskForm = ({ newTask, setNewTask, addTask, desc, setDesc }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <>
      <div className="addTaskContainer">
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
              // onKeyDown={handleKeyDown}
              onChange={(e) => setDesc(e.target.value)}
            />
          </form>
        </div>

        <div className="btnAdd">
          <button onClick={addTask}>Add Task</button>
        </div>
      </div>
    </>
  );
};

export default AddTaskForm;
