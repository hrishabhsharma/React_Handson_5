import React, { useState } from 'react'

const PureComp = () => {
    const [Data] = useState([
        {
        Name : 'Harshita',
        Department : 'Marketing',
        Rating : 2
        },
        {
        Name : 'Sahil',
        Department : 'Computer Science',
        Rating : 5
        },
        {
        Name : 'Dinesh',
        Department : 'Info. Tech.',
        Rating : 7
        }
    ])
  return (
    <div className='comp'>
        <h1>This is the Example of Pure Component</h1>
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
      {
        Data.map((item,index)=>{
          return(
            <tr key={index}>
              <td>{item.Name}</td>
              <td>{item.Department}</td>
              <td>{item.Rating}</td>
            </tr>
          )
        })
      }
        </tbody>
      </table>
    </div>
  )
}

export default PureComp