import { useState } from "react";


function Form({arr, callB}) {
    const [localVar, setLocalVar] = useState("")
    const insert_value = (e) => {
        setLocalVar(e.target.value)
    }

    const insertIntoArr = (e) => {
        e.preventDefault()
        callB([...arr, {id: +new Date, title: localVar}])
        console.log(arr);
    }

    return (
        <form onSubmit={insertIntoArr}>
            <input onChange={insert_value} type="text"></input>
            <input type="submit" value="SAVE"/>
        </form>
    );
}

export default Form;
