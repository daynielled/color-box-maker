import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";


function BoxList() {
    const[boxes, setBoxes]= useState([]);
    
 const addBox=(newBox) => {
    setBoxes((prevBoxes) => [...prevBoxes, newBox]);
 };

 const removeBox=(index) => {
    setBoxes((prevBoxes) => {
        const newBoxes = [...prevBoxes];
        newBoxes.splice(index,1);
        return newBoxes
    });
 };

return(
    <div>
        <Box
        width={Box.width}
        height={Box.height}
        backgroundColor={Box.backgroundColor}
        onRemove={removeBox}
         />
    </div>
)
}

export default BoxList;