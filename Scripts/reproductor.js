/* function cambiarTrack(track) {

    var path =  track.getAttribute("path")
    viejo_audio = document.getElementById("reproductor")
    audio_padre = viejo_audio.parentNode
    audio_padre.removeChild(viejo_audio)
    nuevo_audio = document.createElement("audio")
    nuevo_audio.setAttribute("id","reproductor")
    nuevo_audio.setAttribute("controls", "controls")
   // nuevo_audio.setAttribute("autoplay", "autoplay")
    source = document.createElement("source")
    source.setAttribute("src", path)
    source.setAttribute("type", "audio/mpeg")
    source.setAttribute("id", "reproductorSource")
    nuevo_audio.appendChild(source)
    nuevo_audio.setAttribute("autoplay", "true")  
    audio_padre.appendChild(nuevo_audio)} */

function validarRadio(){
	for(var i=0;i<document.Canciones.Espejos.length;i++){
		if(document.Canciones.Espejos[i].checked){
         
	 var path = document.Canciones.Espejos[i].value;
    viejo_audio = document.getElementById("reproductor")
    audio_padre = viejo_audio.parentNode
    audio_padre.removeChild(viejo_audio)
    nuevo_audio = document.createElement("audio")
    nuevo_audio.setAttribute("id","reproductor")
    nuevo_audio.setAttribute("controls", "controls")
   // nuevo_audio.setAttribute("autoplay", "autoplay")
    source = document.createElement("source")
    source.setAttribute("src", path)
    source.setAttribute("type", "audio/mpeg")
    source.setAttribute("id", "reproductorSource")
    nuevo_audio.appendChild(source)
    nuevo_audio.setAttribute("autoplay", "true")  
    audio_padre.appendChild(nuevo_audio)}
    
	
	}
	
   }
   var s="no";
   var path = select.getAttribute("path");


 function cargarReproductor() {
   
    nuevo_audio = document.createElement("audio")
    nuevo_audio.setAttribute("id","reproductor")
    nuevo_audio.setAttribute("controls", "controls")       
    source = document.createElement("source")
    source.setAttribute("src", path)
    source.setAttribute("type", "audio/mpeg")
    source.setAttribute("id", "reproductorSource")
    nuevo_audio.appendChild(source)
    padre = document.getElementById("reproductorBox")
    padre.appendChild(nuevo_audio)
 }

 if(document.Canciones.Espejos[i].checked){
   alert (document.Canciones.Espejos[i].value)
 }




