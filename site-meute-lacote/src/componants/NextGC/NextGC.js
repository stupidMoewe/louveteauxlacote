import React from 'react';
import classes from './NextGC.module.css';


const textGC = () => (
    <div className={classes.NextGC}>
        <div className="position">
        <ul>
            <h1>Sortie virtuelle !!</h1>

            <p>Afin de se rapporcher au mieux d'une sortie "classique" malgré les circonstances, la maîtrise te propose de participer à notre 1ère sortie virtuelle tous ensemble.</p>
            
            <h4>Organisation générale</h4>
            <p>Cette activité se déroulera en 2 étapes :</p>
            
            <ol>
                <li>Préparation individuelle</li>
                <li>Connection en meute, le samedi 25 avril à partir de 14h</li>
            </ol>
            
            <h2>Déroulement</h2>
        
            <h2>Rocher du conseil</h2>
            <p>Comme lors de chacune de nos sorties, nous débutons par un rocher du 
            conseil. Akéla a donc fait une vidéo pour te présenter notre rocher du conseil de cette sortie.
            <br />Regarde la vidéo ci-dessous.</p>
            {/* Video rDC  */}
            <div className="video">
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
            
            <h2>Sortie en direct, <strong>samedi à 14h</strong></h2>
            
            <p>Cette grande chasse va se dérouler en plusieurs parties, alternant appels vidéo (avec toutes la meute ou en sizaine) et divers activitées à réaliser individuellement.
            <br />Le déroulement de chaque partie va t'être présenté ci-dessous, dans l'ordre.</p>
            
            <h4>Début</h4>
            <h5>14h - 14h30 : Appel vidéo avec l'ensemble de la meute</h5>
            {/* <!-- Lien appel --> */}
            <p>Lien pour l'appel vidéo : 
            <br />(il suffit de cliquer dessus)</p>
            
            <h5>14h30 - 15h: Première Partie individuelle</h5>
            <p>Mowgli part à travers la jungle pour rejoindre le village des Hommes, dans le but de revenir au rocher du conseil avec le Fleur Rouge (le feu).
            <br />Pour suivre et aider Mowgli dans son périple, voici un message codé (code ??????)</p>
            <ol>
                <li>Message codé</li>
                <p>Mowgli traverse de nombreux lieux de la jungle et rencontre pleins d’animaux. Chile, le vautour, le voit progresser et va te raconter 
                le trajet de Mowgli que tu pourras représenter sur la carte.</p>
                <li>Carte à remplir</li>
                <p>Pour connaître plus précisément le parcours de Mowgli, écoute l'audio ci-dessous et reporte sur ta carte tout le élément que tu entends, 
                afin d'avoir une carte la plus précise possible
                <br />Si tu as le temps, n'hésite pas à l'écouter plusieurs fois, pour compéter les éléments que tu pourrais ne pas avoir eut le temps de mettre sur ta carte</p>
            </ol>
            
            <h5>15h00 - 15h15: Appel vidéo par sizaine</h5>
            {/* <!-- Lien appel --> */}
            <p>Lien pour l'appel vidéo : </p>
            
            
            <h5>15h15 - 15h45: Deuxième Partie individuelle</h5>
            <ol>
                <li>Prière à remettre dans l'ordre</li>
                <p>Demande à l'un de tes parents de t'imprimer les morceaux de la prière.
                <br />Découpe chaque phrase.
                <br />Remet les morceaux dans l'ordre de la prière des Guides et Scouts d'Europe d'après Saint François.
                <br />A gauche de chaque morceau, il y a une lettre. Une fois la prière remise dans le bon ordre, ces lettres à gauche vont former un mot.
                <br />Arrive-tu à voir le mot formé ?</p>
                <li>Mosaïque</li>
                <p>Instructions pour la mosaïque</p>
            </ol>
            
            <h5>15h45 - 16h: Appel vidéo par sizaine</h5>
            {/* <!-- Lien appel --> */}
            <p>Lien pour l'appel vidéo : </p>
            
            <h5>16h - 16h30: Deuxième Partie individuelle</h5>
            <p>Mowgli a récupéré le Fleur Rouge et revient au rocher du conseil pour la montrer. 
            Sur le chemin du retour Mowgli, il doit traverser la Waingunga , mais le pont s’est 
            effondré. Au loin il voit Bagheera qui, pour l’aider, lui indique un message en 
            sémaphore. Découvre ce message et suit le conseil donné par Bagheera.</p>
            
            <ol>
                <li>Sémaphore de Bagheera</li>
                {/* <!-- Lien appel --> */}
                <p>Vidéo à mettre ici</p>
                <li>Noeuds</li>
                <p>Prends 2 morceaux de ficelles et réalise le noeud.
                <br />Pour t'aider, Bagheera t'as préparé des vidéos que tu peux visionner, pour apprendre ou réapprendre à faire les noeuds.</p>
                {/* <!-- Vidéos --> */}
            </ol>
            
            <h5>16h30 - 16h45: Appel vidéo avec l'ensemble de la meute</h5>
            {/* <!-- Lien appel --> */}
            <p>Lien pour l'appel vidéo : </p>
        
        
        </ul>
        </div>    
    </div>
)

export default textGC;