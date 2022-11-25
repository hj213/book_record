import Header from "./Header"
import Footer from "./footer"
import { useState } from "react"

export default function Write({onCreate}){

    const [state, setState] = useState({
        title: '',
        author:'',
        content: '',
        score: ''
    });


    const onChangeState = (e) =>{
        setState({...state, [e.target.name]: e.target.value});
    };

    const submit = () => {
        onCreate(state.title, state.content, state.author, state.score);
        alert("저장되었습니다!");
    }

    return (
        <div>
            <Header/>
            <h2>✏️ 내가 읽은 책을 기록해두어요.</h2>

            <div className="title" >제목</div>
            <input className="input" placeholder="책 제목을 작성하세요." name='title' value={state.title} onChange={onChangeState}></input>

            <div className="author" >작가</div>
            <input className="input" placeholder="작가를 작성하세요." name='author' value={state.author} onChange={onChangeState}></input>

            <div className="content" >기록하고 싶은 것</div>
            <textarea className="textarea" placeholder="기록하고 싶은 것을 입력하세요." maxLength="500" name='content' value={state.content} onChange={onChangeState}/>

            <div className="score" >점수</div>
            <fieldset className="fieldset">
                <div className="radio">
                <input type="radio" className="reviewStar" value="5" id="rate1"/><label
                    for="rate1">★</label>
                <input type="radio" className="reviewStar" value="4" id="rate2"/><label
                    for="rate2">★</label>
                <input type="radio" className="reviewStar" value="3" id="rate3"/><label
                    for="rate3">★</label>
                <input type="radio" className="reviewStar" value="2" id="rate4"/><label
                    for="rate4">★</label>
                <input type="radio" className="reviewStar" value="1" id="rate5"/><label
                    for="rate5">★</label>
                </div>
            </fieldset>

            <button className="save" onClick={submit}>기록하기</button>

            <Footer/>

            <style jsx>{`
            h2{
                margin-left: 180px;
                margin-top: 100px;
            }

            .title{
                margin-left: 180px;
                margin-top: 40px;
                font-size: 18px;
            }

            .input{
                margin-left: 180px;
                margin-top: 15px;
                margin-bottom: 10px;
                padding: 15px;
                font-size: 14px;
                width: 1100px;
                border: 1px solid lightgray;
                border-radius: 5px;

            }

            .input::placeholder {
                font-size: 12px;
            }

            .author{
                margin-left: 180px;
                margin-top: 40px;
                font-size: 18px;
            }

            .content{
                margin-left: 180px;
                margin-top: 40px;
                font-size: 18px;
            }

            .textarea{
                margin-left: 180px;
                margin-top: 15px;
                margin-bottom: 10px;
                padding: 15px;
                font-size: 14px;
                width: 1100px;
                height: 200px;
                border: 1px solid lightgray;
                border-radius: 5px;

            }

            .textarea::placeholder {
                font-size: 12px;
            }

            .score{
                margin-left: 180px;
                margin-top: 40px;
                font-size: 18px;
            }

            .radio{
                margin-left:170px;
                margin-top:15px;
            }
          
            .radio input[type=radio]{
                display:none;
            }

            .radio label{
                color: transparent;
                text-shadow: 0 0 0 #f0f0f0;
            }
            .radio label:hover{
                text-shadow: 0 0 0 rgba(250, 208, 0, 0.99);
            }
            .radio label:hover ~ label{
                text-shadow: 0 0 0 rgba(250, 208, 0, 0.99);
            }
            .radio input[type=radio]:checked ~ label{
                text-shadow: 0 0 0 rgba(250, 208, 0, 0.99);
            }

            .fieldset{
                display:inline-block;
                direction: ltr;
                border: none;
            }

            .fieldset legend{
                text-align: left;
            }
            .save{
                margin-top: 30px;
                margin-bottom: 30px;
                margin-left: 1190px;
                font-size: 14px;
                width: 120px;
                height: 40px;
                border: none;
                border-radius: 5px;
                background-color: #547C46;
                color: white;
            }

            `}</style>
        </div>


    )
}