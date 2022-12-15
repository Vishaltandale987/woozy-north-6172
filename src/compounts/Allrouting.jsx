import React from 'react'
import {Route, Routes} from "react-router-dom"
import Home from '../pages/Home/Home'

import Login from '../pages/Login/Login'
import Resources from "../pages/resources/resources"
import Signup from '../pages/Signup/Signup'
import SurveyMonkey from '../pages/SurveyMonkey/SurveyMonkey'
const Allrouting = () => {
 
  return (
    <>
    <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/login' element={<Login/>}/>
   <Route path="/resource" element={<Resources/>}/>
   <Route path="/signup" element={<Signup/>}/>
   <Route path="/survey-monkey" element={<SurveyMonkey/>}/>
    </Routes>
    </>
  )
}

export default Allrouting
