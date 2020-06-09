import React from "react";
import Mascot from "./Mascot/Mascot";
import {Redirect} from 'react-router-dom';


const FinalPage = () => {

  if(localStorage.getItem('level_number') < 21){
    return <Redirect to={'game'} />
  }

  return <>
    <Mascot/>
  </>;
};

export default FinalPage;