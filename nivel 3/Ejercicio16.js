function cont(){
   var abecedario = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var result="";
for (let index = 0; index < 4; index++) {
    var aleatorioab=Math.floor(Math.random()*abecedario.length);
    result+=abecedario[aleatorioab];
    
}
for (let index = 0; index < 4; index++) {
    var aleat=Math.floor(Math.random()*9);
    result+=aleat;
    
}
document.getElementById("demo").innerHTML="su contraseña es: "+result;
}