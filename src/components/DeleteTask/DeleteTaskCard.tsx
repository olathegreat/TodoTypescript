import React from "react";
import "./DeleteTask.css";


interface CallToActionProps {
 
  handleDeleteTodo: (dataPassed: number) => void;
  cardDisplaySetter: (dataPassed: string) => void;
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


const DeleteTaskCard: React.FC<CallToActionProps> = ({todoClicked, cardDisplaySetter,handleDeleteTodo}) => {
  
  const deleteTodo = () =>{

    handleDeleteTodo(todoClicked.id);
    cardDisplaySetter("calendar")

  }
  return (
    <div className="delete-task">
      
        <div className="delete-header">
          

          <img src="/images/close.png" alt="cancel" className="cancel-image"/>
        </div>

        <div className="task-details">

          <h4>{todoClicked.title}</h4>

          <div className="task-details-line">
            <img src="/images/bluecalendar.png" alt="date"/>
            <span className="task-timing"> 20th January, 2023</span>
          </div>

          <div className="task-details-line">
            <img src="/images/blueclock.png" alt="date"/>
            <span className="task-timing"> 8:00 - 10:00 AM</span>
          </div>

        </div>

        

       




        <div className="action-buttons">

        <button className="cancel" style={{border:"1px solid gray"}} onClick={deleteTodo}>
            <span >Delete</span>
           
          </button>

          <button className="active" onClick={()=>cardDisplaySetter("edit")}>
            <span>Edit</span>
           
          </button>


        </div>
      
    </div>
  );
};

export default DeleteTaskCard;
