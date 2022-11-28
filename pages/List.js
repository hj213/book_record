import Footer from "./footer"
import Header from "./Header"
import ListDetail from "./ListDetail"

export default function ListVeiw({list, onDelete}){
    return (
        <div>
            <Header/>
            <h2>📗 내가 읽은 책들은...</h2>
            <div className="list">{list.map((it)=> (<ListDetail key={it.id} {...it} onDelete={onDelete}/>))}</div>
            <Footer/>

            <style jsx>{`
            h2{
                margin-left: 180px;
                margin-top: 100px;
            }

            .list{
                margin-top: 30px;
                
            }
            `}</style>
        </div>
    )
}


//리스트 대충 뿌리고, 상세 페이지도 대충 뿌리고, 문제는 리셋하면 없어진다는 거.