/*let chargerDonneesAJAX = () => {                     // fonction fleché => 
     $.ajax({                                   // Ajax va recevoir un parametre de JSON
        type:"GET",                             // Type est la propriété - GET pour obetenir des données - POS pour poster des donnés 
        url:"donnees/hopitaux.json",     // Ou est la ressource
        dataType: "json",                       // type de la réponse (3 types: String - JSON - XML)
        succes : (reponse) => {
        listerPatient(reponse.Patient)
            //alert(reponse);                   // Pour voir si on recoit bien les données. ( À faire avec le format text (dataType)) On peut verifier les erreurs.
        },
        fail : (e) =>{
            alert("Problème, essayez plus tard");
        }
    })

}*/

//=================PATIENTS====================================

let chargerDonneesFETCH = () => {
    fetch('donnees/hopitaux.json')
    .then((reponse) => {
        if (reponse.status !== 200) {
            console.log('Pas trouvé le fichier voulu' +
            reponse.status);
            return;
        }
        
        reponse.json().then((hopitaux) => {
            listerPatients(hopitaux.patient);
        });
        }
    )
    .catch(function(err) {
        alert("Problème, essayez plus tard");
    });
}


//==================HOSPITALISATION==============================

let chargerHospitalisationFETCH = () => {
    fetch('donnees/hopitaux.json')
    .then((reponse) => {
        if (reponse.status !== 200) {
            console.log('Pas trouvé le fichier voulu' +
            reponse.status);
            return;
        }
        
        reponse.json().then((hopitaux) => {
            listerHospitalisation(hopitaux.hospitalisation);
        });
        }
    )
    .catch(function(err) {
        alert("Problème, essayez plus tard");
    });
}




//==================HOSPATIENT=============================

let chargerHospiFETCH = () => {
    fetch('donnees/hopitaux.json')
    .then((reponse) => {
        if (reponse.status !== 200) {
            console.log('Pas trouvé le fichier voulu' +
            reponse.status);
            return;
        }
        
        reponse.json().then((hopitaux) => {
            listerHospi(hopitaux);
        });
        }
    )
    .catch(function(err) {
        alert("Problème, essayez plus tard");
    });
}
