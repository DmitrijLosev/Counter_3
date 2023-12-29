import React from "react";
import {Counter} from "./Counter";
import {Button} from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {actions, CounterActionsType, CounterStateType} from "./redux/counter-reducer";
import {RootStateType} from "./redux/store";
import {MinMaxType} from "./App";

export const CounterShowMode: React.FC<{ errorMode: boolean }> = ({errorMode}) => {

    const dispatch = useDispatch<Dispatch<CounterActionsType>>()
    const {minValue,maxValue}=useSelector<CounterStateType,MinMaxType>(state=>state.minMaxValue)

    const counter=useSelector<CounterStateType,number>(state=>state.counter)
    const onClickIncrementCounterHandler = () => {
        if (counter < maxValue) {
            dispatch(actions.incCounter)
        }
    }
    const onClickResetCounterHandler = () => {
        if (counter > minValue) {
            dispatch(actions.resetCounter)
        }
    }
    const onClickSetSettingsModeHandler = () => {
        dispatch(actions.changeSettingMode(true))
    }

    return (
        <div className="counter common">
            <Counter counter={counter} maxValue={maxValue}
                     errorMode={errorMode}/>
            <div className="buttons common">
                <Button onClick={onClickIncrementCounterHandler}
                        disabled={counter === maxValue || errorMode}>
                    inc
                </Button>
                <Button onClick={onClickResetCounterHandler}
                        disabled={counter === minValue || errorMode}>
                    reset
                </Button>
                <Button onClick={onClickSetSettingsModeHandler}>
                    set
                </Button>
            </div>
        </div>
    );
};

