import { useState, useEffect } from "react";

import AddTaskForm from "./components/AddTaskForm.jsx";
import UpdateForm from "./components/UpdateForm.jsx";
import ToDo from "./components/ToDo.jsx";
import Navigation from "./components/Navigation.jsx";
import WeatherCalendar from "./components/WeatherCalendar.jsx";
/* IMPORT CSS */
import "./styleComponents/addTask.scss";

import "./App.scss";

function App() {
  const [toDo, setToDo] = useState([]);
  const [calendar, setCalendar] = useState(new Date());
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");
  const [desc, setDesc] = useState("");

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
    if (newTask && desc && calendar) {
      let num = toDo.length + 1;
      let newEntry = {
        id: num,
        title: newTask,
        description: desc,
        calendar: calendar,
        status: false,
      };

      setToDo([...toDo, newEntry]);
      setNewTask("");
      setDesc("");
      setCalendar("");
    }
  };
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
      calendar: calendar.value,
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

  /*Show and hide*/
  const [isShown, setIsShown] = useState(false);
  const handleClick = (e) => {
    setIsShown((current) => !current);
  };
  return (
    <div className="App container">
      <WeatherCalendar />
      {updateData && updateData ? (
        <UpdateForm
          updateData={updateData}
          cancelUpdate={cancelUpdate}
          changeTask={changeTask}
          updateTask={updateTask}
        />
      ) : (
        <div>
          <button className="btnAddTask" onClick={handleClick}>
            New Task
          </button>
          {isShown && (
            <div>
              <AddTaskForm
                newTask={newTask}
                setNewTask={setNewTask}
                addTask={addTask}
                desc={desc}
                setDesc={setDesc}
                calendar={calendar}
                setCalendar={setCalendar}
              />
            </div>
          )}
        </div>
      )}

      <ToDo
        toDo={toDo}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />
      <Navigation />
    </div>
  );
}

export default App;
