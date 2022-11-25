import Link from "next/link"
import { useRouter } from "next/router";
import logo from '/img/logo.png';


export default function Header(){
    const router = useRouter();
    return (
        <div>
                <div className="logo">
                    <div>
                        <Link href="/">
                        {/* <img src="logo"></img> */}
                        <a> 로고 이미지 </a>
                        </Link>
                    </div>

                    <div className="navigator">
                        <Link href="/List">
                        <a > 독서록 </a>
                        </Link>
                        <Link href="/Write">
                        <a> 기록하기 </a>
                        </Link>
                        <Link href="/Write">
                        <a> 마이페이지 </a>
                        </Link>
                    </div>
                </div>

            <style jsx>{`
            .logo {
               display: flex;
               margin-top: 40px;
               margin-left: 180px;
    
            }

            .navigator {
                
                margin-left: 600px
    
            }
            
            a {
                margin-right: 80px;
                text-decoration:none;
                color: black;
            }

            `}</style>

        </div>

    )
}