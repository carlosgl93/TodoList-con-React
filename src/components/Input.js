import React, { useState } from "react";

const Input = (props) => {
    let [inputValue, setInputValue] = useState("la lora");
    
    function handleSumbit(e) {
        e.preventDefault()
        props.change(inputValue)
    }
 
    return (
        <div>
            <form onSubmit={handleSumbit}>
                <input
                    type="text"
                    placeholder="Your Task here"
                    value={inputValue}
                    required
                    onChange={event => setInputValue(event.target.value)}>
                </input>
                <button>Update List</button>
            </form>
        </div>
    );

}

export default Input;