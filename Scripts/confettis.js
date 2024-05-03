// Récupérer l'élément bouton
var generatePackNameButton = document.getElementById('generatePackNameButton');
            
// Ajouter un gestionnaire d'événements pour le clic
generatePackNameButton.addEventListener('click', function() {
    // Lancer une animation de confettis depuis l'élément bouton
    party.confetti(generatePackNameButton, {
        count: party.variation.range(40, 60), // Exemple d'option
        shapes: ["square", "circle", "roundedRectangle"] // Exemple de formes
    });
});


function showConfettiAuthor() {
    // Vérifier si un nom d'utilisateur est enregistré dans le stockage local
    var savedUsername = localStorage.getItem("username");
    if (savedUsername) {
        var input = document.getElementById('auteur');
        party.confetti(input, {
            count: party.variation.range(150, 80),
            shapes: ["square", "circle", "roundedRectangle"]
        });
    }
}