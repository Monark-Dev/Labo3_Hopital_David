let fichierJson;

let listerPatients = (listePatients) => {
    let rep = " "
    let repFin = "</table>"
    let rep1 = `

  <table class=table table-striped>
  <tr  class="bg-info">
    <tr>
         <th>Dossier</th>
         <th>Nom</th>
         <th>Prénom</th>
         <th>Date naissance</th>
         <th>Sexe</th>
    </tr> `;
    for (let unPatient of listePatients) {


        rep += `
  <tr><td>${unPatient.dossier}</td><td>${unPatient.nom}</td><td>${unPatient.prénom}</td><td>${unPatient.naissance}</td><td>${unPatient.sexe}</td></tr>
`;

    }
    $('#contenu').html(rep1 + rep + repFin);



}
let listerHospitalisation = (listeHospitalisation) => {
    let rep2 = " "
    let repFin2 = "</table>"
    let rep3 = `
    
    <table class=table table-striped>
    <tr  class="bg-info">
         <tr>
              <th>Code Établissement</th>
              <th>No dossier patient</th>
              <th>Date admission</th>
              <th>Date sortie</th>
              <th>Spécialité</th>
    </tr>`
    for (let unhospitalisation of listeHospitalisation) {
        rep2 += `
        <tr><td> ${unhospitalisation.code_établissement}</td><td>${unhospitalisation.no_dossier_patient}</td><td>${unhospitalisation.date_admission}</td><td>${unhospitalisation.date_sortie}</td><td>${unhospitalisation.spécialité}</td></tr>
        `;
    }



    $('#contenu').html(rep3 + rep2 + repFin2);

}




let listerHospi = (listeHospi) => {
    fichierJson = listeHospi;
    let affichagePatient = " "
    let fermetureTableau = "</table>"
    let affichageSelect = `<label id="select" mb-3" for="selectPourAfficherParPatient"> Pour vivre la puissance du "select" ... </label>
    <select name="selectPourAfficherParPatient" class="form-select id="selectPourAfficherParPatient" onchange="afficherHospitalisationsPourCePatient(this);">
    <option>Choisissez un patient</option>`;
    for (let unhospatient of listeHospi.patient) {
        affichageSelect += `<option value="${unhospatient.dossier}">${unhospatient.dossier}: ${unhospatient.nom}, ${unhospatient.prenom}</option>
        `
    }


    let affichageTableau = `

        <table class=table table-striped>
          <tr  class="bg-info">
          <tr>
               <th>CodeXXX Établissement</th>
               <th>No dossier patient</th>
               <th>Date admission</th>
               <th>Date sortie</th>
               <th>Spécialité</th>
        </tr>`
    for (let unhospatient of listeHospi.patient) {
        affichagePatient += `
        <tr><td> ${unhospatient.code_établissement}</td><td>${unhospatient.no_dossier_patient}</td><td>${unhospatient.date_admission}</td><td>${unhospatient.date_sortie}</td><td>${unhospatient.spécialité}</td></tr>
        `;
    }


    $('#contenu').html(affichageSelect + affichageTableau + affichagePatient + fermetureTableau);

}

let afficherHospitalisationsPourCePatient = (thisDuSelect) => {

    let compteur = 0;
    let fermetureTableau = "</table>"
    let numero = parseInt(thisDuSelect.options[thisDuSelect.selectedIndex].value);
    let tableauDesHospitalisationDuPatient;
    let phrase = ""
    let titreDuTableauParPatient = `
    
    <table class=table table-striped>
    <tr  class="bg-info">
         <tr>
              <th>Code Établissement</th>
              <th>No dossier patient</th>
              <th>Date admission</th>
              <th>Date sortie</th>
              <th>Spécialité</th>
    </tr>`

    for (let patient of fichierJson.patient) {
        if (numero == patient.dossier) {
            phrase = `${patient.prenom} ${patient.nom}`
        }
    }


    for (let unhospitalisation of fichierJson.hospitalisation) {
        if (numero == unhospitalisation.no_dossier_patient) {

            tableauDesHospitalisationDuPatient += `<tr><td> ${unhospitalisation.code_établissement}</td><td>${unhospitalisation.no_dossier_patient}</td><td>${unhospitalisation.date_admission}</td><td>${unhospitalisation.date_sortie}</td><td>${unhospitalisation.spécialité}</td></tr>`;

            compteur++
        }

    }
    phrase += ` a visité   ${compteur}  fois l'hopital`;
    $('#contenu').html(phrase + titreDuTableauParPatient + tableauDesHospitalisationDuPatient + fermetureTableau);

}