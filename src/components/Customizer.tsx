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
    incorrectValue: boolean
    focus: () => void
    // focusValue: boolean
}
export const Customizer = (props: CustomizerPropsType) => {

    // console.log(props.focusValue)
    let disableSetButton = props.startValue >= props.maxValue

    return (
        <div className={s.customizer}>
            <div className={props.incorrectValue ? s.customizerInput : s.customizerErrorInput}>
                <div className={s.inputItem}>
                    <SuperInput title={'max value: '}
                                callback={props.callbackMaxValue}
                                value={props.maxValue}
                                focus={props.focus}
                    />

                </div>
                <div className={s.inputItem}>
                    <SuperInput title={'start value: '}
                                callback={props.callbackStartValue}
                                value={props.startValue}
                                focus={props.focus}
                    />

                </div>
            </div>
            <div className={s.customizerButton}>
                <SuperButton title={'s e t'} disabled={disableSetButton} callback={props.callbackSet}/>
            </div>
        </div>
    );
};

