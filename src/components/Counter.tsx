import React, {useEffect, useState} from 'react';
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



    /*
    console.log(tablo)
    useEffect(() => {
        let startValueAsString = localStorage.getItem('start-value-key')
        if (startValueAsString) {
            let newStartValue = JSON.parse(startValueAsString)
            setTablo(newStartValue)
        }
    }, [])

    console.log(tablo)*/


    // let bool = props.focusValue === true ? 'bla-bla-bla' : tabloString
    const increment = () => {
        props.callback()
    }
    const reset = () => {
        props.callbackRes()
    }

    console.log(props.focusValue)




    return (
        <div className={s.counter}>

            {props.focusValue
                ? <div className={s.settingTablo}>{settingTablo}</div>
                : <div className={props.incorrectValue && !disableSetButtonIncr ? s.tablo : s.errorInput}>
                {props.incorrectValue ? tabloString : errorValueTablo} </div>
            }


            {/*<div className={props.incorrectValue && !disableSetButtonIncr ? s.tablo : s.errorInput}>*/}
            {/*    {props.incorrectValue ? tabloString : errorValueTablo}*/}

            {/*</div>*/}


            <div className={s.button}>
                <SuperButton disabled={disableSetButtonIncr} title={'incr'} callback={increment}/>
                <SuperButton disabled={false} title={'res'} callback={reset}/>
            </div>
        </div>
    );
};

