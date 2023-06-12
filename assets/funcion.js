function mostrarFecha() {
  var fechaHoy = new Date();
  var diaSemana = fechaHoy.getDay(); 
  var diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  var diaActual = diasSemana[diaSemana]; 
  
  return diaActual;
}
document.getElementById("dia0").innerHTML = mostrarFecha();


function mostrarProximosDias() {

  var fechaActual = new Date();
 
  var diasSemana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
  

  for (var i = 1; i <= 7; i++) {
     var fechaSiguiente = new Date();
    fechaSiguiente.setDate(fechaActual.getDate() + i);
        var numeroDiaSemana = fechaSiguiente.getDay();
        var nombreDiaSemana = diasSemana[numeroDiaSemana];
      document.getElementById("dia" + i).innerHTML = nombreDiaSemana;
  }
}

mostrarProximosDias();

function obtenerClimaAleatorio() {
  var climas = ["Soleado", "Nublado", "Parcialmente nublado", "Lluvioso", "Ventoso", "Tormenta"];
  var indiceAleatorio = Math.floor(Math.random() * climas.length); 
  var climaAleatorio = climas[indiceAleatorio]; 
  return climaAleatorio;
}

document.getElementById("clima0").innerHTML = obtenerClimaAleatorio();




function generarTemperatura(min, max) {
  var temperatura = Math.random() * (max - min) + min;
  temperatura = temperatura.toFixed(2);
  return temperatura;
}

function toggleTemperatura() {
  var celsiusElements = document.getElementsByClassName("celsius");
  var switchElement = document.getElementById("flexSwitchCheckDefault");

  if (switchElement.checked) {
    // Cambiar a Fahrenheit
    for (var i = 0; i < celsiusElements.length; i++) {
      var temperaturaCelsius = parseFloat(celsiusElements[i].innerText);
      var temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
      celsiusElements[i].innerText = temperaturaFahrenheit.toFixed(2);
    }
  } else {
    // Cambiar a Celsius
    for (var i = 0; i < celsiusElements.length; i++) {
      var temperaturaFahrenheit = parseFloat(celsiusElements[i].innerText);
      var temperaturaCelsius = (temperaturaFahrenheit - 32) * 5/9;
      celsiusElements[i].innerText = temperaturaCelsius.toFixed(2);
    }
  }
}

document.getElementById("0").innerHTML = generarTemperatura(-3, 3);
document.getElementById("1").innerHTML = generarTemperatura(-3, 3);
document.getElementById("2").innerHTML = generarTemperatura(-3, 6);
document.getElementById("3").innerHTML = generarTemperatura(-3, 8);
document.getElementById("4").innerHTML = generarTemperatura(-3, 10);
document.getElementById("5").innerHTML = generarTemperatura(-3, 9);
document.getElementById("6").innerHTML = generarTemperatura(-3, 15);
document.getElementById("7").innerHTML = generarTemperatura(-3, 16);

function clima() {
  var climaHoy = ["Soleado", "Nublado", "Parcialmente nublado", "Lluvioso", "Ventoso"];
  var climaActual = climaHoy[Math.floor(Math.random() * climaHoy.length)];
  return climaActual;
}

function generarTemperatura(min, max) {
  var temperatura = Math.random() * (max - min) + min;
  temperatura = temperatura.toFixed(2);
  return temperatura;
}

function toggleTemperatura() {
  var celsiusElements = document.getElementsByClassName("celsius");
  var switchElement = document.getElementById("flexSwitchCheckDefault");

  if (switchElement.checked) {
    // Cambiar a Fahrenheit
    for (var i = 0; i < celsiusElements.length; i++) {
      var temperaturaCelsius = parseFloat(celsiusElements[i].innerText);
      var temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;
      celsiusElements[i].innerText = temperaturaFahrenheit.toFixed(2);
    }
  } else {
    // Cambiar a Celsius
    for (var i = 0; i < celsiusElements.length; i++) {
      var temperaturaFahrenheit = parseFloat(celsiusElements[i].innerText);
      var temperaturaCelsius = (temperaturaFahrenheit - 32) * 5 / 9;
      celsiusElements[i].innerText = temperaturaCelsius.toFixed(2);
    }
  }
}

document.getElementById("0").innerHTML = generarTemperatura(-3, 3);
document.getElementById("1").innerHTML = generarTemperatura(-3, 3);
document.getElementById("2").innerHTML = generarTemperatura(-3, 6);
document.getElementById("3").innerHTML = generarTemperatura(-3, 8);
document.getElementById("4").innerHTML = generarTemperatura(-3, 10);
document.getElementById("5").innerHTML = generarTemperatura(-3, 9);
document.getElementById("6").innerHTML = generarTemperatura(-3, 15);
document.getElementById("7").innerHTML = generarTemperatura(-3, 16);

var climaAleatorio = clima();
var climaIcono = "";

switch (climaAleatorio) {
  case "Soleado":
    climaIcono = "/assets/img/soleado.svg";
    break;
  case "Nublado":
    climaIcono = "/assets/img/nublado.svg";
    break;
  case "Parcialmente nublado":
    climaIcono = "/assets/img/parcialmente nublado.svg";
    break;
  case "Lluvioso":
    climaIcono = "/assets/img/lluvioso.svg";
    break;
  case "Ventoso":
    climaIcono = "/assets/img/ventoso.svg";
    break;
}

document.getElementById("clima0").innerText = climaAleatorio;
document.getElementById("actual").innerHTML += '<img src="' + climaIcono + '" class="icono">';
