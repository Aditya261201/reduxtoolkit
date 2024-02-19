import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from "../features/todo/todoSlice"

const AddTodo = () => {

    const [input, setinput] = useState('')
    // dispatch uses reducers to change in store.
    const dispatch = useDispatch();

    const addtodoHandler =  (e)=>{
        e.preventDefault();
        // dispatch taking reducer and input is argument of reducer
        dispatch(addTodo(input));
        setinput('');
    }

    return (
        <form onSubmit={addtodoHandler} className='space-x-3'>
            <input type='text' name='inputtodo' placeholder='enter a todo task'
            onChange={(e)=>{ setinput(e.target.value) }}
            value={input}
            className="bg-gray-800 text-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <button type='submit' className='text-white bg-indigo-500 border-0 py-2 px-4 py6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>Add task</button>

        </form>
    )
}

export default AddTodo;
