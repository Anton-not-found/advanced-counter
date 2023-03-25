import React from 'react';
import {SuperInput} from "./SuperInput";
import s from './Customizer.module.css';
import {SuperButton} from "./SuperButton";

type CustomizerPropsType = {
    callbackStartValue: (e: number) => void
    callbackMaxValue: (e: number) => void
    startValue: number
    maxValue: number
    callbackSet: () => void
    // settingMaxValue:(maxValue:number)=>void
    incorrectValue:boolean
}
export const Customizer = (props: CustomizerPropsType) => {


    console.log(props.incorrectValue)




    let disableSetButton = props.startValue >= props.maxValue

    return (
        <div className={s.customizer}>
            <div className={props.incorrectValue ? s.customizerInput : s.customizerErrorInput}>
                <SuperInput title={'max value: '} callback={props.callbackMaxValue} value={props.maxValue}/>
                <SuperInput title={'start value: '} callback={props.callbackStartValue} value={props.startValue}/>
            </div>
            <div className={s.customizerButton}>
                <SuperButton title={'SET'} disabled={disableSetButton} callback={props.callbackSet}/>
            </div>
        </div>
    );
};

