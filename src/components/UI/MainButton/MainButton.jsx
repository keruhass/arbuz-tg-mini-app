import React from "react";

import classes from './MainButton.module.css'

import icon from '../../../sources/img/arbuz-icon.png'

const MainButton = () => {
    return (
        <button className={classes.mainBtn}>
            <img className={classes.mainBtn__img} src={icon}/>
        </button>
    )
}

export default MainButton