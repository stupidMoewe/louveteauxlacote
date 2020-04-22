import React from 'react';
import classes from './Menu.module.css';
import { Link } from 'react-router-dom';

const menu = () => (
    <div className={classes.Buttons}>
        <div className={classes.Button}><Link to="/" style={{textDecoration: 'none'}}>Accueil</Link></div>
        <div className={classes.Button}><Link to="/nextgc" style={{textDecoration: 'none'}}>Prochaine Grande Chasse</Link></div>
        <div className={classes.Button}><Link to="/articles" style={{textDecoration: 'none'}}>Articles</Link></div>
        <div className={classes.Button}><Link to="/epreuves" style={{textDecoration: 'none'}}>Epreuves</Link></div>
        <div className={classes.Button}><Link to="/prieres" style={{textDecoration: 'none'}}>Prières</Link></div>
        <div className={classes.Button}><Link to="/planning" style={{textDecoration: 'none'}}>Planning</Link></div>
        <div className={classes.Button}><Link to="/contacts" style={{textDecoration: 'none'}}>Nous contacter</Link></div>
    </div>
)

export default menu;