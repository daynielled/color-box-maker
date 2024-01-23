import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";


function BoxList() {
    const[boxes, setBoxes]= useState([]);
    
 const addBox=(newBox) => {
    setBoxes((prevBoxes) => [...prevBoxes, newBox]);
 };

return(
    <div>
        <Box
        width={Box.width}
        height={Box.height}
        backgroundColor={Box.backgroundColor}
         />
    </div>
)
}

export default BoxList;