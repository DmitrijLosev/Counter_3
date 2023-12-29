import React, {ChangeEvent} from "react";
import {Button} from "./Button";
import {MinMaxType} from "./App";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {actions, CounterActionsType} from "./redux/counter-reducer";
import {RootStateType} from "./redux/store";
import {Input} from "./Input";

export const SettingsMode: React.FC<{ errorMode: boolean }> = ({errorMode}) => {

        const dispatch = useDispatch<Dispatch<CounterActionsType>>()
        const {minValue, maxValue} = useSelector<RootStateType, MinMaxType>(state => state.minMaxValue)

        const setSettingsButtonHandler = () => {
            dispatch(actions.resetCounter)
            dispatch(actions.changeSettingMode(false))
        }
        const setMinMaxValueHandler = (e: ChangeEvent<HTMLInputElement>, name: keyof MinMaxType) => dispatch(actions.changeMinMaxValues(+e.currentTarget.value, name))


        return (
            <div className="common set">
                <div className="common">
                    <Input errorMode={minValue < 0 || maxValue <= minValue}
                           value={minValue}
                           onChange={(e: ChangeEvent<HTMLInputElement>) => setMinMaxValueHandler(e, "minValue")}>
                        start value:
                    </Input>
                    <Input errorMode={maxValue < 1 || maxValue <= minValue}
                           value={maxValue}
                           onChange={(e: ChangeEvent<HTMLInputElement>) => setMinMaxValueHandler(e, "maxValue")}>
                        max value:
                    </Input>
                </div>
                <div className="common buttons">
                    <Button onClick={setSettingsButtonHandler}
                            disabled={errorMode}>
                        set
                    </Button>
                </div>
            </div>
        );
    }


