function showBonusMessage(fieldName) {
    const messages = {
        auteur: "✨ Quel magnifique pseudo !",
        titre: "😯 Formidable choix d'histoire ",
    };

    const input = document.getElementById(fieldName);
    const messageDiv = document.getElementById(fieldName + "BonusMessage");

    if (input.value) {
        messageDiv.textContent = messages[fieldName];
    } else {
        messageDiv.textContent = "";
    }
}

function updateVersionMessage() {
    const version = document.getElementById('version').value;
    const versionMessage = document.getElementById('versionMessage');

    if (version >= 5) {
        versionMessage.textContent = "😮 Ca fait un peu beaucoup là non ?!";
    } else {
        versionMessage.textContent = "";
    }
}

function updateBonusMessage() {
    const bonusInput = document.getElementById('bonus').value;
    const bonusMessage = document.getElementById('bonusMessage');

    // On extrait le nombre d'histoires du pack vu que c'est un type=text
    const bonus = parseInt(bonusInput.match(/\d+/), 10);

    if (!isNaN(bonus) && bonus >= 10) {
        bonusMessage.textContent = "😏 Nous, on aime quand y'a beaucoup d'histoires";
    } else {
        bonusMessage.textContent = "";
    }
}