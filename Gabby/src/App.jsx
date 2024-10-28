import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Doctors from './Pages/Doctors'


const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]' >
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/doctors' element={<Doctors/>} />
            <Route path='/doctors/:speciality' element={<Doctors/>} />



        </Routes>
    </div>
  )
}

export default App