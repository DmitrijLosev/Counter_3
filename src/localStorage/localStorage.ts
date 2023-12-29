import {CounterStateType} from "../redux/counter-reducer";


export const loadState = (): CounterStateType | undefined => {
    try {
        const serializedState = localStorage.getItem("state");
        return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (error) {
        console.error(`Error loading state from Local Storage:`, error);
        return undefined;
    }
};

export const saveState = (state:CounterStateType) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state", serializedState);
    } catch (error) {
        console.error(`Error saving state to Local Storage:`, error);
    }
};








