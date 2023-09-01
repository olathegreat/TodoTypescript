import React from "react";
import "./EditTask.css";


interface CallToActionProps {
  cardDisplaySetter: (dataPassed: string) => void;
}

const EditTaskCard: React.FC<CallToActionProps> = ({cardDisplaySetter}) => {
  return (
    <div className="add-task">
      <form>
        <div className="task-header">
          <h4>Edit Task</h4>

          <img src="/images/close.png" alt="cancel" className="cancel-image"/>
        </div>

        <textarea value="create wireframe"></textarea>

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

          <button className="active">
            <span>Save</span>
           
          </button>


        </div>
      </form>
    </div>
  );
};

export default EditTaskCard;
