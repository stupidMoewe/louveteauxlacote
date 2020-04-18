import React from 'react';
import classes from './Leftbar.module.css';

const leftBar = () => (
    <div className={classes.LeftBar}>
        <div className={classes.Buttons}>
            <button className={classes.Button}>Prières</button>
            <button className={classes.Button}>Autres</button>
        </div>
    </div>
)

export default leftBar;