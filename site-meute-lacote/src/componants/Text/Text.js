import React from 'react';
import classes from './Text.module.css';
import NextGC from './NextGC/NextGC';
import logofse from './../../Images/logofse.png';

const text = () => (
    <div className={classes.TextArea}>
        <div className={classes.MainPresentation}>
            <h4>Cher louveteau,</h4>
            <p>Tes chefs sont fiers de te présenter ce site qui est notre site de meute.
            <br />Nous pourrons y déposer toutes les informations relatives à nos rencontres,
            mais également de nombreuses autres documentations pour aider les curieux dans leur progression !
            <br />Le site est encore en cours d'élaboration, il ne contient pour l'instant pas beaucoup d'informations.
            Il nous servira de support pour notre grande chasse virtuelle de ce samedi à venir.
            Tu y trouveras toutes les informations nécessaires ci-dessus.</p>
        </div>
        <img className={classes.Logo} src={logofse} alt="Photo Thomas POULAIN"/>
        <NextGC />
    </div>
)

export default text;