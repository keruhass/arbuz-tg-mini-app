import React from "react";

import classes from './Counter.module.css'

const Counter = ({update}) => {

    return (
        <div>
            <h1 className={classes.mainCounter}>{update}</h1>
        </div>
    )

}

export default Counter