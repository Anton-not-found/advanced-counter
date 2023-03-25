import React, {useState} from 'react';
import s from './Counter.module.css';
import {SuperButton} from "./SuperButton";

type CounterPropsType = {
    callbackRes: () => void
    tabloValue: number
    callback: () => void
    settingMaxValue: number
    incorrectValue:boolean
}
export const Counter = (props: CounterPropsType) => {

    let errorValueTablo = 'Incorrect value!'

    let disableSetButtonIncr = props.tabloValue >= props.settingMaxValue


    const increment = () => {
        props.callback()
    }
    const reset = () => {
        props.callbackRes()
    }


    return (
        <div className={s.counter}>
            <div className={props.incorrectValue && !disableSetButtonIncr? s.tablo : s.errorInput}>
                {props.incorrectValue ? props.tabloValue : errorValueTablo}
            </div>
            <div className={s.button}>
                <SuperButton disabled={disableSetButtonIncr} title={'incr'} callback={increment}/>
                <SuperButton disabled={false} title={'res'} callback={reset}/>
            </div>
        </div>
    );
};

