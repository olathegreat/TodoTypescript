import React from "react";
import "./DeleteTask.css";


const DeleteTaskCard = () => {
  return (
    <div className="delete-task">
      
        <div className="delete-header">
          

          <img src="/images/close.png" alt="cancel" className="cancel-image"/>
        </div>

        <div className="task-details">

          <h4>Create Wireframe</h4>

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

        <button className="cancel" style={{border:"1px solid gray"}}>
            <span >Delete</span>
           
          </button>

          <button className="active">
            <span>Edit</span>
           
          </button>


        </div>
      
    </div>
  );
};

export default DeleteTaskCard;
