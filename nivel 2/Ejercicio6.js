var num1=parseInt(prompt("Introduce el primer numero: "));
var num2=parseInt(prompt("Introduce el segundo numero: "));
var op =prompt("Introduce una operacion(+,*,-,/)");
switch(op){
    case '+': console.log("La suma de los numeros es "+(num1+num2));break;
    case '-': console.log("La resta de los numeros es "+(num1-num2));break;
     case '*': console.log("La multiplicacion de los numeros es "+(num1*num2));break;
      case '/': console.log("La division de los numeros es "+(num1/num2));break;
}