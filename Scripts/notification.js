function showNotification(message, type) {
    const notificationContainer = document.getElementById("notificationContainer");

    // Créer un nouvel élément de notification
    const newNotification = document.createElement("div");
    newNotification.classList.add("alert", `alert-${type}`, "alert-dismissible", "fade", "show");
    newNotification.setAttribute("role", "alert");

    // Ajouter le contenu de la notification
    newNotification.innerHTML = `
        <span>${message}</span>
        <button type="button" class="btn-close" aria-label="Close" onclick="hideNotification(this)"></button>
    `;

    // Ajouter la notification au conteneur
    notificationContainer.appendChild(newNotification);

    // Disparition de la notification après 3 secondes (3000 millisecondes)
    setTimeout(() => {
        hideNotification(newNotification);
    }, 3000);
}

function hideNotification(notification) {
    if (!notification) {
        notification = document.querySelector("#notificationContainer .alert");
    }

    // Cacher la notification en retirant la classe "show"
    notification.classList.remove("show");

    // Supprimer la notification après l'animation de disparition
    setTimeout(() => {
        notification.remove();
    }, 300);
}