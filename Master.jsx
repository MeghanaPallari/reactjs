import React from 'react'
import {Routes , Route} from "react-router-dom"
import Login from './Login'
import Dashboard from './Dashboard'
import Error from './Error'
import Mobiles from './Mobiles'
import Laptops from './Laptops'
const Master = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
        <Route path='dashboard/mobiles' element={<Mobiles></Mobiles>}></Route>
        <Route path='dashboard/laptops' element={<Laptops></Laptops>}></Route>
        </Route>
        <Route path='/error' element={<Error></Error>}></Route>
      </Routes>
    </div>
  )
}

export default Master
