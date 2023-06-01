import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Homepage/Home'
import Deatils from './Homepage/Deatils'
import Form from './Homepage/Form'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail' element={<Deatils/>}/>
        <Route path='/form' element={<Form/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App