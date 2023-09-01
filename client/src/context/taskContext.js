import { createContext } from "react";

export const tasksContext = createContext();

export const tasksContextProvider = () => {

    return (
        <tasksContext.Provider value={{}}>
            {props.children}
        </tasksContext.Provider>
    )
}