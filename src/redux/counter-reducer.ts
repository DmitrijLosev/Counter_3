import {MinMaxType} from "../App";

const initialState = {
    counter: 0,
    minMaxValue: {minValue: 0, maxValue: 1},
    isSettingMode: false
}
export type CounterStateType = typeof initialState
export type CounterActionsType =
    typeof actions.incCounter
    | typeof actions.resetCounter
    | ReturnType<typeof actions.changeMinMaxValues>
    | ReturnType<typeof actions.changeSettingMode>
export const counterReducer = (state = initialState, action: CounterActionsType): CounterStateType => {
    switch (action.type) {
        case "INCREMENT-COUNTER":
            return {...state, counter: state.counter + 1}
        case "RESET-COUNTER":
            return {...state, counter: state.minMaxValue.minValue}
        case "CHANGE-MINMAX-VALUE":
            return {...state, minMaxValue: {...state.minMaxValue, [action.payload.name]: action.payload.newValue}}
        case "CHANGE-SETTING-MODE":
            return {...state, isSettingMode: action.payload.isSettingMode}
        default:
            return state
    }
}
export const actions = {
    incCounter: {type: "INCREMENT-COUNTER"} as const,
    resetCounter: {type: "RESET-COUNTER"} as const,
    changeMinMaxValues: (newValue: number, name: keyof MinMaxType) => ({
        type: "CHANGE-MINMAX-VALUE",
        payload: {newValue, name}
    }) as const,
    changeSettingMode: (isSettingMode: boolean) => ({type: "CHANGE-SETTING-MODE", payload: {isSettingMode}}) as const
}

