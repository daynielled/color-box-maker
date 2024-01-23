import React from "react";
import "./Box.css";

function Box({ width, height, backgroundColor, onRemove }) {
    const boxStyle = {
        height: `${height}em`,
        width: `${width}em`,
        backgroundColor
    }
    return (
        <div style={boxStyle}>
            <button onClick={onRemove}> X </button>
        </div>
    );
}

export default Box;