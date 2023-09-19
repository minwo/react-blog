import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  let [글제목, b] = useState('여자 코트 추천');
  let [logo, setLogo] = useState(['ReactBlog', '네이버 블로그']);
  let [따봉, 따봉변경] = useState(0);

  function 함수(){
	따봉변경(따봉 + 1);
  }

  return (
    <div className="App">
      <div className="list">
		<h4>{ 글제목 } <span onClick={ 함수 }>👍</span> {따봉} </h4>
		<p>2월 17일 발행</p>
	  </div>
      <div className="list">
		<h4>{ logo[0] }</h4>
		<p>2월 17일 발행</p>
	  </div>
      <div className="list">
		<h4>{ logo[1] }</h4>
		<p>2월 17일 발행</p>
	  </div>
    </div>
  );
}

export default App;
