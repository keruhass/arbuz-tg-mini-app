import React from "react";

import classes from './Counter.module.css'

const Counter = ({update}) => {

    return (
        <div className={classes.mainCounter}>
            <h1 className={classes.mainCounter__text}>{update}</h1>
        </div>
    )

}

export default Counter