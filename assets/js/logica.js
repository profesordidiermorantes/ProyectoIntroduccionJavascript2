/* Paradigma de programacion modular */
function asignarEventos(){
    let elBoton = document.getElementById('botonEspecial');
    elBoton.addEventListener('click', saludar);

    let elBotonSumar = document.getElementById('btnSumar');
    elBotonSumar.addEventListener('click', realizarSuma);
}
function saludar(){
    let elParrafo = document.getElementById('parrafoEspecial');
    elParrafo.innerHTML = 'El prop&oacute;sito de JavaScript es manipular el DOM';
    elParrafo.style.backgroundColor = 'yellow';
    elParrafo.style.color = 'red';
    elParrafo.style.fontSize = '56px';
    const dato1 = 5;
    const dato2=6;
    const resultado = dato1 + dato2;
    console.log(resultado);
}
function realizarSuma(){
    let dato1 = document.getElementById('txtDato1').value;
    console.log(typeof dato1);
    let dato1Numero = Number(dato1);
    let dato2 = document.getElementById('txtDato2').value;
    let dato2Numero = Number(dato2);

    let resultado = dato1Numero + dato2Numero;
    let elResultadoSuma = document.getElementById('resultadoSuma');
    elResultadoSuma.value = resultado;
}