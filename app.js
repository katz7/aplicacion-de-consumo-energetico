/* function Solonumeros(evt){
  if(window.event){
    Keynum = evt.KeyCode;
    console.log('numeoro2'+Keynum);
  }else{
    Keynum = evt.which;
    console.log('numero 1' +Keynum);
  }
  if((Keynum > 47 && Keynum < 58) || Keynum == 8 || Keynum == 13){
    return true;

  }else{
    alert("ingresa solo numero");
    return false;
  }

} */



$(document).ready(function(){
  //obtenemos el valor de los input

  $('#adicionar').click(function(){

    var equipo = document.getElementById("equipo").value;
    var consumo = document.getElementById("consumo").value;
    var numero = document.getElementById("numero").value;
    var horas = document.getElementById("horas").value;
    var dia = document.getElementById("dia").value;
    var Watts = consumo * numero * horas;
    var Kmdia = Watts / 1000;
    var Km = Kmdia * dia;


    var i = 1; //contador para asignar id al boton que borrara la fila
    var fila = '<tr id="row' + i + '"><td>' + equipo + '</td><td>' + consumo + '</td><td>' + numero + '</td><td>' + horas + '</td><td>' + Watts + '</td><td>' + Kmdia + '</td><td>' + dia + '</td><td>' + Km + ''; //esto seria lo que contendria la fila

    document.getElementById('resultados').value = Km;

    i++;

    $('#mytable tr:first').after(fila);
    $("#adicionados").text(""); //esta instruccion limpia el div adicioandos para que no se vayan acumulando
    var nFilas = $("#mytable tr").length;
    $("#adicionados").append(nFilas - 1); //// imprime el numero de equipos que en van entrado en la tabla
    /// pero no se utilizo, se oculto, se encuentra en la linea 331 del index html 

    //le resto 1 para no contar la fila del header
    document.getElementById("equipo").value = "";
    document.getElementById("consumo").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("horas").value = "";
    document.getElementById("Watts").Value = "";
    document.getElementById("kmdia").Value = "";
    document.getElementById("dia").Value = "";
    document.getElementById("Km").Value = "";
    document.getElementById("equipo").focus();
  });

});

  /////////  se obtiene el resultado de la suma todos los KW/MES 

var variableAcumuladora = 0;   ///// 
function ejemplo() {    /// suma para obtener el total del kw/mes 
  var valor = parseInt($("#resultados").val());    
  valor = isNaN(valor) ? 0 : valor;

  variableAcumuladora += valor;

  $("#resultados").val("");
  $("#resultados").focus();
  $("#acomulado").text(variableAcumuladora);
  document.getElementById('acomulado1').value = variableAcumuladora;

}


$(document).ready(function () {

  $('#calcular').click(function () {

    var acomulado = parseInt($("#acomulado1").val());
    ///// precios que se ingresan de acuerdo al servicio de EFC
    // var basico = Math.round(document.getElementById("basico").value);
    var basico = document.getElementById("basico").value;
    var intermedio = document.getElementById("intermedio").value;
    var excente = document.getElementById("exedente").value;

    //// se imprime los datos ingresados  de los precios 
    document.getElementById('precio1').value = basico;
    document.getElementById('precio2').value = intermedio;
    document.getElementById('precio3').value = excente;

     ////    se utiliza un if para decir la accion a realizar de pendiendo el consumo energetico del
     ////    valor acomulado al sumar basico, intermedio y exedente 
    if (acomulado >= 280) {


      var r = acomulado - 280;
      document.getElementById('exeden1').value = r;
      document.getElementById('inter1').value = 130;
      document.getElementById('basi1').value = 150;

      document.getElementById('color3.3').style.backgroundColor = "#f19797";
      document.getElementById('color2.2').style.backgroundColor = "#e8eeb0";
      document.getElementById('color1.1').style.backgroundColor = "#bdeeb0";

      // inprimiendo precios total

      var ru1 = 150 * basico;
      var ru2 = 130 * intermedio;
      var ru = r * excente;

      document.getElementById('total1').value = ru1.toFixed(2);
      document.getElementById('total2').value = ru2.toFixed(2);
      document.getElementById('total3').value = ru.toFixed(2);


      // obteniendo el subtotal

      var subtotal = ru2 + ru1 + ru;
      document.getElementById('subtotal').value = subtotal.toFixed(2);


    } else if (acomulado >= 150) {

      /////////  resultado de tabla total KMH por mes    
      var r = acomulado - 150;
      document.getElementById('exeden1').value = 0;
      document.getElementById('inter1').value = r;  // mustra el resultado 
      document.getElementById('basi1').value = 150;

      /////// se le pone el color a al de pendiendo el valor optenido 
      /////   tabla niveles 
      document.getElementById('color2.2').style.backgroundColor = "#e8eeb0";
      document.getElementById('color1.1').style.backgroundColor = "#bdeeb0";

      ///// inprimiendo precios total de precio KWH por mes


      var ru1 = 150 * basico;
      var ru2 = r * intermedio;

      document.getElementById('total1').value = ru1.toFixed(2);
      document.getElementById('total2').value = ru2.toFixed(2);
      document.getElementById('total3').value = 0;

      // obteniendo el subtotal

      var subtotal = ru2 + ru1;
      document.getElementById('subtotal').value = subtotal.toFixed(2);


    } else if (acomulado <= 150) {
      document.getElementById('exeden1').value = 0;
      document.getElementById('inter1').value = 0;
      document.getElementById('basi1').value = acomulado;

      document.getElementById('color1.1').style.backgroundColor = "#bdeeb0";

      // inprimiendo precios total

      var ru2 = acomulado * basico;

      document.getElementById('total1').value = ru2.toFixed(2);
      document.getElementById('total2').value = 0;
      document.getElementById('total3').value = 0;

      // obteniendo el subtotal

      document.getElementById('subtotal').value = ru2.toFixed(2);

    }

  });
});


//// se  obtine el reultado final 
$(document).ready(function () {

  $('#calcula').click(function () {

    var acomulado = parseInt($("#acomulado1").val());  // se utiliza el valor input para imprimir el color 
    var subtotal = Number(document.getElementById("subtotal").value); // se utiliza el valor de input
    var iva = Number(document.getElementById("iva").value); //     para realizar las operaciones de tener el valor
                                                            //      del iva y del precio final 
     ///  operacion que optiene el resultado del iva                                                        
    var rIva = subtotal * iva / 100;
    document.getElementById("rIva").value = rIva.toFixed(2);
     //  se optine el resultado del iva y el resultado fina de la aplicacion 
    var final = (subtotal * iva / 100) + subtotal;
    document.getElementById("subfinal").value = final.toFixed(2);

     ///// se elige el color de que imprime de acuerdo al valor a comulado 
    if (acomulado >= 280) {
      var x = "Nivel execedente" // se imprime el texto del nivel 
      document.getElementById('colorfinal').style.backgroundColor = "#f19797";  // se pinta la celda 
      $("#colorfinal2").text(x);   // se elige la celda que se pintara 

    } else if (acomulado >= 150) {
      var x = "Nivel intermedio" // se imprime nivel
      document.getElementById('colorfinal').style.backgroundColor = "#e8eeb0";
      $("#colorfinal2").text(x);

    } else if (acomulado <= 150) {
      var x = "Nivel basico"  // se imprime nivel
      document.getElementById('colorfinal').style.backgroundColor = "#bdeeb0";
      $("#colorfinal2").text(x);

    }



  });

});




