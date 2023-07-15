import React from "react"
import cl from "./MyButton.module.css"

const ResultButton = ({children, setInput, input}) => {

    const getResult = () => {
        try{
          setInput(eval(input))
        }
        catch{
          setInput('')
        }
        
      }

    return (
        <button onClick={getResult} className={cl.btnMain} value={children}>{children}</button>
    )
}

export default ResultButton;