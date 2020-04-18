import React from 'react';
import classes from './Layout.module.css';
import Topbar from '../../componants/Topbar/Topbar';

const layout = (props) => (
    <div className={classes.Layout}>
        <Topbar />
        <div className={classes.MainPage}>{props.children}</div>
    </div>
)

export default layout;