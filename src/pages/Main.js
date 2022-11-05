import React from "react";
import { useNavigate } from "react-router-dom";
import Headlayout from "../components/layouts/Headlayout";

const Main = () => {
  const navigate = useNavigate();

  return (
   <Headlayout>
     <div>
      <div>Main페이지</div>
      <button onClick={() => navigate("/Counter")}>카운터로 이동</button>
    </div>
   </Headlayout> 
  );
};

export default Main;
