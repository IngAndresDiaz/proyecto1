// llamado de los elementos en el HTML
const inputTexto = document.querySelector(".inputTexto")
const mensaje = document.querySelector(".mensaje")
const botonCopiar = document.querySelector(".copiar")
const botonPegar = document.querySelector(".pegar")
const muneco = document.querySelector(".muneco")
const titulito = document.querySelector(".titulito")
const parrafito = document.querySelector(".parrafito")
var contenidoAPegar = "";



//Condiciones de conversion en nuestro encriptador
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

//funcion que se ejecuta con el boton encriptar
function btnEncriptar(){

    const textoEncriptado = encriptar(inputTexto.value)

    mensaje.value = textoEncriptado;
    //oculta la imaggen del muñeco al dar click en este boton
    muneco.style.display = "none";
    //oculta el texto inicial debajo del muñeco
    titulito.style.display = "none";
    parrafito.style.display = "none";
    //muestra el cuadro de texto encriptado y el boton de copiar
    mensaje.style.display = "block";
    botonCopiar.style.display = "block";    
    inputTexto.value = ""
}
//funcion que realiza la encriptacion
function encriptar(stringEncriptada){
    //matriz con las condiciones de enciptacion
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    //toma el strin que recibe y lo pone en minusculas
    stringEncriptada = stringEncriptada.toLowerCase();
    //ciclo for para iterar en todo el string y realizar el cambio para la salida en la encriptacion
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}
//funcion para realizar la desencriptacion
function btnDesencriptar(){
    const textoDesencriptado = desncriptar(inputTexto.value)
    mensaje.value = textoDesencriptado;
    //oculta los elementos de la seccion que muestra el mensaje
    muneco.style.display = "none";
    titulito.style.display = "none";
    parrafito.style.display = "none";
    //muestra el cuadro con el mensaje desencriptado y el boton de copiar
    mensaje.style.display = "block";
    botonCopiar.style.display = "block";    
    inputTexto.value = ""
}
// funcion que realiza la desencriptacion
function desncriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
   

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][0])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptada;
}
//funcion que realiza la copia al porta papeles y a la variable contenido a pegar
function copiar(){
    mensaje.select()
    contenidoAPegar=mensaje.value;
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    botonPegar.style.display = "block";
    botonCopiar.style.display = "none"; 
    mensaje.style.display = "none";  
    muneco.style.display = "block";
}
//funcion que realiza el boton de pegar poniendo el valor de la variable contenido a pegar en el cuadro de input principal
function pegar(){
    inputTexto.value = contenidoAPegar;
}
function mostrar(){
   
   
}