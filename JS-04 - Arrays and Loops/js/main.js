console.log("Ejercicio 1");
//Parte 1

let fila=["Sofía", "David", "Juan"];
console.log(fila);

//Parte 2
fila.shift();
console.log(fila);
fila.push("Sara", "Agustin");
console.log(fila);

//Parte 3 
fila.splice(1, 0, 'Renata');
console.log(fila);
fila.push("Elena");
console.log(fila);

console.log("Ejercicio 2");

for (let a=1; a<=5; a++){
    let patron="";
    for(let b=1; b<=a; b++){
        patron +="*";
    }
    console.log(patron);
}//for cont

console.log("Ejercicio 3");

let xValue =("");
while (xValue>0) {
    console.log(xValue); 
    xValue -= 0.5;
}
