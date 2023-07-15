import React from "react";
import cl from "./MyButton.module.css"

const MyButton = ({children, setInput, input}) => {

    const changeInput = (value) => {
        setInput(input + value);
      }

    return (
        <button className={cl.btnMain} onClick={(event) => changeInput(event.target.value)} value={children}>{children}</button>
    )
}

export default MyButton;