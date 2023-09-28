const UpdateForm = ({ updateData, cancelUpdate, changeTask, updateTask }) => {
  const handleKeyUpdate = (e) => {
    if (e.key === "Enter") {
      updateTask();
    }
  };
  return (
    <>
      {" "}
      <div>
        <input
          onKeyDown={handleKeyUpdate}
          value={updateData && updateData.title}
          onChange={(e) => changeTask(e)}
        />
      </div>
      <div>
        <button onClick={updateTask}>Update</button>
        <button onClick={cancelUpdate}>Cancel</button>
      </div>
    </>
  );
};

export default UpdateForm;
