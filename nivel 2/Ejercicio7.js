function parOImpar(){
    var numerito=parseInt(document.getElementById("parOImpar"));
if(numerito%2==0){
    document.getElementById("demo").innerHTML=numerito+" es un numero par";
}else{
    document.getElementById("demo").innerHTML=numerito+" es un numero impar"
}
}