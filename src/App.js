import "./App.scss";
import { useState } from "react";

function App() {
	let post = "강남 우동 맛집";
	let [글제목, 글제목변경] = useState(['여자 코트 추천', 'ReactBlog', '네이버 블로그']);
	let [따봉, 따봉변경] = useState([0,10,0]);
	let [modal, setModal] = useState(false);
	let [title, setTitle] = useState('타이틀');
	let [mdTitle, setMdTitle] = useState(0);
	let currentDate = new Date();
	let year = currentDate.getFullYear();
	let month = currentDate.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줍니다.
	let day = currentDate.getDate();
	let dateValue = year + '-' + month + '-' + day;
  
	function modalFn(e){
		if(!modal){
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
						<h4 onClick={(e) =>{modalFn(e); setMdTitle(i)}}>
							{글제목[i]}
							<span onClick={(e) => { 
								e.stopPropagation();
								let count = [...따봉];
								count[i] = count[i] + 1;
								따봉변경(count)}
							}>👍</span>
							{따봉[i]}
						</h4>

						<p>{dateValue}</p>

						<button onClick={() => {
							let new글제목 = [...글제목];
							new글제목.splice(i, 1);
							console.log(new글제목);
							글제목변경(new글제목);
						}}>삭제</button>
					</div>
				)	
			})
		}

		<div>
			<input type="text" id="txtAdd" />
			<button onClick={(e) => {
				글제목변경(prev글제목변경 => [...prev글제목변경, document.querySelector('#txtAdd').value])
			}}>글추가</button>
		</div>

		
		<input type="text" id="hdTitle" />
		<button onClick={(e) => {
			setTitle(document.querySelector('#hdTitle').value);
		}}>적용</button>

		{
			modal == true? <Modal 글제목={글제목} mdTitle={mdTitle} /> : null
		}
    </div>
  );
}

function Modal (props) {
	console.log(props.mdTitle);
	return (
		<div className="modal">
			<h4>{props.글제목[props.mdTitle]}</h4>
			<p>날짜</p>
			<p>상세내용</p>
			<button onClick={() => {}}>글수정</button>
		</div>
	)
}

export default App;
