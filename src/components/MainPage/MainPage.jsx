import React, {useState} from "react";

import MainButton from "../UI/MainButton/MainButton";
import Counter from "../UI/Counter/Counter";

const MainPage = () => {

    let [count, setCount] = useState(0)

    const counterUpdate = (upCount) => {

        setCount(count + upCount)
        console.log(count)

    }

    return (
        <div>
            <Counter update={count}/>
            <MainButton update={counterUpdate}/>
        </div>
    )
}

export default MainPage