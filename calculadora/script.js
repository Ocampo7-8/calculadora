var cifra = "";
var acumulado = 0;

function calculadora(boton) {

  var nodos = document.getElementsByClassName('display');
  var nodo = nodos[0].firstChild;

  switch(boton) {
    case 'C':

      nodo.nodeValue = "";
      break;

    case '=':

      var resultado = eval(nodo.nodeValue);
      
      nodo.nodeValue = resultado;
      break;

    default:
      nodo.nodeValue = nodo.nodeValue + boton;
      break;
  }
}

$(document).ready(function() {
  $("body").hide().fadeIn(3000)

})  ;


