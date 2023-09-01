import React from 'react'
import "./CallToAction.css"

// interface ChildComponentProps {
//   cardDisplaySetter: () => void;
// }
interface CallToActionProps {
  cardDisplaySetter: (dataPassed: string) => void;
}

const CallToAction: React.FC<CallToActionProps> = ({cardDisplaySetter}) => {


  return (
    <section className='call-to-action'>

        <div className='left'>
          <h1>Good Morning</h1>
          <h6>You got some task to do</h6>


        </div>

        <div className='right'>
          <button onClick={()=>cardDisplaySetter("add")}>

            <img src='/images/plus.png' alt='plus-button'/>
            <span >Create New Task</span>

          </button>

        </div>

       

      </section>
  )
}

export default CallToAction