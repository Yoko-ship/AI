import "./randomButtons.css"
import React from "react"

function RandomButtons({name,click}){
    return(
        <>
                <button onClick={click}>{name}</button>
        </>
    )
}

export default React.memo(RandomButtons)