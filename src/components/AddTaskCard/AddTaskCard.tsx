import React, { useEffect, useState } from "react";
import "./AddTask.css";

interface CallToActionProps {
  cardDisplaySetter: (dataPassed: string) => void;
  handleAddTodo: (dataPassed: Todo) => void;
  todos: Todo[]; 
}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface NewTodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

const AddTaskCard: React.FC<CallToActionProps> = ({ handleAddTodo,cardDisplaySetter, todos }) => {
  const [newTodo, setNewTodo] = useState<NewTodo>({
    userId: 300,
    id: 3,
    title: "",
    completed: false,
  });

  const submitNewTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTodo.title !== "") {
      handleAddTodo(newTodo);
      setNewTodo({ ...newTodo, title: "", id: newTodo.id + 1 });
    } else {
      alert("Type in a todo");
    }
  };


  return (
    <div className="add-task">
      <form onSubmit={(e)=>submitNewTodo(e)}>
        <div className="task-header">
          <h4>Add Task</h4>
          <img onClick={()=>cardDisplaySetter("calendar")} src="/images/close.png" alt="cancel" className="cancel-image" />
        </div>

        <textarea
          value={newTodo.title}
          onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
        ></textarea>

<div className="button-wrapper">
          <button>
           
            <img src="/images/calendar.png" alt="plus-button" />
            <span>Today</span>
          </button>

          <button>
           
            <img src="/images/clock.png" alt="plus-button" />
            <span>00:00</span>
          </button>

          <button>

            <img src="/images/clock.png" alt="plus-button" />
            <span>00:00</span>
          </button>
        </div>


        <div className="notification">
            <div className="left">
            <img src="/images/bellthick.png" alt="plus-button" />
            <span>10 minutes before</span>


            </div>

            <img src="/images/close.png" alt="plus-button" className="cancel-image"/>

        </div>

        <div className="action-buttons">

        <button className="cancel" style={{border:"1px solid gray"}} onClick={()=>cardDisplaySetter("calendar")}>
            <span >Cancel</span>
           
          </button>

          <button className="active" type="submit" >
            <span>Add</span>
           
          </button>


        </div>

        {/* Rest of your code */}
      </form>
    </div>
  );
};

export default AddTaskCard;
