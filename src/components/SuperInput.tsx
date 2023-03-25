import React, {ChangeEvent} from 'react';
import s from './SuperInput.module.css';

type SuperInputPropstype = {
    title: string
    callback: (e: number) => void
    value: number
}
export const SuperInput = (props: SuperInputPropstype) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.currentTarget.value)
        props.callback(value)
    }
    const onfocusHandler = () => {
        console.log('onFocus')
    }

    return (
        <div className={s.superInput}>
            <span>{props.title}
                <input type='number'
                       value={props.value}
                       onChange={onChangeHandler}
                       onFocus={onfocusHandler}
                />
            </span>
        </div>
    );
};

