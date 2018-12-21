//Mongodb
// Dans cette partie on s'interesse a modélisé dans MongoDb des équipes (FC BARCELONE Contre REAL MADRID Aller/Retour)

// Création de la base de données

use GestionMatchs;

// Création des Joueurs


{    
    "Prenom" : "Marc-André",
    "Nom" : "ter Stegen",
    "Poste" : "Goalkeeper",
    "DateNaissance" : ISODate("1992-04-30T00:00:00.000Z"),
    "Taille" : "1,87 m"
}

{    
    "Prenom" : "Samuel",
    "Nom" : "Umtiti",
    "Poste" : "Centre-Back",
    "DateNaissance" : ISODate("1993-11-14T00:00:00.000Z"),
    "Taille" : "1,82 m"
}

{    
    "Prenom" : "Gerard",
    "Nom" : "Piqué",
    "Poste" : "Centre-Back",
    "DateNaissance" : ISODate("1987-02-02T00:00:00.000Z"),
    "Taille" : "1,94 m"
}

{    
    "Prenom" : "Jordi",
    "Nom" : "Alba",
    "Poste" : "Left-Back",
    "DateNaissance" : ISODate("1989-03-21T00:00:00.000Z"),
    "Taille" : "1,70 m"
}

{    
    "Prenom" : "Sergi",
    "Nom" : "Roberto",
    "Poste" : "Right-Back",
    "DateNaissance" : ISODate("1992-02-07T00:00:00.000Z"),
    "Taille" : "1,78 m"
}

{    
    "Prenom" : "Sergio",
    "Nom" : "Busquets",
    "Poste" : "Defensive Midfield",
    "DateNaissance" : ISODate("1988-07-16T00:00:00.000Z"),
    "Taille" : "1,89 m"
}

{
   
    "Prenom" : "Arthur",
    "Nom" : "",
    "Poste" : "Central Midfield",
    "DateNaissance" : ISODate("1996-08-12T00:00:00.000Z"),
    "Taille" : "1,72 m"
}

{  
    "Prenom" : "Philippe",
    "Nom" : "Coutinho",
    "Poste" : "Attacking Midfield",
    "DateNaissance" : ISODate("1992-06-12T00:00:00.000Z"),
    "Taille" : "1,72 m"
}

{    
    "Prenom" : "Ousmane",
    "Nom" : "Dembélé",
    "Poste" : "Left Winger",
    "DateNaissance" : ISODate("1997-05-15T00:00:00.000Z"),
    "Taille" : "1,78 m"
}

{   
    "Prenom" : "Lionel",
    "Nom" : "Messi",
    "Poste" : "Right Winger",
    "DateNaissance" : ISODate("1987-06-24T00:00:00.000Z"),
    "Taille" : "1,70 m"
}

{    
    "Prenom" : "Luis",
    "Nom" : "Suárez",
    "Poste" : "Centre-Forward",
    "DateNaissance" : ISODate("1987-01-24T00:00:00.000Z"),
    "Taille" : "1,82 m"
}

{    
    "Prenom" : "Thibaut",
    "Nom" : "Courtois",
    "Poste" : "Goalkeeper",
    "DateNaissance" : ISODate("1992-05-11T00:00:00.000Z"),
    "Taille" : "1,99 m"
}

{    
    "Prenom" : "Raphaël",
    "Nom" : "Varane",
    "Poste" : "Centre-Back",
    "DateNaissance" : ISODate("1993-04-25T00:00:00.000Z"),
    "Taille" : "1,91 m"
}

{    
    "Prenom" : "Sergio",
    "Nom" : "Ramos",
    "Poste" : "Centre-Back",
    "DateNaissance" : ISODate("1986-03-30T00:00:00.000Z"),
    "Taille" : "1,84 m"
}

{   
    "Prenom" : "Marcelo",
    "Nom" : "",
    "Poste" : "Left-Back",
    "DateNaissance" : ISODate("1988-05-12T00:00:00.000Z"),
    "Taille" : "1,74 m"
}

{   
    "Prenom" : "Daniel",
    "Nom" : "Carvajal",
    "Poste" : "Right-Back",
    "DateNaissance" : ISODate("1992-01-11T00:00:00.000Z"),
    "Taille" : "1,73 m"
}

{  
    "Prenom" : "Casemiro",
    "Nom" : "",
    "Poste" : "Defensive Midfield",
    "DateNaissance" : ISODate("1992-02-23T00:00:00.000Z"),
    "Taille" : "1,85 m"
}

{    
    "Prenom" : "Toni",
    "Nom" : "Kroos",
    "Poste" : "Central Midfield",
    "DateNaissance" : ISODate("1990-01-04T00:00:00.000Z"),
    "Taille" : "1,83 m"
}

