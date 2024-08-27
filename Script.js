 // Función para abrir la compuerta
 function openCompuerta() {
    document.querySelector('.compuerta').classList.add('open');
    setTimeout(() => {
        document.querySelector('.intro').style.display = 'none';
        document.getElementById('mainContent').style.display = 'flex';
    }, 1000);
}

// Función para encriptar el texto
function encrypt() {
    let text = document.getElementById("inputText").value;
    let encryptedText = text.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");
    document.getElementById("outputText").textContent = encryptedText;
}

// Función para desencriptar el texto
function decrypt() {
    let encryptedText = document.getElementById("inputText").value;
    let decryptedText = encryptedText.replace(/enter/g, "e")
                                     .replace(/imes/g, "i")
                                     .replace(/ai/g, "a")
                                     .replace(/ober/g, "o")
                                     .replace(/ufat/g, "u");
    document.getElementById("outputText").textContent = decryptedText;
}

// Función para copiar el texto al portapapeles
function copyToClipboard() {
    let outputText = document.getElementById("outputText").textContent;
    navigator.clipboard.writeText(outputText).then(() => {
        alert("Texto copiado al portapapeles");
    }).catch(err => {
        alert("Hubo un problema al copiar el texto: " + err);
    });
}