var aleatorio=parseInt(Math.random()*10+1);
var numIntentos=3;
var ok=false;
console.log(aleatorio);
function verificar(){
   var num= parseInt(document.getElementById("num").value);
    if(numIntentos>0 && ok==false){
         numIntentos--;
        if (aleatorio==num) {
            document.getElementById("demo").innerHTML="Has acertado!!";  
            ok=true;   
        }
        else{
            document.getElementById("demo").innerHTML="Has fallado, intentalo otra vez";   
            document.getElementById("demo").innerHTML+="<br> Te quedan "+numIntentos+" intentos";
            if(aleatorio>num){
                document.getElementById("demo").innerHTML+="<br> El número que buscas es mayor";
            }  
            else{
                document.getElementById("demo").innerHTML+="<br> El número que buscas es menor";

            }
            ok=false;  
        }
    }else if(numIntentos==0){
        document.getElementById("demo").innerHTML="Insert coin. No tienes más intentos";  
    }else if(ok==true){
        document.getElementById("demo").innerHTML="Ceporrin, ya has ganado,:)";  
    }
}