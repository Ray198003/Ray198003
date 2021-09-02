$(document).ready(function(){ //s'esoera a que el document html estigui carregat
  var persones =["joan", "maria", "pepe", "miquel", "oriol", "julia", "anna"]; //arrray
  for(n=0; n<persones.length; n++){ //recorrem l'array
    $("div").append("<p>"+persones[n]+"</p>"); //escrivim en el div la persona del array
  }
});
