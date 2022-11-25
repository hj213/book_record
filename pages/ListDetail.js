 const ListDetail = ({id, title, author, created_date}) => {
    return(
        <div>
            <div>{id}</div>
            <div>{title}</div>
            <div>{author}</div>
            <div>{created_date}</div>
        </div>
    )
};

export default ListDetail;