import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/commons/Footer";
import Header from "../components/commons/Header";
import Menubar from "../components/commons/Menubar";
import Headlesslayout from "../components/layouts/Headlesslayout";

const Counter = () => {
  const navigate = useNavigate();

  const [num, setNum] = useState(0);

  const increase = () => setNum((prev) => prev + 1);

  return (
    <Headlesslayout>
      <div>
        <div>카운터페이지</div>
        <div>클릭수 {num}</div>
        <div>
          <button onClick={increase}>클릭</button>
        </div>
        {/* <Link to={"/"}>메인으로 이동</Link> */}
        <button onClick={() => navigate("/")}>메인 페이지</button>
      </div>
    </Headlesslayout>
  );
};

export default Counter;
