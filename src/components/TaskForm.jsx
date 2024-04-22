import React, { useState } from "react";

export const TaskForm = (props) => {
    const { addOrEditTask, isEditing } = props;
    const [title, setTitle]  = useState("");
    const [description, setDescription] = useState("");
    const [ formValidation, setFormValidation] = useState({
        title: undefined,
        description: ""
    });

    const handleTitleChange = (event) => {
        const value = event.target.value;
        setFormValidation({...formValidation, title: value.length < 3 ? "title is too short" : ""});
        setTitle(value);
    };

    const handleDescriptionChange = (event) => {
        const value = event.target.value;
        setDescription(value);
    }

    const isFormValid = Object.keys(formValidation).every(key => formValidation[key] === "");

    return (
        <div>
            <h2>{isEditing ? "Edit Task" : "Add Task"}</h2>
            <form onSubmit={addOrEditTask}>
                <div>
                    <label>Title</label>
                    <input type="text" id="title" onChange={handleTitleChange}/>
                    {formValidation.title && <span style={{color:"red"}}>{formValidation.title}</span>}
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" id="description" onChange={handleDescriptionChange}/>
                </div>
                <button type="submit" disabled={!isFormValid}>{isEditing ? "Update Task" : "Add Task"}</button>
            </form>
        </div>
    )
}