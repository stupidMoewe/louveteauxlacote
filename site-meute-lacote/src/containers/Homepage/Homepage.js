import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import classes from './Homepage.module.css';
import Home from '../../componants/Home/Home';
import NextGC from '../../componants/NextGC/NextGC';
import Dummy from '../../componants/Dummy/Dummy';

class Homepage extends Component{
    render() {
        return(
            <div className={classes.Homepage}>
            <Route path="/" exact component={Home} />
            <Route path="/nextgc" exact component={NextGC} />
            <Route path="/planning" exact component={Dummy} />
            <Route path="/epreuves" exact component={Dummy} />
            <Route path="/prieres" exact component={Dummy} />
    
        </div>
        )
    }
};


export default Homepage;