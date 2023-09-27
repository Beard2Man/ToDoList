const UpdateForm = ({ updateData, cancelUpdate, changeTask, updateTask }) => {
  return (
    <>
      {" "}
      <div>
        <input
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
