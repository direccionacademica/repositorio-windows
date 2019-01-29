
var miArray=new Array();
var boton=document.querySelector("button");

    // bucle del 1 al 5
    for(var i=1;i<=4;i++)
    {
        var name = prompt("Introduce un nombre");
        miArray.push(name);
    }
    document.write(miArray);
var numero_participantes=miArray.length;
numero=Math.floor(Math.random()*numero_participantes);
console.log(miArray[numero]);
alert(miArray[numero]);