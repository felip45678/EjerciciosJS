function tablam(){
    var numero=parseInt(document.getElementById("numeo").value);
    for (let index = 1; index <=10; index++) {
        document.getElementById("parrafo").innerHTML+=numero+"x"+index+"="+numero*index+"<br>";
        console.log(numero+"x"+index+"="+numero*index)
    }
}