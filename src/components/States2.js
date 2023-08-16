import React,{useState} from "react";


const States2 =()=>{

    let [input, setInput] = useState("");

    return (
        <div>
            <div className="parent">
                <h1>Parent Component</h1>
                {
                    input && <p className="para">{input}</p>
                }
                <div className="child">
                    <h3>Child Component</h3>
                    <input type="text" onChange={(e)=>setInput(e.target.value)}/>
                </div>
            </div>
        </div>
    )
}


export default States2;