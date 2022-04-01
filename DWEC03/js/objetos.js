var botonConsultar = document.getElementById("botonConsultar");

botonConsultar.addEventListener('click', function(){
   consulta();
});

function consulta(){
   var objProvincias = document.getElementById("provincias");
   var valor = objProvincias.options[objProvincias.selectedIndex].value;
   var texto = objProvincias.options[objProvincias.selectedIndex].text;
   alert("OPCIÓN SELECCIONADA: " + valor + " - " + texto);
}
