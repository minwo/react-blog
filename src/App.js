import "./App.scss";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  let [글제목, 글제목변경] = useState(['여자 코트 추천', 'ReactBlog', '네이버 블로그']);
  let [따봉, 따봉변경] = useState([0,10,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState('타이틀');


  function 함수(){
	따봉변경(따봉 + 1);
  }

  function modalFn(e){
	if(modal){
		setModal(false);
	} else {
		setModal(true);
	}
  }

  return (
    <div className="App">
		<header>{ title }</header>
		{
			글제목.map(function(a, i){
				return(
					<div className="list" key={i}>
						<h4 onClick={(e) =>{modalFn(e)}} data-index={i}>
							{글제목[i]}
							<span onClick={(e) => { 
								e.stopPropagation();
								let count = [...따봉];
								count[i] = count[i] + 1;
								따봉변경(count)}
							}>👍</span>
							{따봉[i]}
						</h4>
						<p>2월17일 발행</p>
					</div>
				)	
			})
		}

		<div>
			<input type="text" id="txtAdd" />
			<button onClick={(e) => {
				
			}}>글추가</button>
		</div>

		
		<input type="text" id="hdTitle" />
		<button onClick={(e) => {
			setTitle(document.querySelector('#hdTitle').value);
		}}>적용</button>

		{
			modal == true? <Modal 글제목={글제목} 글제목변경={글제목변경} /> : null
		}
    </div>
  );
}

function Modal (props,i, fc) {
	console.log(i);
	return (
		<div className="modal">
			<h4>{props.글제목}</h4>
			<p>날짜</p>
			<p>상세내용</p>
			<button onClick={() => {}}>글수정</button>
		</div>
	)
}

export default App;
