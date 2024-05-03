// Variable pour suivre l'état de connexion
let isLoggedIn = false;
let savedUsername = localStorage.getItem("username");
let dontStoreUsername = false;

document.addEventListener("DOMContentLoaded", () => {
    // Vérifier si un nom d'utilisateur est sauvegardé
    if (savedUsername) {
        isLoggedIn = true;
        showConnectedUserInfo();
    }
});