{    
    "Prenom" : "Luka",
    "Nom" : "Modric",
    "Poste" : "Central Midfield",
    "DateNaissance" : ISODate("1985-09-09T00:00:00.000Z"),
    "Taille" : "1,72 m"
}

{   
    "Prenom" : "Isco",
    "Nom" : "",
    "Poste" : "Attacking Midfield",
    "DateNaissance" : ISODate("1992-04-21T00:00:00.000Z"),
    "Taille" : "1,76 m"
}

{
    "Prenom" : "Lucas",
    "Nom" : "Vázquez",
    "Poste" : "Right Winger",
    "DateNaissance" : ISODate("1991-07-01T00:00:00.000Z"),
    "Taille" : "1,73 m"
}

{
    "Prenom" : "Marco",
    "Nom" : "Asensio",
    "Poste" : "Left Winger",
    "DateNaissance" : ISODate("1996-01-21T00:00:00.000Z"),
    "Taille" : "1,82 m"
}

// Création des Equipes (Les joureurs par reference ObjectId)

{
    "Nom" : "FC Barcelona",
    "Couleur" : "Rouge et Bleu",
    "Stade" : "Camp nou",
    "Effectif" : [ 
        ObjectId("5c1540bd2c357df849b4f020"), 
        ObjectId("5c1543af2c357df849b4f071"), 
        ObjectId("5c1543af2c357df849b4f073"), 
        ObjectId("5c1543af2c357df849b4f075"), 
        ObjectId("5c1543af2c357df849b4f077"), 
        ObjectId("5c1543af2c357df849b4f079"), 
        ObjectId("5c1543af2c357df849b4f07b"), 
        ObjectId("5c1543af2c357df849b4f07d"), 
        ObjectId("5c1543af2c357df849b4f07f"), 
        ObjectId("5c1543af2c357df849b4f081"), 
        ObjectId("5c1543af2c357df849b4f083")
    ]
}

{
    "Nom" : "Real Madrid",
    "Couleur" : "Blanc",
    "Stade" : "Santiago Bernabéu",
    "Effectif" : [ 
        ObjectId("5c1547ef2c357df849b4f11c"), 
        ObjectId("5c1547ef2c357df849b4f11e"), 
        ObjectId("5c1547ef2c357df849b4f120"), 
        ObjectId("5c1547ef2c357df849b4f122"), 
        ObjectId("5c1547ef2c357df849b4f124"), 
        ObjectId("5c1547ef2c357df849b4f126"), 
        ObjectId("5c1547ef2c357df849b4f128"), 
        ObjectId("5c1547ef2c357df849b4f12a"), 
        ObjectId("5c1547ef2c357df849b4f12c"), 
        ObjectId("5c1547ef2c357df849b4f12e"), 
        ObjectId("5c1547ef2c357df849b4f130")
    ]
}

// Création des Matchs, les equipes sont referencees par nom et les joureurs par leurs ObjectId

