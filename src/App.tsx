import React, {useEffect, useState} from 'react';
import './App.css';
import {Customizer} from "./components/Customizer";
import {Counter} from "./components/Counter";


function App() {

    const [startValue, setStartValue] = useState(0)  // inputValue приходит из: SuperInput => Customizer => App
    const [maxValue, setMaxValue] = useState(1)
    const [tabloValue, setTabloValue] = useState(0)
    const [settingMaxValue, setSettingMaxValue] = useState(1)
    const [focusValue, setFocusValue] = useState(false)
    let incorrectValue = startValue < maxValue && startValue >= 0 && maxValue > 0 // true

    useEffect(() => {
        let startValueAsString = localStorage.getItem('start-value-key')
        if (startValueAsString) {
            let newStartValue = JSON.parse(startValueAsString)
            setStartValue(newStartValue)
            setTabloValue(newStartValue)
        }
    }, [])

    useEffect(() => {
        let maxValueAsString = localStorage.getItem('max-value-key')
        if (maxValueAsString) {
            let newMaxValue = JSON.parse(maxValueAsString)
            setMaxValue(newMaxValue)
            setSettingMaxValue(newMaxValue)
        }
    }, [])
    const settingStartValue = () => {
        localStorage.setItem('start-value-key', JSON.stringify(startValue))
        localStorage.setItem('max-value-key', JSON.stringify(maxValue))
        setTabloValue(startValue)
        setSettingMaxValue(maxValue)
        setFocusValue(false)
    }
    const incrementValue = () => {
        setTabloValue(tabloValue + 1)
    }
    const resetValue = () => {
        setTabloValue(startValue)
    }
    const focusOccurred = () => {
        setFocusValue(true)

    }

    return (
        <div className="App">
            <Customizer callbackStartValue={setStartValue}
                        callbackMaxValue={setMaxValue}
                        callbackSet={settingStartValue}
                        startValue={startValue} // передаём inputValue в SuperInput для синхронизации инпута value*
                        maxValue={maxValue}
                        incorrectValue={incorrectValue}
                        focus={focusOccurred}
                        focusValue={focusValue}

            />
            <Counter tabloValue={tabloValue}
                     settingMaxValue={settingMaxValue}
                     callback={incrementValue}
                     callbackRes={resetValue}
                     incorrectValue={incorrectValue}
                     focus={focusOccurred}
                     focusValue={focusValue}
            />
        </div>
    );
}

export default App;
