import Footer from "./footer";
import Header from "./Header";

export default function myPage(){
    return(
        <div>
            <Header/>
                <div className="readme">
                    <h2 className="title" > π κ°λ°μ </h2>
                    <div className="content"> μ€ν¨μ  </div>
                    <h2 className="title"> π κΈ°νμλ </h2> 
                    <div className="content"> <p> μ΄ νλ‘μ νΈλ κ°λ°μμΈ μ κ° μ§μ  μ¬μ©νκΈ° μν΄ κΈ°νν λμλ‘μλλ€.</p> <p> μΈμ  κ°λΆν° μ°νμ μ‘λ μκ°λ³΄λ€ νμλ₯Ό μΉκ³  μλ μκ°μ΄ λμ΄λ¬μ΅λλ€. λ°λΌμ μ΄μ λ μκΈ°λ‘ μ μ§ μκ³  ν€λ³΄λλ₯Ό νμ©νμ¬ λ¬΄μΈκ°λ₯Ό κΈ°λ‘νλ©΄ μ’μ κ² κ°λ€κ³  μκ°νμμ΅λλ€. </p> <p>λ€μν κΈ°λ‘μ₯ μ€ λμκ² μ§κΈ κ°μ₯ νμν κ² λ¬΄μμΌμ§ κ³ λ―Όν΄λ³Έ λμ μ€λ«λμ μ΄μ§ μμλ λμ κΈ°λ‘μ₯μ λ μ¬λ Έμ΅λλ€.</p></div>
                    <h2 className="title" > π μ¬μ©ν κΈ°μ  μ€ν </h2>
                    <div className="content"> Next.js </div>
                    <h2 className="title" > π λ³΄μνκ³  μΆμ μ  </h2>
                    <div className="content"> 1οΈβ£ λλ§μ μ± μ μ μ±μ  <br/> <br/> 2οΈβ£ λ‘κ·ΈμΈ λ° λ§μ΄ νμ΄μ§<br/> <br/> 3οΈβ£ λ§€λ¬ λͺ κΆμ© μ½μλμ§ μλ €μ€ μ μλ κΈ°λ₯ <br/> <br/> 4οΈβ£ λ°μ΄ν° λ² μ΄μ€ μ°κ²° </div>
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