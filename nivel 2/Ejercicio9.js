function week(){
var dias=parseInt(document.getElementById("semana").value);
switch(dias){
    case 1:document.getElementById("pr").innerHTML="LUNES";break;
    case 2:document.getElementById("pr").innerHTML="MARTES";break;
    case 3:document.getElementById("pr").innerHTML="MIERCOLES";break;
    case 4:document.getElementById("pr").innerHTML="JUEVES";break;
    case 5:document.getElementById("pr").innerHTML="VIERNES";break;
    case 6:document.getElementById("pr").innerHTML="SABADO";break;
    case 7:document.getElementById("pr").innerHTML="DOMINGO";break;
default:document.getElementById("pr").innerHTML="NO HAS INTRODUCIDO LOS VALORES CORRECTOS"
    
}
}