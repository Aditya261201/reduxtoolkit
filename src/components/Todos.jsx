import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';




const Todos = () => {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();

    return (
        <>
            <div>
                <ul className='list-none'>
                    {todos.map((todo) => (
                        <li key={todo.id} className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded text-white'>
                            {todo.text}
                            <button onClick={() => dispatch(removeTodo(todo.id))} className='text-white bg-red-500 hover:bg-red-700 px-2 py-3 border-0 focus:outline-none rounded text-md'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z" /> <path d="M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8zm2 2v10h12V10H6zm3 2h2v6H9v-6zm4 0h2v6h-2v-6zM7 5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5h5zm2-1v1h6V4H9z" /> </g> </svg></button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Todos
