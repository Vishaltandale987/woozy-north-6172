import React from "react";
import { Route, Routes } from "react-router-dom";
import NewSurvey from "../../pages/CreateSurvey/NewSurvey";
import Dashbord from "../../pages/dashbord/Dashbord";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Signup from "../../pages/Login/Signup";
import Plan from "../../pages/plan/Plan";
// import Home from '../../pages/Home/Home'

// import Login from '../../pages/Login/Login'
import Resources from "../../pages/resources/resources";
// import Signup from '../../pages/Signup/Signup'
import SurveyMonkey from "../../pages/SurveyMonkey/SurveyMonkey";
const Allrouting = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/resource" element={<Resources />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/survey-monkey" element={<SurveyMonkey />} />
        <Route path="/plan" element={<Plan/>} />

        <Route path="/dashbord" element={<Dashbord />}></Route>
        <Route path="/surveys" element={<NewSurvey/>}></Route>
        {/* <Route path="/final" element={}></Route> */}
      </Routes>
    </>
  );
};

export default Allrouting;
