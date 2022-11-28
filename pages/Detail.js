import Footer from "./footer";
import Header from "./Header";

export default function detail({author, title, created_date, content, id}){
    return(
        <div className="detail">
            <h2> {title}</h2>
            <div className="box">
                <div className="content" >작가: {content}</div>
                {/* <div className="date" >{created_date}</div> */}
                <div className="content" >내용: {author}</div>
            </div>
            <style jsx>{`
            h2{
                padding: 20px;
                font-size: 17px;
            }

            .box{
               padding-bottom: 10px;
            }

            .content{
                margin-left: 10px;
                padding: 10px;
                font-size: 15px;
            }

            .detail{
                width: 1150px;
                margin-left: 180px;
                background-color: #f2f7f2;
                border-radius: 7px;

            }
        
            `}</style>

        </div>
    )
}