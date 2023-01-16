import { useState } from "react";
import Form from "./Form";

function List() {
    const [arr, setArr] = useState([
        { id: 1, title:"Title 1"},
        { id: 2, title:"Title 2"}
    ])
    

    return (
        <div>
            <Form arr={arr} callB={setArr}/>
            {arr.map((elem) => {
                return (
                    <div key={elem.id}>
                        <p>{elem.id}</p>
                        <h5>{elem.title}</h5>
                    </div>
                )
            })}
        </div>
    );
}

export default List;
