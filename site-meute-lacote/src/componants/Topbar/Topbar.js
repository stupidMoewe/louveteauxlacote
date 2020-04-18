import React from 'react';

import Menu from './Menu/Menu';
import classes from './Topbar.module.css';
import logofse from '../../Images/logofse.png';

const topbar = () => (
    <div className={classes.Topbar}>
        <img className={classes.Logo} src={logofse} alt="Photo Thomas POULAIN"/>
        <Menu />
    </div>
)

export default topbar;