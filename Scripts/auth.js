// Fonction pour mettre à jour le nom d'utilisateur enregistré
// Sélectionne l'élément de case à cocher
const dontStoreUsernameCheckbox = document.getElementById('dontStoreUsername');

// Ajoute un écouteur d'événements de changement
dontStoreUsernameCheckbox.addEventListener('change', function() {
    // Met à jour la variable en fonction de l'état de la case à cocher
    dontStoreUsername = this.checked;
    console.log("Ne pas enregistrer le nom d'utilisateur :", dontStoreUsername);
});

function showConnectedUserInfo() {

    document.querySelector('.step-1').classList.add('hidden');
    const step1Connected = document.querySelector('.step-1-connected');
    step1Connected.classList.add('fadeInAnimation');
    step1Connected.querySelector('.username').textContent = savedUsername;
    step1Connected.classList.remove('hidden');
}

// Fonction pour supprimer le nom d'utilisateur enregistré
function deleteUsername() {
    localStorage.removeItem("username");
    location.reload(); // Recharge la page pour afficher l'étape 1 de nouveau
}

if (savedUsername) {
    // Pré-remplit automatiquement le champ d'entrée avec le nom d'utilisateur enregistré
    document.getElementById('auteur').value = savedUsername;
    // Désactive le champ d'entrée et la case à cocher
    document.getElementById('auteur').disabled = true;
    document.getElementById('dontStoreUsername').disabled = true;
    // Cache la case à cocher et le texte "Ces données sont stockées localement"
    document.getElementById('dontStoreUsername').style.display = 'none';
    document.getElementById('dontStoreUsernameLabel').style.display = 'none';
    document.getElementById('dataWarningText').style.display = 'none';
    // Affiche un autre texte indiquant que le champ est pré-rempli
    document.getElementById('preFilledText').style.display = 'block';

} else {
    // Si aucun nom d'utilisateur n'est enregistré, affiche normalement l'étape
    document.getElementById('preFilledText').style.display = 'none';
}