import React from 'react'
import "./CallToAction.css"
const CallToAction = () => {
  return (
    <section className='call-to-action'>

        <div className='left'>
          <h1>Good Morning</h1>
          <h6>You got some task to do</h6>


        </div>

        <div className='right'>
          <button >

            <img src='/images/plus.png' alt='plus-button'/>
            <span>Create New Task</span>

          </button>

        </div>

       

      </section>
  )
}

export default CallToAction