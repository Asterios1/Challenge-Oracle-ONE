const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const botonCopiar = document.querySelector(".copiar");
let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];//Creamos una matriz para almacenar las llaves de encriptacion 
/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/
function btnEncriptar() {//creamos funcion para realizar el evento del boton encriptacion
    const textoEncriptado = encriptar(textArea.value);//creamos una constante para almacenar lo que nos devuelva la funcion encriptar
    mensaje.value=textoEncriptado;//mostramos el texto encriptado en nuestra seccion de mensaje
    textArea.value="";//limpiamos lo que hay en el area de texto
    mensaje.style.backgroundImage = "none";//quitamos la imagen del cuadro de mensaje
    botonCopiar.textContent="Copiar";
}
function encriptar(stringEncriptada) {
    stringEncriptada=stringEncriptada.toLowerCase();//guardamos al string a encriptado en el mismo colocandolo todo en minuscula
    for (let index = 0; index < matrizCodigo.length; index++) {//Creamos un ciclo para hacer la encriptacion
        if (stringEncriptada.includes(matrizCodigo[index][0])) {//para hacer la encriptacion necesito pasarle la string encriptada (stringEncriptada) y hacer la verificacion de las letras que estan siendo ingresadas (.includes) y a esto pasarle el parametro, que en este caso va a ser la llave que necesito que sea verificada (matrizCodigo) y pasarle el indice (index) y la posicion (0)
            stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[index][0],matrizCodigo[index][1]);//para reemplazar las letras utilizo el metodo .replace en el cual reemplazamos el primer parametro en el string por el segundo parametro que le ingresemos, para mayor rapidez preferimos el metodo .replaceAll para hacer el cambio de todas las mismas letras de inmediato y no una por una
        }
    }
    return stringEncriptada;//devolvemos 
}
function btnDesencriptar() {//creamos funcion para realizar el evento del boton encriptacion
    const textoEncriptado = desencriptar(textArea.value);//creamos una constante para almacenar lo que nos devuelva la funcion encriptar
    mensaje.value=textoEncriptado;//mostramos el texto encriptado en nuestra seccion de mensaje
    textArea.value="";//limpiamos lo que hay en el area de texto
    mensaje.style.backgroundImage = "none";//quitamos la imagen del cuadro de mensaje
    botonCopiar.textContent="Copiar";
}
function desencriptar(stringDesencriptada) {
    stringDesencriptada=stringDesencriptada.toLowerCase();//guardamos al string a desencriptado en el mismo colocandolo todo en minuscula
    for (let index = 0; index < matrizCodigo.length; index++) {//Creamos un ciclo para hacer la encriptacion
        if (stringDesencriptada.includes(matrizCodigo[index][1])) {//para hacer la desencriptacion necesito pasarle la string desencriptada (stringDesencriptada) y hacer la verificacion de las letras que estan siendo ingresadas (.includes) y a esto pasarle el parametro, que en este caso va a ser la llave que necesito que sea verificada (matrizCodigo) y pasarle el indice (index) y la posicion (0)
            stringDesencriptada=stringDesencriptada.replaceAll(matrizCodigo[index][1],matrizCodigo[index][0]);//para reemplazar las letras utilizo el metodo .replace en el cual reemplazamos el primer parametro en el string por el segundo parametro que le ingresemos, para mayor rapidez preferimos el metodo .replaceAll para hacer el cambio de todas las mismas letras de inmediato y no una por una
        }
    }
    return stringDesencriptada;
}
function copiar() {
    navigator.clipboard.writeText(mensaje.value);
    botonCopiar.textContent="¡Copiado!";
}

