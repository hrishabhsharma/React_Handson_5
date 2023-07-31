import React, { useState } from 'react'

const Store = (HOC) => {
    function HocStore(){
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
      <HOC data={Data}/>
    )
}
return HocStore
}

export default Store