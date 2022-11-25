import Footer from "./footer"
import Header from "./Header"
import ListDetail from "./ListDetail"

export default function ListVeiw({list}){
    return (
        <div>
            <Header/>
            <h2>list</h2>
            <div>{list.map((it)=> (<ListDetail key={`list_${it.id}`}/>))}</div>
            <Footer/>

            <style jsx>{`
            h2{
                margin-left: 180px;
                margin-top: 100px;
            }
        
            `}</style>
        </div>
    )
}