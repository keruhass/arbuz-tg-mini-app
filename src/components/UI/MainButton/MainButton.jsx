import React from "react";

import classes from './MainButton.module.css'

import icon from '../../../sources/img/arbuz-icon.png'

const MainButton = ({update}) => {

    let factor = 1

    let setCount = () => {

        update(factor)

    }

    return (
        <button onClick={setCount} className={classes.mainBtn}>
            <img className={classes.mainBtn__img} src={icon}/>
        </button>
    )
}

export default MainButton