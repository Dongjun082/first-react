import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./pages/Counter";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/Counter"} element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// BrowserRouter : HTML5를 지원하는 브라우저의 주소를 감지 한다.
// HashRouter 해시 주소(http://goddaehee.tistory.com/#test )를 감지 한다.
