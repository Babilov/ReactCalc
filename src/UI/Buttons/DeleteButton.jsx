import React from "react"
import cl from "./MyButton.module.css"

const DeleteButton = ({children, setInput, input}) => {

    const deleteInput = () => {
        setInput('')
      }

    return (
        <button onClick={deleteInput} className={cl.btnMain} value={children}>{children}</button>
    )
}

export default DeleteButton;