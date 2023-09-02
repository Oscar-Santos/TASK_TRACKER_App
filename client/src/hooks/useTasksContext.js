import { tasksContext } from "../context/taskContext";
import { useContext } from "react";

export const useTasksContext = () => {
    const context = useContext(tasksContext);

    if (!context) {
        throw Error('useTasksContext must be used within a TasksContextProvider')
    }

    return context;
}