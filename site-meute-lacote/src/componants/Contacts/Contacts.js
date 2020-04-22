import React from 'react';
import classes from './Contacts.module.css';

const contacts = () => (
    <div className={classes.Contacts}>
        <h1>Comment nous contacter</h1>
        <p>Adresse e-mail :</p>
        <p>Téléphone :</p>
        <p>Adresse du local :</p>
    </div>
)

export default contacts;