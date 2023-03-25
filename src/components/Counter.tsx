import React from 'react';
import s from './Counter.module.css';
import {SuperButton} from "./SuperButton";

type CounterPropsType = {
    callbackRes: () => void
    tabloValue: number
    callback: () => void
    settingMaxValue: number
    incorrectValue: boolean
    focus: () => void
    focusValue: boolean
}
export const Counter = (props: CounterPropsType) => {
    let tabloString = String(props.tabloValue)
    let settingTablo = "enter values and press 'set' "
    let errorValueTablo = 'Incorrect value!'
    let disableSetButtonIncr = props.tabloValue >= props.settingMaxValue

    const increment = () => {
        props.callback()
    }
    const reset = () => {
        props.callbackRes()
    }

    console.log(props.incorrectValue)

    return (
        <div className={s.counter}>

            {props.focusValue
                ? <div className={props.incorrectValue ? s.settingTablo : s.errorInput}>{props.incorrectValue ? settingTablo : errorValueTablo }</div>
                : <div className={props.incorrectValue && !disableSetButtonIncr ? s.tablo : s.errorInput}>
                    {tabloString} </div>
            }
            <div className={s.button}>
                <SuperButton disabled={disableSetButtonIncr} title={'incr'} callback={increment}/>
                <SuperButton disabled={false} title={'res'} callback={reset}/>
            </div>
        </div>
    );
};

