import React from 'react';
import classes from './Preparation.module.css';

const preparation = () => (
    <div className={classes.Preparation}>
        <h1>Préparation individuelle :</h1>
        
        <h2>Rocher du conseil</h2>
            <p>Comme lors de chacune de nos sorties, nous débutons par un rocher du 
            conseil. Akéla a donc fait une vidéo pour te présenter notre rocher du conseil de cette sortie.
            <br />Regarde la vidéo ci-dessous.</p>
            <div className="videoRDC">
                <video src="Video MDS.mp4" type="video/mp4" width="400px" height="300px" controls>
                    Le fichier vidéo ne peut pas être lu
                </video>
            </div>
            
            <p>Maintenant, tu connais le rocher du conseil, tu peux réfléchir à une résolution et envoyer ta réponse via le formulaire de conctact ci-dessous afin 
            que nous puissions en discuter tous ensemble samedi prochain.</p>
            {/* <!-- formulaire de contact --> */}
            <p>formulaire de contact à mettre ici</p>
            <p>Tu as fini la première partie.
            <br />Pour la suite, nous aurons la joie de nous retrouver par vidéo samedi prochain.</p>
    </div>
)

export default preparation;