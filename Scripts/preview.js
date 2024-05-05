function updatePreview() {
    const age = document.getElementById('age').value;
    const titre = document.getElementById('titre').value.replace(/ /g, "_");
    const auteur = document.getElementById('auteur').value.replace(/ /g, "_");
    const bonus = document.getElementById('bonus').value.replace(/ /g, "_");
    const version = document.getElementById('version').value;
    const addExtension = document.getElementById('addExtension').checked;
    const producteur = document.getElementById('producteur').value.replace(/ /g, "_");

    let result = "";
    if (age) {
        result += `${age}+]`;
    }
    if (producteur && producteur !== auteur) {
        result += `${producteur}-`;
    }
    if (titre) {
        result += `${titre}`;
    }
    if (bonus) {
        result += `(${bonus})`;
    }
    if (auteur) {
        result += `[by_${auteur}`;
    }
    if (version) {
        result += `_V${version}`;
    }
    if (addExtension) {
        result += ".zip";
    }
    
    document.getElementById('filePreview').textContent = result;

}