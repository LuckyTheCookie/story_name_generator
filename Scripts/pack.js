// Fonction pour générer le nom du pack et enregistrer le nom d'utilisateur
function generatePackName() {
    const age = document.getElementById('age').value;
    const titre = document.getElementById('titre').value.replace(/ /g, "_");
    const auteur = document.getElementById('auteur').value.replace(/ /g, "_");
    const bonus = document.getElementById('bonus').value.replace(/ /g, "_");
    const version = document.getElementById('version').value;
    
    // Vérifier si tous les champs sont remplis
    if (!age || !titre || !auteur || !bonus || !version) {
        showNotification("Veuillez remplir toutes les cases s'il vous plaît!", "danger");
        return;
    }
    
    // Enregistrer le nom d'utilisateur si la case n'est pas cochée
    if (!dontStoreUsername) {
        // Si il existe déjà un nom d'utilisateur enregistré, ne pas afficher de notification
        if (localStorage.getItem("username")) {
            console.log("Un nom d'utilisateur est déjà enregistré :", auteur);
        } else {
            showNotification("Nom d'utilisateur enregistré avec succès!", "success");
            localStorage.setItem("username", auteur);
            console.log("Nom d'utilisateur enregistré :", auteur);
        }
    } else {
        localStorage.removeItem("username");
        console.log("Le nom d'utilisateur n'a pas été enregistré et a été supprimé.");
    }
    
    // Construire le nom du pack
    let packName = `${age}+]${titre}_(${bonus})[by_${auteur}_V${version}]`;
    
    // Copier le nom du pack dans le presse-papiers
    navigator.clipboard.writeText(packName).then(() => {
        showNotification("Le nom du pack a été copié dans votre presse-papiers !", "success");
    });

    showCheckmark();
}

function showCheckmark() {
    const copyButton = document.getElementById("generatePackNameButton");

    copyButton.textContent = "✅ Copié !";

    setTimeout(() => {
        copyButton.textContent = "💾 Générer le nom du pack";
    }, 2500);
}