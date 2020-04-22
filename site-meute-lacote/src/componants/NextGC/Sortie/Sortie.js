import React from 'react';
import classes from './Sortie.module.css';

const sortie= () =>(
    <div className={classes.Sortie}>    
            
        <h1>Sortie en direct, <strong>samedi à 14h</strong></h1>
            
        <p>Cette grande chasse va se dérouler en plusieurs parties, alternant appels vidéo (avec toutes la meute ou en sizaine) et divers activitées à réaliser individuellement.
        <br />Le déroulement de chaque partie va t'être présenté ci-dessous, dans l'ordre.</p>
            
        <h3>Début</h3>
        <h4>14h - 14h30 : Appel vidéo avec l'ensemble de la meute</h4>
            {/* <!-- Lien appel --> */}
        <p>Lien pour l'appel vidéo : 
        <br />(il suffit de cliquer dessus)</p>
            
        <h4>14h30 - 15h: Première Partie individuelle</h4>
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
            
        <h4>15h00 - 15h15: Appel vidéo par sizaine</h4>
        {/* <!-- Lien appel --> */}
        <p>Lien pour l'appel vidéo : </p>
        
        
        <h4>15h15 - 15h45: Deuxième Partie individuelle</h4>
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
        
        <h4>15h45 - 16h: Appel vidéo par sizaine</h4>
        {/* <!-- Lien appel --> */}
        <p>Lien pour l'appel vidéo : </p>
        
        <h4>16h - 16h30: Deuxième Partie individuelle</h4>
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
        
        <h4>16h30 - 16h45: Appel vidéo avec l'ensemble de la meute</h4>
        {/* <!-- Lien appel --> */}
        <p>Lien pour l'appel vidéo : </p>
    

    </div>
)

export default sortie;