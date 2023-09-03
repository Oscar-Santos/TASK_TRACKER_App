import { createContext, useReducer } from "react";

export const tasksContext = createContext();

export const tasksReducer = (state, action)=> {
    switch(action.type) {
        case 'SET_TASKS':
            return {
                tasks: action.payload
            }

        case 'CREATE_TASK':
            return {
                tasks: [action.payload, ...state.tasks]
            }
        case 'DELETE_TASK':
            return {
                tasks: state.tasks.filter(task => task._id !== action.payload._id)
            }

        default:
            return state
    }
}

export const TasksContextProvider = ( { children }) => {

    const [state, dispatch] = useReducer(tasksReducer, { tasks: [] });

   
    return (
        <tasksContext.Provider value={ {...state, dispatch} }>
           { children }
        </tasksContext.Provider>
    )
}