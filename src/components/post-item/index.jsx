import React from "react";
import style from "./style.module.css";


const PostItem = ({ data }) => {
   
    console.log(data.id);
    return (
        <div className={style.box}>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
            <p>{data.id}</p>
        </div>
    )
}

export default PostItem;