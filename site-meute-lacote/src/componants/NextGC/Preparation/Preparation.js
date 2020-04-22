import React from 'react';
import { Link } from 'react-router-dom';    
import { Player } from 'video-react';
import classes from './Preparation.module.css';


const preparation = () => (
    <div className={classes.Preparation}>
        <h1>Préparation individuelle</h1>
        <Link to='/nextgc' className={classes.BackButton}>Retour</Link>
        <div className={classes.Text}>
            <h2>Rocher du conseil</h2>
            <p>Comme lors de chacune de nos sorties, nous débutons par un rocher du 
            conseil. Akéla a donc fait une vidéo pour te présenter notre rocher du conseil de cette sortie.
            <br />Regarde la vidéo ci-dessous.</p>
            <div className="videoRDC">
            <Player
                playsInline
                src=""
            />
            </div>
            
            <p>Maintenant, tu connais le rocher du conseil, tu peux réfléchir à une résolution et envoyer ta réponse via le formulaire de conctact ci-dessous afin 
            que nous puissions en discuter tous ensemble samedi prochain.</p>
            {/* <!-- formulaire de contact --> */}
            <p>formulaire de contact à mettre ici</p>
            <p>Tu as fini la première partie.
            <br />Pour la suite, nous aurons la joie de nous retrouver par vidéo samedi prochain.</p>
        </div>
    </div>
)

export default preparation;