import React, {useState} from 'react';
import './App.css';

function App() {

    const [value, setValue] = useState<number>(0);

    const incHandler = () => {
        setValue(value + 1);
    }

    const setToLocalStorage = () => { // Устанавливает значение в local storage
        localStorage.setItem('counterValue', JSON.stringify(value))
        localStorage.setItem('counterValue + 1', JSON.stringify(value + 1))
    }

    const getFromLocalStorage = () => { //Получаем значение-Value, которое есть в local storage в браузере
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }

    const clearLocalStorage = () => { // Зачищаем local storage + UI {value}
        localStorage.clear()
        setValue(0)
    }

    const removeItemFromLocalStorage = () => { // Зачищает определённый значение, которое указали (в нашем случае 2ой вариант, где value + 1)
        localStorage.removeItem('counterValue + 1')
    }

    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
            <button onClick={setToLocalStorage}>setToLocalStorage</button>
            <button onClick={getFromLocalStorage}>getFromLocalStorage</button>
            <button onClick={clearLocalStorage}>clearLocalStorage</button>
            <button onClick={removeItemFromLocalStorage}>removeItemFromLocalStorage</button>
        </div>
    );
}

export default App;
