import React from 'react'
import PureComp from './HocComp/PureComp'
import HocComp from './HocComp/HocCom'
import './App.css'


const App = () => {
  return (
    <div>
      <p className='head'>This is the Handson 5</p>
      <div className='main'>
        <HocComp/>
        <PureComp/>
      </div>
    </div>
  )
}

export default App