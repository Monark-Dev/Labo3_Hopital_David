let listerPatients = (listePatients) => {
    let rep= " "
    let repFin= "</table>"
    let rep1=`"

  <table class=table table-striped>
  <tr  class="bg-info">
    <tr>
         <th>Dossier</th>
         <th>Nom</th>
         <th>Prénom</th>
         <th>Date naissance</th>
         <th>Sexe</th>
    </tr> `;
    for(let unPatient of listePatients){


  rep+=`
  <tr><td>${unPatient.dossier}</td><td>${unPatient.nom}</td><td>${unPatient.prénom}</td><td>${unPatient.naissance}</td><td>${unPatient.sexe}</td></tr>
`;
  
    }
    $('#contenu').html(rep1+rep+repFin);



}
let listerHospitalisation = (listeHospitalisation) => {
    let rep2=" "
    let repFin2= "</table>"
    let rep3=`"
    
    <table class=table table-striped>
    <tr  class="bg-info">
         <tr>
              <th>Code Établissement</th>
              <th>No dossier patient</th>
              <th>Date admission</th>
              <th>Date sortie</th>
              <th>Spécialité</th>
    </tr>`
    for(let unhospitalisation of listeHospitalisation){
        rep2+=`
        <tr><td> ${unhospitalisation.code_établissement}</td><td>${unhospitalisation.no_dossier_patient}</td><td>${unhospitalisation.date_admission}</td><td>${unhospitalisation.date_sortie}</td><td>${unhospitalisation.spécialité}</td></tr>
        `;
    }



    $('#contenu').html(rep3 + rep2 + repFin2 );
   
}




let listerHospi = (listeHospi) => {
    let repHosp=" "
    let repFinHosp= "</table>"
    let select;
    let repHosp1=`"
    
    
    <table class=table table-striped>
    <tr  class="bg-info">
         <tr>
              <th>Code Établissement</th>
              <th>No dossier patient</th>
              <th>Date admission</th>
              <th>Date sortie</th>
              <th>Spécialité</th>
    </tr>`
    for(let unhospatient of listeHospi){
        repHosp+=`
        <tr><td> ${unhospatient.code_établissement}</td><td>${unhospatient.no_dossier_patient}</td><td>${unhospatient.date_admission}</td><td>${unhospatient.date_sortie}</td><td>${unhospatient.spécialité}</td></tr>
        `;
    }
    


    $('#contenu').html(repHosp1 + repHosp + repFinHosp + select );
   
}
