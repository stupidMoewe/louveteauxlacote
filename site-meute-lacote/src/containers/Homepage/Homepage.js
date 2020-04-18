import React from 'react';
import classes from './Homepage.module.css';
import Leftbar from '../../componants/Leftbar/Leftbar';
import Rightbar from '../../componants/Rightbar/Rightbar';
import Text from '../../componants/Text/Text';

const homepage = () =>(
    <div className={classes.Homepage}>
        <Leftbar/>
        <Text />
        <Rightbar />

    </div>
)

export default homepage;