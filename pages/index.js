import Header from "./Header"
import Footer from "./footer"

export default function Index (){

    return (
        <div>

       <Header/>

        <h2>안녕 여기는 인덱스에 들어갈 내용물들이야 </h2>
        
        <Footer/>

        <style jsx>{`
            h2{
                margin-left: 90px;
                margin-top: 100px;
            }
        
            `}</style>

        </div>
    )

}