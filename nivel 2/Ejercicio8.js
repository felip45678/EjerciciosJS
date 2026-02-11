function edad(){
    var edad=parseInt(document.getElementById("nn").value);

    if(edad<18){
        document.getElementById("demo").innerHTML="acceso denegado";
    }
    if(edad>=18 || edad<=65){
        document.getElementById("demo").innerHTML="acceso permitido";
    }
    if(edad>65){
        document.getElementById("demo").innerHTML="acceso VIP";
    }
}