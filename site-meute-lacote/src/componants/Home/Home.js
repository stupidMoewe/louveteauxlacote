import React from 'react';
import classes from './Home.module.css';
import img from '../../Images/flagspicture.jpg';
import img2 from '../../Images/flagspicture-min.jpg';


const text = () => (
    <div className={classes.TextArea}>
        <img className={classes.Image} src={img2} alt="Drapeaux" />
        <h1>Meute 1ère la Côte</h1>
        <div className={classes.MainPresentation}>
            <h4>Cher louveteau,</h4>
            <p>Tes chefs sont fiers de te présenter ce site qui est notre site de meute.
            <br />Nous pourrons y déposer toutes les informations relatives à nos rencontres,
            mais également de nombreuses autres documentations pour aider les curieux dans leur progression !
            <br />Le site est encore en cours d'élaboration, il ne contient pour l'instant pas beaucoup d'informations.
            NOUS AVONS FAIT DE NOTRE MIEUX !!!!
            Il nous servira de support pour notre grande chasse virtuelle de ce samedi à venir.
            Tu y trouveras toutes les informations nécessaires ci-dessus.</p>
        </div>
    </div>
)

export default text;