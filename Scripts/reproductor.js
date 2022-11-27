

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
  
  function validarRadio2(){
    for(var i=0;i<document.Canciones2.Fiesta.length;i++){
      if(document.Canciones2.Fiesta[i].checked){
           
     var path = document.Canciones2.Fiesta[i].value;
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

    function validarRadio3(){
      for(var i=0;i<document.Canciones3.Simples.length;i++){
        if(document.Canciones3.Simples[i].checked){
             
       var path = document.Canciones3.Simples[i].value;
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


 