{
    "EquipeDomicile" : "FC Barcelona",
    "EquipeExterieure" : "Real Madrid",
    "Competition" : "LaLiga",
    "ScoreEquipeDomicile" : 5,
    "ScoreEquipeExterieure" : 0,
    "NoteJoueurs" : [ 
        {
            "Joueurs_id" : ObjectId("5c1540bd2c357df849b4f020"),
            "Note" : 8.5,
            "DomicileOuExterieure" : "Domicile"
        }, 
        {
            "Joueurs_id" : ObjectId("5c1543af2c357df849b4f071"),
            "Note" : 6,
            "DomicileOuExterieure" : "Domicile"
        }, 
        {
            "Joueurs_id" : ObjectId("5c1543af2c357df849b4f073"),
            "Note" : 7,
            "DomicileOuExterieure" : "Domicile"
        }, 
        {
            "Joueurs_id" : ObjectId("5c1543af2c357df849b4f075"),
            "Note" : 5,
            "DomicileOuExterieure" : "Domicile"
        }, 
        {
            "Joueurs_id" : ObjectId("5c1543af2c357df849b4f077"),
            "Note" : 8,
            "DomicileOuExterieure" : "Domicile"
        }, 
        {
            "Joueurs_id" : ObjectId("5c1543af2c357df849b4f079"),
            "Note" : 6,
            "DomicileOuExterieure" : "Domicile"
        }, 
        {
            "Joueurs_id" : ObjectId("5c1543af2c357df849b4f07b"),
            "Note" : 8.5,
            "DomicileOuExterieure" : "Domicile"
        }, 
        {
            "Joueurs_id" : ObjectId("5c1543af2c357df849b4f07d"),
            "Note" : 7,
            "DomicileOuExterieure" : "Domicile"
        }, 
        {
            "Joueurs_id" : ObjectId("5c1543af2c357df849b4f07f"),
            "Note" : 7,
            "DomicileOuExterieure" : "Domicile"
        }, 
        {
            "Joueurs_id" : ObjectId("5c1543af2c357df849b4f081"),
            "Note" : 5,
            "DomicileOuExterieure" : "Domicile"
        }, 
        {
            "Joueurs_id" : ObjectId("5c1543af2c357df849b4f083"),
            "Note" : 6.5,
            "DomicileOuExterieure" : "Domicile"
        }, 
        {
            "Joueurs_id" : ObjectId("5c1547ef2c357df849b4f12c"),
            "Note" : 3,
            "DomicileOuExterieure" : "Exterieure"
        }, 
        {
            "Joueurs_id" : ObjectId("5c1547ef2c357df849b4f130"),
            "Note" : 4,
            "DomicileOuExterieure" : "Exterieure"
        }, 
        {
            "Joueurs_id" : ObjectId("5c1547ef2c357df849b4f12e"),
            "Note" : 3.5,
            "DomicileOuExterieure" : "Exterieure"
        }, 
        {
            "Joueurs_id" : ObjectId("5c1547ef2c357df849b4f12a"),
            "Note" : 5,
            "DomicileOuExterieure" : "Exterieure"
        }, 
        {
            "Joueurs_id" : ObjectId("5c1547ef2c357df849b4f128"),
            "Note" : 5.5,
            "DomicileOuExterieure" : "Exterieure"
        }, 
        {
            "Joueurs_id" : ObjectId("5c1547ef2c357df849b4f126"),
            "Note" : 6,
            "DomicileOuExterieure" : "Exterieure"
        }, 
        {
            "Joueurs_id" : ObjectId("5c1547ef2c357df849b4f11c"),
            "Note" : 6.5,
            "DomicileOuExterieure" : "Exterieure"
        }, 
        {
            "Joueurs_id" : ObjectId("5c1547ef2c357df849b4f124"),
            "Note" : 3.5,
            "DomicileOuExterieure" : "Exterieure"
        }, 
        {
            "Joueurs_id" : ObjectId("5c1547ef2c357df849b4f122"),
            "Note" : 4,
            "DomicileOuExterieure" : "Exterieure"
        }, 
        {
            "Joueurs_id" : ObjectId("5c1547ef2c357df849b4f120"),
            "Note" : 4.5,
            "DomicileOuExterieure" : "Exterieure"
        }, 
        {
            "Joueurs_id" : ObjectId("5c1547ef2c357df849b4f11e"),
            "Note" : 7,
            "DomicileOuExterieure" : "Exterieure"
        }
    ]
}

{
    "EquipeDomicile" : "Real Madrid",
    "EquipeExterieure" : "FC Barcelona",
    "Competition" : "LaLiga",
    "ScoreEquipeDomicile" : 2,
    "ScoreEquipeExterieure" : 1,
    "NoteJoueurs" : [ 
        {
            "Joueurs_id" : ObjectId("5c1540bd2c357df849b4f020"),
            "Note" : 8.5,
            "DomicileOuExterieure" : "Exterieure"
        }, 
        {
            "Joueurs_id" : ObjectId("5c1543af2c357df849b4f071"),
            "Note" : 6,
            "DomicileOuExterieure" : "Exterieure"
        }, 
        {
            "Joueurs_id" : ObjectId("5c1543af2c357df849b4f073"),
            "Note" : 7,
            "DomicileOuExterieure" : "Exterieure"
        }, 
        {
            "Joueurs_id" : ObjectId("5c1543af2c357df849b4f075"),
            "Note" : 5,
            "DomicileOuExterieure" : "Exterieure"
        }, 
        {
            "Joueurs_id" : ObjectId("5c1543af2c357df849b4f077"),
            "Note" : 8,
            "DomicileOuExterieure" : "Exterieure"
        }, 
        {
            "Joueurs_id" : ObjectId("5c1543af2c357df849b4f079"),
            "Note" : 6,
            "DomicileOuExterieure" : "Exterieure"
        }, 
        {
            "Joueurs_id" : ObjectId("5c1543af2c357df849b4f07b"),
            "Note" : 8.5,
            "DomicileOuExterieure" : "Exterieure"
        }, 
        {
            "Joueurs_id" : ObjectId("5c1543af2c357df849b4f07d"),
            "Note" : 7,
            "DomicileOuExterieure" : "Exterieure"
        }, 
        {
            "Joueurs_id" : ObjectId("5c1543af2c357df849b4f07f"),
            "Note" : 7,
            "DomicileOuExterieure" : "Exterieure"
        }, 
        {
            "Joueurs_id" : ObjectId("5c1543af2c357df849b4f081"),
            "Note" : 5,
            "DomicileOuExterieure" : "Exterieure"
        }, 
        {
            "Joueurs_id" : ObjectId("5c1543af2c357df849b4f083"),
            "Note" : 7,
            "DomicileOuExterieure" : "Exterieure"
        }, 
        {
            "Joueurs_id" : ObjectId("5c1547ef2c357df849b4f12c"),
            "Note" : 5,
            "DomicileOuExterieure" : "Domicile"
        }, 
        {
            "Joueurs_id" : ObjectId("5c1547ef2c357df849b4f130"),
            "Note" : 4,
            "DomicileOuExterieure" : "Domicile"
        }, 
        {
            "Joueurs_id" : ObjectId("5c1547ef2c357df849b4f12e"),
            "Note" : 3.5,
            "DomicileOuExterieure" : "Domicile"
        }, 
        {
            "Joueurs_id" : ObjectId("5c1547ef2c357df849b4f12a"),
            "Note" : 5,
            "DomicileOuExterieure" : "Domicile"
        }, 
        {
            "Joueurs_id" : ObjectId("5c1547ef2c357df849b4f128"),
            "Note" : 5.5,
            "DomicileOuExterieure" : "Domicile"
        }, 
        {
            "Joueurs_id" : ObjectId("5c1547ef2c357df849b4f126"),
            "Note" : 6,
            "DomicileOuExterieure" : "Domicile"
        }, 
        {
            "Joueurs_id" : ObjectId("5c1547ef2c357df849b4f11c"),
            "Note" : 6.5,
            "DomicileOuExterieure" : "Domicile"
        }, 
        {
            "Joueurs_id" : ObjectId("5c1547ef2c357df849b4f124"),
            "Note" : 3.5,
            "DomicileOuExterieure" : "Domicile"
        }, 
        {
            "Joueurs_id" : ObjectId("5c1547ef2c357df849b4f122"),
            "Note" : 4,
            "DomicileOuExterieure" : "Domicile"
        }, 
        {
            "Joueurs_id" : ObjectId("5c1547ef2c357df849b4f120"),
            "Note" : 4.5,
            "DomicileOuExterieure" : "Domicile"
        }, 
        {
            "Joueurs_id" : ObjectId("5c1547ef2c357df849b4f11e"),
            "Note" : 7,
            "DomicileOuExterieure" : "Domicile"
        }
    ]
}
// Les Indexes

