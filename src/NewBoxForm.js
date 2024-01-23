import React, { useState } from "react";


function NewBoxForm({ addBox }) {
   const initialState = {
    width: "",
    height: "",
    backgroundColor: ""
   }

   const [formData, setFormData] = useState(initialState)
   
   const handleSubmit = (e) => {
    e.preventDefault();
    addBox(formData); 
    setFormData(initialState);
   };

   const handleChange = (e) => {
    const { name,value} = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value
    }));
   };
    /** render form */

    return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="width">Width:</label>
          <input
            type="text"
            id="width"
            name="width"
            value={formData.width}
            onChange={handleChange}
          />
    
          <label htmlFor="height">Height:</label>
          <input
            type="text"
            id="height"
            name="height"
            value={formData.height}
            onChange={handleChange}
          />
           <label htmlFor="backgroundColor">Background Color:</label>
          <input
            type="text"
            id="backgroundColor"
            name="backgroundColor"
            value={formData.backgroundColor}
            onChange={handleChange}
          />
    
          <button>Add a new Box!</button>
        </form>
      );
}

export default NewBoxForm;