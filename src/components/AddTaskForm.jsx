const AddTaskForm = ({ newTask, setNewTask, addTask, desc, setDesc }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <>
      <div>
        <div>
          <form action="" onSubmit={addTask}>
            <input
              type="text"
              className=""
              value={newTask}
              onKeyDown={handleKeyDown}
              onChange={(e) => setNewTask(e.target.value)}
            />

            <textarea
              type="text"
              className=""
              value={desc}
              // onKeyDown={handleKeyDown}
              onChange={(e) => setDesc(e.target.value)}
            />
          </form>
        </div>
        <div>
          <button onClick={addTask}>Add Task</button>
        </div>
      </div>
    </>
  );
};

export default AddTaskForm;
