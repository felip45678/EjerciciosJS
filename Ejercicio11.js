var aleatorio=parseInt(Math.random()*10+1);
function verificar(){
    var num=parseInt(document.getElementById("num").value)
    if(aleatorio==num){
        document.getElementById("escribir").innerHTML="Has acertado";
    }else{
         document.getElementById("escribir").innerHTML="NO Has acertado";
    }

}