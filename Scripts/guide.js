// Fonction pour passer à l'étape suivante du guide
function nextStep(stepNumber) {
    // Masquer l'étape actuelle
    document.querySelector('.step-' + stepNumber).classList.add('hidden');

    
    // Afficher l'étape suivante
    stepNumber++;
    document.querySelector('.step-' + stepNumber).classList.add('fadeInAnimation');
    document.querySelector('.step-' + stepNumber).classList.remove('hidden');
}



// Fonction pour revenir à l'étape précédente du guide
function previousStep(stepNumber) {
    // Masquer l'étape actuelle
    document.querySelector('.step-' + stepNumber).classList.add('hidden');
    
    // Afficher l'étape précédente
    stepNumber--;
    document.querySelector('.step-' + stepNumber).classList.remove('hidden');
}




function specialStep() {
    nextStep(1)
    // Masquer l'étape actuelle
    document.querySelector('.step-1-connected').classList.add('hidden');
}

function previousSpecialStep(stepNumber) {
    document.querySelector('.step-' + stepNumber).classList.add('hidden');

    if (isLoggedIn) {
        showConnectedUserInfo();
    } else {
        document.querySelector('.step-1').classList.remove('hidden');
        document.querySelector('.step-1').classList.add('fadeInAnimation');
    }
}