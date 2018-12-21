Projet Redis

Projet redis r�alis� pour un cours de NoSQL. Mod�lisation d'un call center avec :

    Op�rateur (employ�) :
        Pr�nom
        Nom
        Email
        Age

    Appels :
        Num�ro
        Description
        Heure d'appel
        Op�rateur affect� � l'appel
        Dur�e de l'appel

Pr�requis et lancement

Installation :

    Apache2
    Php
    Redis
    phpredis : https://github.com/phpredis/phpredis
    (un apt-get install php-redis possiblement n�cessaire)

Cloner le repository dans var/www/html/'yourpath' Lancer ~/redis-server Lancer le service apache

Ouvrez un navigateur web, tapez dans l'url "localhost/'yourpath'"
Mod�lisation

Chaque op�rateur est stock� dans un Hash sous la forme :

    operateur:id_operateur avec les champs suivants:
        firstname
        lastname
        email
        age

Les appels sont �galement stock�s dans des Hash sous la forme:

    appel:id_appel:
        numero
        description
        heure
        affectation
        duree

Les ids des op�rateurs et des appels sont stock�s dans des Sets avec les cl�s:

    id_operateur
    id_appel

Les appels peuvent avoir trois status. Chaque status est repr�sent� par un Set contenant les ids de tous les appels qui sont � cet �tat :

    En attente : signifiant que la personne est en attente. Key = en_attente
    En cours : la personne est au t�l�phone avec un op�rateur. Key = en_cours
    Termin� : la conversation est finie. Key = fini Lorsqu'un appel change d'�tat, il sufit de faire un smove afin de changer l'id de set.

L'information de l'affection d'un op�rateur � un appel est pr�sente dans le hash de chaque appel. Cependant afin d'acc�der simplement et rapidement � tous les appels trait�s par un op�rateur (relation 1-N), on stocke �galement dans un set de la forme affectation:id_operateur tous les ids des appels trait�s par l'op�rateur avec l'id id_operateur.
Fichiers
Initialisation

Le fichier initialisation.php cr�� 5 op�rateurs ainsi que 1 appel par status. De plus il supprime les keys afin de pouvoir initialiser sur des sets et des hashs inextistants.
Connexion � Redis

La connexion � redis est assur�e par le fichier connecition.php qui cr�er un objet Redis et une connexion en localhost.
Vues pour la visualisation des donn�es

    before.html est appell� sur toutes les vues. Contient les import pour le style et la barre nav.
    appels.php premet de voir tous les appels r�partis dans 3 tableaux : un par �tat de l'appel. Elle est acc�ssible via l'onglet "Appels" de la barre nav
    operateurs.php repr�sente tous les op�rateurs. Accessible depuis l'onglet "Op�rateurs" de la barre nav.
    operateur.php repr�sente tous les appels affect�s � un utilisateur particulier. Accessible en cliquant sur l'id de l'op�rateur depuis la vue operateurs.php ou en cliquant sur le nom de l'op�rateur depuis la vue appels.php.

Vues pour la manipulation des donn�es

    newAppel.php contient le formulaire afin de rentrer un nouvel appel. Accessible depuis le bouton "Nouvel appel" de la vue
    affectation.php permet de choisir la personne � affecter � un appel.

Scripts de modification des donn�es

    addAppel.php ajoute un appel aux sets et cr�er son Hash.
    affectationAppel.php change l'�tat d'un appel et y affecte son op�rateur.
    endAppel.php est appel� lorsqu'un appel se fini. Il change l'�tat de l'appel et ajoute la dur�e au Hash de l'appel.
