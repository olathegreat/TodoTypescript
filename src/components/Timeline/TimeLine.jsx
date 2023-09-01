import React from 'react'
import "./TimeLine.css"

const TimeLine = () => {
  return (
    <section className='timeline'>
    <div className='date'>
      <h3>January 2023</h3>

      <div className='days-flex'>
          <div className='day-card'>
            <span className='day'>
              Mon

            </span>

            <span className='day-date'>
               1
            </span>

          </div>

          <div className='day-card active-daycard'>
            <span className='day'>
              Tue

            </span>

            <span className='day-date'>
               2
            </span>

          </div>
          <div className='day-card'>
            <span className='day'>
              wed

            </span>

            <span className='day-date'>
               3
            </span>

          </div>
          <div className='day-card'>
            <span className='day'>
              Thur

            </span>

            <span className='day-date'>
               4
            </span>

          </div>
          <div className='day-card'>
            <span className='day'>
              Fri

            </span>

            <span className='day-date'>
               5
            </span>

          </div>
          <div className='day-card'>
            <span className='day'>
              Sat

            </span>

            <span className='day-date'>
               6
            </span>

          </div>
          <div className='day-card'>
            <span className='day'>
              Sun

            </span>

            <span className='day-date'>
               7
            </span>

          </div>

          <div className='day-card'>
            <span className='day'>
              Mon

            </span>

            <span className='day-date'>
               8
            </span>

          </div>
          <div className='day-card'>
            <span className='day'>
              Tue

            </span>

            <span className='day-date'>
               9
            </span>

          </div>
          <div className='day-card'>
            <span className='day'>
              Wed

            </span>

            <span className='day-date'>
               10
            </span>

          </div>
          <div className='day-card'>
            <span className='day'>
              Thur

            </span>

            <span className='day-date'>
               11
            </span>

          </div>
         
      </div>

    </div>

  </section>
  )
}

export default TimeLine