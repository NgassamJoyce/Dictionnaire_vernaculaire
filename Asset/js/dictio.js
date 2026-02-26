let dictionnaire = {};


fetch("/Asset/Data/dictio.json")

    .then(response => response.json())
    .then(data => {
        dictionnaire = data;

        console.log("Dictionnaire charger");

        const input = document.getElementById("mot");
        const bouton = document.getElementById("btn");
        const resultat = document.getElementById("resultat");


        bouton.addEventListener("click", function() {

            const motUtilisateur = input.value.toLowerCase();

        bouton.addEventListener("click", function(){

            const motUtilisateur = input.value.toLowerCase().trim();

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
        input.addEventListener("keypress", function(event) {
        if(event.key === "Enter"){  
        bouton.click();          
    }
    });
});

    