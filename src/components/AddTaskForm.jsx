const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
  return (
    <>
      <div>
        <div>
          <input
            type="text"
            className=""
            value={newTask}
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
