import Footer from "./footer";
import Header from "./Header";

export default function myPage(){
    return(
        <div>
            <Header/>
                <div className="readme">
                    <h2 className="title" > 📌 개발자 </h2>
                    <div className="content"> 윤효정 </div>
                    <h2 className="title"> 📌 기획의도 </h2> 
                    <div className="content"> <p> 이 프로젝트는 개발자인 제가 직접 사용하기 위해 기획한 독서록입니다.</p> <p> 언젠가부터 연필을 잡는 시간보다 타자를 치고 있는 시간이 늘어났습니다. 따라서 이제는 수기로 적지 않고 키보드를 활용하여 무언가를 기록하면 좋을 것 같다고 생각하였습니다. </p> <p>다양한 기록장 중 나에게 지금 가장 필요한 게 무엇일지 고민해본 끝에 오랫동안 열지 않았던 독서 기록장을 떠올렸습니다.</p></div>
                    <h2 className="title" > 📌 사용한 기술 스택 </h2>
                    <div className="content"> Next.js </div>
                    <h2 className="title" > 📌 보수하고 싶은 점 </h2>
                    <div className="content"> 1️⃣ 나만의 책 점수 책정 <br/> <br/> 2️⃣ 로그인 및 마이 페이지<br/> <br/> 3️⃣ 매달 몇 권씩 읽었는지 알려줄 수 있는 기능 <br/> <br/> 4️⃣ 데이터 베이스 연결 </div>
                </div>           

            <style jsx>{`
                .readme{
                    width: 1100px;
                    margin-left: 180px;
                    margin-top: 80px;
                }

                .h2{
                    margin-bottom: 30px;
                }
                .content{
                    margin-bottom: 30px;
                    padding-left: 20px;
                    font-size: 16px;
                }
                p{
                    font-size: 16px;
                }
            `}

            </style>
        </div>
    )
}