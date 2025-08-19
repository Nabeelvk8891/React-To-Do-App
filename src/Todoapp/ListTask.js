import React from 'react'

const ListTask = ({task,removeTask,index}) => {
  return (
    <>
        <div className='list-tasks'>
           {task.title}
           <button onClick={()=>removeTask(index)} className='dlt-btn'>✅</button>
           <button onClick={()=>removeTask(index)} className='dlt-btn'>⛔</button>
        </div>
    
    </>
  )
}

export default ListTask