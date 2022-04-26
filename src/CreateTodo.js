import React, { useState } from "react";

export default function CreateTodo({ user, setTodos, todos }) {
    const [ title, setTitle ] = useState("")
    const [ description, setDescription ] = useState("")

    function handleTitle(evt) { setTitle(evt.target.value) }

    function handleDescr(evt) { setDescription(evt.target.value) }

    function handleCreate(evt) {

        const newTodo = { title, description }
        setTodos([newTodo, ...todos])
    }

    return (
        <>
        <h2> To-Do List </h2>
        <form onSubmit={(e) => { e.preventDefault(); handleCreate(e)} }>
            <div>
                Author: <b>{user}</b>
            </div>
            <div>
                <label htmlFor="create-title">Title:</label>
                <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title" />
                <label htmlFor="create-description">Description:</label>
                <input type="text" value={description} onChange={handleDescr} name="create-description" id="create-description"/>
            </div>
            <input type="submit" value="Create" disabled={title.length === 0} />
        </form>
        </>
    );
}