import React from "react";

import classes from './Counter.module.css'

import icon from '../../../sources/img/arbuz-icon-2.png'

const Counter = ({update}) => {

    return (
        <div className={classes.mainCounter}>
            <img className={classes.mainCounter__icon} src={icon}></img>
            <h1 className={classes.mainCounter__text}>{update}</h1>
        </div>
    )

}

export default Counter