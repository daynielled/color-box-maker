import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import "./NewBoxForm.css";


function NewBoxForm({ addBox }) {
    const [formData, setFormData] = useState({
        height: "",
        width: "",
        backgroundColor: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({ ...formData, id: uuid() });
        setFormData({ height: "", width: "", backgroundColor: "" });
    };


    /** render form */

    return (
        <div>
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

                <button id="addBoxButton" type="submit">Add a new Box!</button>
            </form>
        </div>

    );
}

export default NewBoxForm;