import React from "react";

function Box({ width = 500, height= 500,backgroundColor='red', onRemove }) {
    const boxStyle = {
        width,
        height,
        backgroundColor
    }
return(
    <div style={boxStyle}>

    </div>
)
}

export default Box;