//		Pour le nom de l'equipe
db.getCollection('equipe').ensureIndex( { "Nom": 1 } )

//		Pour le nom de Joueurs
db.getCollection('joueurs').ensureIndex( { "Nom": 1 } )

// Les Requettes
// Liste Joueurs
db.getCollection('joueurs').find({});

// Liste Joueurs par poste
db.getCollection('joueurs').find({Poste : "Goalkeeper"});

// Liste des noms des Equipes
db.getCollection('equipe').find({},{Nom:1,_id : 0});

// Liste Matchs
db.getCollection('matchs').find({})

// Liste Matchs par EquipeDomicile
db.getCollection('matchs').find({EquipeDomicile : "FC Barcelona"} , {_id : 0});

//sélection des joueurs pour un poste donné et un âge max (ex: Poste : Right-Back,Age > 25)
db.getCollection('joueurs').aggregate([
    {$project:
        {
            _id:0,
            Nom:1,
            Prenom:1,
            Poste:1,
            Age: {$subtract:[{$year : {date : new Date()}},{$year : {date : '$DateNaissance'}}]}
        }
    },
    {$match : 
        {Poste:"Right-Back",
         Age : { $gt: 25 }}
    }
])

//La nouvelle collection en utilisant la fonction mapReduce pour avoir le nombre de match joue et la moyenne des notes
var mapFunction = function() {
                       for (var i = 0; i < this.NoteJoueurs.length; i++) {
                           var key = this.NoteJoueurs[i].Joueurs_id;
                           var value = {
                                         count: 1,
                                         Note: this.NoteJoueurs[i].Note
                                       };
                           emit(key, value);
                       }
                    };


var reduceFunction = function(key, count) {
                     reducedVal = { count: 0, Note: 0 };

                     for (var i = 0; i < count.length; i++) {
                         reducedVal.count += count[i].count;
                         reducedVal.Note += count[i].Note;
                     }

                     return reducedVal;
                  };
var finalizeFunction = function (key, reducedVal) {

                       reducedVal.MoyenneNote = reducedVal.Note/reducedVal.count;

                       return reducedVal;

                    };
db.matchs.mapReduce( mapFunction,
                     reduceFunction,
                     {
                       out: { merge: "listeJoueurs" },
                       finalize: finalizeFunction
                      
                     }
                   )
//On obtient la liste des joueurs qui ont joues plus de 2 match avec la moyanne des notes:
var res = db.listeJoueurs.find({"value.count" : {$gte : 2}},{"value.MoyenneNote":1})
res

// pour obtenir les details d'un joueurs (nom,prenom,....)
db.joueurs.find({"_id" :res[0]._id});
