import React from 'react';
import classes from './Menu.module.css';

const menu = () => (
    <div className={classes.Buttons}>
        <div className={classes.Button}><a href="/" style={{textDecoration: 'none'}}>Accueil</a></div>
        <div className={classes.Button}><a href="/nextgc" style={{textDecoration: 'none'}}>Prochaine Grande Chasse</a></div>
        <div className={classes.Button}><a href="/planning" style={{textDecoration: 'none'}}>Planning</a></div>
        <div className={classes.Button}><a href="/epreuves" style={{textDecoration: 'none'}}>Epreuves</a></div>
        <div className={classes.Button}><a href="/prieres" style={{textDecoration: 'none'}}>Prières</a></div>
    </div>
)

export default menu;