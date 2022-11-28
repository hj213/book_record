import Link from "next/link"
import Detail from "./Detail"; 
 
 const ListDetail = ({ id, title, author, content, created_date}) => {
    return(
        <div>
    
            <div className="list" >{id}번째     |     {title} </div>

            <div className="hide">
                <Detail id={id} title={title} author={author} content={content} ></Detail>
            </div>
            <style jsx>{`
                .list {
                    margin-top: 30px;
                    margin-left: 180px;
                    paddig: 10px;
                }
                a{
                    text-decoration: none;
                    color: gray;
                }
            `}</style>
        </div>
    )
};

export default ListDetail;