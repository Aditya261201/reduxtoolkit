import { createSlice, nanoid } from "@reduxjs/toolkit";


// initial state of the store
const initialState = {
    todos: [{ id: 1, text:"hello world"}]
}



// slice is a collection of redux reducer login and actions defined together
// some properties of slice to be defined(name,initial state,reducers)
// reducers gives as current state and action

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers: {
        addTodo: (state,action)=>{
            const todo = {
                id: nanoid(),
                text : action.payload
            }
            state.todos.push(todo);
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        }
    }
})





// we have to export it 2 times ie functionlalities ie.actions (it will be used in our components)
// and exporting default all reducer
export const {addTodo,removeTodo} = todoSlice.actions
export default todoSlice.reducer