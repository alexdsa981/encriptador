let textoInactivo = document.getElementById('texto-inactivo');
let textoActivo = document.getElementById('texto-activo');
let textoSalida = document.getElementById('texto-output');

function obtenerTextoEntrada() {
    let textoEntrada = document.getElementById('texto-input').value;
    // Eliminar acentos y caracteres especiales
    textoEntrada = textoEntrada.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    textoEntrada = textoEntrada.toLowerCase();

    return textoEntrada;
}

function encriptarTexto() {
    textoEntrada = obtenerTextoEntrada();
    let textoEncriptado = textoEntrada
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    console.log(textoEncriptado);
    return textoEncriptado;
}

function desencriptarTexto() {
    textoEntrada = obtenerTextoEntrada();
    let textoDesencriptado = textoEntrada
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    console.log(textoDesencriptado);
    return textoDesencriptado;
}
function btnEncriptar() {
    let textoEntrada = document.getElementById('texto-input').value;
    if (!textoEntrada == "") {
        textoInactivo.style.display = "none";
        textoActivo.style.display = "block";
        textoSalida.value = encriptarTexto();
    }
}
function btnDesencriptar() {
    let textoEncriptado = document.getElementById('texto-input').value;
    if (!textoEncriptado == "") {
        textoInactivo.style.display = "none";
        textoActivo.style.display = "block";
        textoSalida.value = desencriptarTexto();
    }
}

function btnCopiar() {

    var textoOutput = document.getElementById('texto-output');

    textoOutput.select();
    textoOutput.setSelectionRange(0, 99999);

    try {
        document.execCommand('copy');
        alert('Texto copiado al portapapeles con éxito');
    } catch (err) {
        console.error('No se pudo copiar el texto: ', err);
        alert('Error al copiar el texto al portapapeles');
    }
}

