// 

import React, { useContext } from 'react'
import { userName } from './CompA'

const CompC = () => {
    let user = useContext(userName)
  return (
    <div>
        <h1>{user}</h1>
    </div>
  )
}

export default CompC
