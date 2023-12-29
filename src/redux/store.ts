import {  createStore } from "redux";
import {loadState, saveState} from "../localStorage/localStorage";
import {counterReducer} from "./counter-reducer";
import {throttle} from "lodash";

export type RootStateType=ReturnType<typeof counterReducer>
export const store = createStore(
    counterReducer,
    loadState()
);

store.subscribe(throttle(() => {
    saveState(store.getState());
},1000));