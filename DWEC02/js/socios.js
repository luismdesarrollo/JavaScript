//'use strict'

const formulario = document.querySelector('#formularioSocio')
const contenedorEscribirSocios = document.getElementById('contenedorPintarSocios')
var socio = new Array();
var nombreCapturado;
var apellidoCapturado;

function aniadirSociosInicialesArray () {
socio = JSON.parse( '[{"id": 1, "nombre": "Andoni", "apellido":"Larrieta"},{"id": 2, "nombre":"Jon", "apellido":"Agirre"},{"id": 3, "nombre":"Patxi", "apellido":"Mujika"}]');
}

function capturarDatosSocio () {  
	creacionSocio();
	if (nombreCapturado != "" && apellidoCapturado !=""){
			agregarSociosArray();	
	}
	nombreCapturado = "";
	apellidoCapturado ="";
 }
   
function agregarSociosArray(){
	socio.push(nuevoSocio)
}

function creacionSocio(){
   function SocioNuevo(id,nombre, apellido){
      this.id = id;
      this.nombre = nombre;
      this.apellido = apellido;   
   }
   
   function crearId () {
		id = socio.length + 1;
		return id;
   }
	
   nombreCapturado = document.getElementById('tNombre').value;
   apellidoCapturado = document.getElementById('tApellido').value;
   var nuevaId= crearId();
	nuevoSocio = new SocioNuevo(nuevaId,nombreCapturado, apellidoCapturado);
}

function pintarListaSocios () {
	 borrarContenido();
  for (var i = 0; i < socio.length; i++) {
         document.getElementById("contenedorPintarSocios").innerHTML += "Socio número " + socio[i].id + " : " + socio[i].nombre + " " +  socio[i].apellido + '<br/>';
   }
  function borrarContenido(){
   document.getElementById('contenedorPintarSocios').innerHTML = '';
  }
}

aniadirSociosInicialesArray ();

