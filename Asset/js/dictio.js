let dictionnaire = {};


fetch("dictio.json")

    .then(response => response.json())
    .then(data => {
        dictionnaire = data;

        const input = document.getElementById("mot");
        const bouton = document.getElementById("btn");
        const resultat = document.getElementById("resultat");

        bouton.addEventListener("click", function() {

            const motUtilisateur = input.value.toLowerCase();

            if(dictionnaire[motUtilisateur]){

               resultat.textContent = dictionnaire[motUtilisateur];
               
            } else {
                resultat.textContent = "Mot non trouvé";
            }

        });

        input.addEventListener("keydown", function(event) {
        if(event.key === "Enter"){  
        bouton.click();          
    }
});
    });

    