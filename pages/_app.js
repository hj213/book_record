import "../styles/global.css"
import { useState, useRef } from "react";

export default function App({Component, pageProps}) {

    const [data, setData] = useState([]);

    const dataId = useRef(1);
  
    const onCreate = (title, author, content, score) => {
      const created_date = new Date().getTime();
      const newItem = {
        title,
        author,
        content,
        score,
        created_date,
        id: dataId.current
      };
      dataId.current += 1;
      setData([newItem, ...data]);
    }

    const onDelete = (id) => {
      const newList = data.filter((it) => it.id !== id);
      setData(newList);
    }

    return (
        <div>
            <Component {...pageProps} onCreate={onCreate} list={data} onDelete={onDelete}/>
        </div>
    )
}