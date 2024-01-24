import React, {useState} from "react";

import MainButton from "../UI/MainButton/MainButton";
import Counter from "../UI/Counter/Counter";

import './MainPage.css'

const MainPage = () => {

    let [count, setCount] = useState(0)

    const counterUpdate = (upCount) => {

        setCount(count + upCount)
        console.log(count)

    }

    return (
        <div className="MainPage">
            <Counter update={count}/>
            <MainButton update={counterUpdate}/>
        </div>
    )
}

export default MainPage