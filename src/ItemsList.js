import React,{useEffect,useState} from "react";
import axios from "axios";

function ItemsList(){
    const [items,setItems] = useState([]);
    useEffect(()=>{
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => axios.get('https://jsonplaceholder.typicode.com/posts?userId=1')
                        .then(response => setItems(response.data))
                        .catch(error => console.log(error))
                )
            .catch(err=>console.log(err));
    })
    return(
        <ul>
            {
                items.map((item,ind)=>
                    <li key={ind}>
                        {item.title}
                    </li>
                )
            }
        </ul>
    );
}

export default ItemsList;