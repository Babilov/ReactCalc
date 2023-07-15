import React, { useState } from "react";
import cl from "./MyInput.module.css"

const MyInput = ({input}) => {

    return (
        <input className={cl.myInput} type="text" value={input} readOnly={true} />
    )
}

export default MyInput;