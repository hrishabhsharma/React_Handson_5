import React from 'react'
import Store from './Store'

const HocCom = (props) => {
  return (
    <div className='comp'>
      <h1>This is the Example of HOC</h1>
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
        props.data.map((item,index)=>{
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

const HocComp = Store(HocCom)

export default HocComp