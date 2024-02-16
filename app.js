
function obtenerTextoEntrada() {
    let textoEntrada = document.getElementById('texto-input').value;
    let arrayTexto = [];
    for (let index = 0; index < textoEntrada.length; index++) {
        arrayTexto.push(textoEntrada[index]);
        console.log(textoEntrada[index] + " " + index);
    }
    return arrayTexto;
}

function Encriptarletra(letra) {
    switch (letra) {
        case 'a':
            letra = 'ai';
            break;
        case 'e':
            letra = 'enter';
            break;
        case 'i':
            letra = 'imes';
            break;
        case 'o':
            letra = 'ober';
            break;
        case 'u':
            letra = 'ufat';
            break;
        default:
            break;
    }
    return letra;
}
function EncriptarTexto() {
    let arrayEntrada = obtenerTextoEntrada();
    let arraySalida = [];
    let letra;
    for (let index = 0; index < arrayEntrada.length; index++) {
        letra = arrayEntrada[index];
        arraySalida.push(Encriptarletra(letra));
    }
    console.log(arraySalida);
    return arraySalida;
}
function mostrarTextoSalida() {
    let textoSalida = document.getElementById('texto-output');
    let textoEncriptado = "";
    let arrayTextoEncriptado = EncriptarTexto();
    for (let index = 0; index < arrayTextoEncriptado.length; index++) {
        letra = arrayTextoEncriptado[index];
        textoEncriptado = textoEncriptado + letra;
    }
    textoSalida.value = textoEncriptado;
    console.log(textoEncriptado);
}
function btnEncriptar() {
    mostrarTextoSalida();
    let textoInactivo = document.getElementById('texto-inactivo');
    textoInactivo.style.display = "none";

    let textoActivo = document.getElementById('texto-activo');
    textoActivo.style.display = "block";

}