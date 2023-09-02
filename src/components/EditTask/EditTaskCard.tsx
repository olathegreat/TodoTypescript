import React, {useState} from "react";
import "./EditTask.css";


interface CallToActionProps {
  cardDisplaySetter: (dataPassed: string) => void;
  handleEditTodo: (dataPassed: Todo) => void;
  todoClicked: Todo;
  
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

const EditTaskCard: React.FC<CallToActionProps> = ({todoClicked, handleEditTodo, cardDisplaySetter}) => {
  const[editedTodo, setEditedTodo] = useState<NewTodo>(todoClicked)

  const editFormSubmit= (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(editedTodo.title!== ""){
      handleEditTodo(editedTodo);
      cardDisplaySetter("calendar")
    }else{
      alert("todo cannot be empty")
    }

  }
  return (
    <div className="add-task">
      <form onSubmit={(e)=>editFormSubmit(e)}>
        <div className="task-header">
          <h4>Edit Task</h4>

          <img onClick={()=>cardDisplaySetter("calendar")} src="/images/close.png" alt="cancel" className="cancel-image"/>
        </div>

        <textarea value={editedTodo.title} onChange={(e)=>setEditedTodo({...editedTodo, title:e.target.value})}></textarea>

        <div className="button-wrapper">
          <button>
           
            <img src="/images/calendar.png" alt="plus-button" />
            <span>Today</span>
          </button>

          <button>
           
            <img src="/images/clock.png" alt="plus-button" />
            <span>10:30am</span>
          </button>

          <button>

            <img src="/images/clock.png" alt="plus-button" />
            <span>11:30am</span>
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

          <button className="active" type="submit">
            <span>Save</span>
           
          </button>


        </div>
      </form>
    </div>
  );
};

export default EditTaskCard;
