import React, { useState } from "react";
import MyButton from "../UI/Buttons/MyButton";
import ResultButton from "../UI/Buttons/ResultBytton";
import DeleteButton from "../UI/Buttons/DeleteButton.jsx";

const MyButtonGroup = ({changeInput, setInput, input}) => {   
    
    return (
        <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
            <MyButton setInput={setInput} input={input}>1</MyButton>
            <MyButton setInput={setInput} input={input}>2</MyButton>
            <MyButton setInput={setInput} input={input}>3</MyButton>
            <MyButton setInput={setInput} input={input}>4</MyButton>
            <MyButton setInput={setInput} input={input}>5</MyButton>
            <MyButton setInput={setInput} input={input}>6</MyButton>
            <MyButton setInput={setInput} input={input}>7</MyButton>
            <MyButton setInput={setInput} input={input}>8</MyButton>
            <MyButton setInput={setInput} input={input}>9</MyButton>
            <MyButton setInput={setInput} input={input}>0</MyButton>
            <MyButton setInput={setInput} input={input}>+</MyButton>
            <MyButton setInput={setInput} input={input}>-</MyButton>
            <DeleteButton setInput={setInput} input={input}>DEL</DeleteButton>
            <MyButton setInput={setInput} input={input}>*</MyButton>
            <MyButton setInput={setInput} input={input} >/</MyButton>
            <ResultButton setInput={setInput} input={input}>=</ResultButton>
            
        </div>
    )
}

export default MyButtonGroup;