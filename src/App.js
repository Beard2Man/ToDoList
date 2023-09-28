import { useState, useEffect } from "react";

import AddTaskForm from "./components/AddTaskForm.jsx";
import UpdateForm from "./components/UpdateForm.jsx";
import ToDo from "./components/ToDo.jsx";

import "./App.scss";

function App() {
  const [toDo, setToDo] = useState([]);

  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");
  const [desc, setDesc] = useState("");
  // console.log("wartosc poczatek", desc);
  // console.log("wartosc poczatek", newTask);
  useEffect(() => {
    localStorage.setItem("toDo", JSON.stringify(toDo));
  }, [toDo]);

  useState(() => {
    const storeToDo = JSON.parse(localStorage.getItem("toDo"));
    if (storeToDo) {
      setToDo(storeToDo);
    }
  });

  const addTask = () => {
    if (newTask && desc) {
      let num = toDo.length + 1;
      let newEntry = {
        id: num,
        title: newTask,
        description: desc,
        status: false,
      };

      setToDo([...toDo, newEntry]);
      setNewTask("");
      setDesc("");
    }
  };
  // console.log("wartosc po", desc);
  // console.log("wartosc po", newTask);
  const deleteTask = (id) => {
    let newTask = toDo.filter((task) => task.id !== id);
    setToDo(newTask);
  };
  const markDone = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
  };
  const cancelUpdate = () => {
    setUpdateData("");
  };
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      description: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };
  const updateTask = () => {
    let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let updateObject = [...filterRecords, updateData];
    setToDo(updateObject);
    setUpdateData("");
  };

  return (
    <div className="App">
      {updateData && updateData ? (
        <UpdateForm
          updateData={updateData}
          cancelUpdate={cancelUpdate}
          changeTask={changeTask}
          updateTask={updateTask}
        />
      ) : (
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
          desc={desc}
          setDesc={setDesc}
        />
      )}

      {toDo && toDo.length ? "" : "No Tasks..."}
      <ToDo
        toDo={toDo}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
