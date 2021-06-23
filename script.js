//1
// for (i=0;i<=10;i++){
//     console.log(i);
// }

//2
// let suma= 0;
// let ingreso= "";

// for(i=0;i<5;i++){
//     ingreso= parseInt(prompt("ingrese un numero"));
//     suma= suma + ingreso;
// }
// console.log ("la suma de los numero ingresados es de: " + suma);

//3
// let nums= parseInt(prompt("cuantos numeros desea ingresar?"));
// let cont= 0;
// let ppt= "";


// for(i=0;i<nums;i++){
//     ppt= parseInt(prompt("ingrese los numeros"));
//     cont= cont + ppt;
// }
// console.log (cont);

//4
// num= "";
// let suma= 0;

// i=0;
// while(num!==0){ 
//     num= parseInt(prompt("ingrese los numeros que desee. Presione x cuando no desee ingresar mas numeros."));
//     suma= suma + num;
//     console.log(suma);
//     i++
// }

//5
// num= "";
// let suma= 0;
// let contador= 0;

// i=0;
// while(num!==0){ 
//     num= parseInt(prompt("ingrese los numeros que desee. Presione x cuando no desee ingresar mas numeros."));
//     suma= suma + num;
//     console.log(suma);
//     i++
// } 
// console.log (suma/(i-1));

//6
// let num= parseInt(prompt("ingrese un numero"));

// for(i=1;i<=num;i++){
//     console.log(i);
// }

//7
// let num1= parseInt(prompt("ingrese el primer numero"));
// let num2= parseInt(prompt("ingrese el segundo numero"));
// let cont= 0;
// let init= "";

// if(num1<num2){
//     i=0
//     init= num1+1;
//     for(i=init;i<num2;i++){
//         cont= cont + num1;
//         console.log(i);
//     }
// }else if(num1>num2){
//     i=0
//     init= num2+1;
//     for(i=init;i<num1;i++){
//         cont= cont + num2;
//         console.log(i);
//     }
// }

//8
// let cest= parseInt(prompt("cuantos numeros desea ingresar?"));
// let ingr= "";
// let max= "";

// i=0;
// for(i=0;i<cest;i++){
//     ingr= parseInt(prompt("ingrese numero"));
// }

//9

//10
// let num= parseInt(prompt("ingrese un numero"));
// let ast= "";

// for (let i=0;i<num;i++) {
//     ast= ast.concat('*');    
// }console.log(ast);

//11
// let base= parseInt(prompt("ingrese el numero base"));
// let ex= parseInt(prompt("ingrese el exponente"));
// let total="";

// total= base**ex;
// console.log("la potencia es " + total);

//12
// let num= parseInt(prompt("ingrese un numero"));
// let cont= 1;

// for(i=1;i<=num;i++){
//     cont= cont * i;
// }
// console.log("el total es de: " + cont);

//13
// let num= parseInt(prompt("ingrese un numero"));
// let cont= "";

// for(i=0;i<=num;i++){
//     cont= num% i === 0
//     if(cont == true){
//         console.log(i);
//     }
// }

//14
// let cad= prompt("ingrese un texto");
// let num= parseInt(prompt("ingrese un numero"));

// for(i=0;i<=num;i++){
//     if(i<num){
//         console.log(cad[i]);
//     }
// }

//15
let lista=prompt("ingrese la lista de compra producto por producto. Presione 0 al terminar.");
let cont="";

let i=0;
for(i=0;i!=="0";i++){
    if(lista!=="0"){
        let lista=prompt("ingrese la lista de compra producto por producto. Presione 0 al terminar.");
        console.log(lista + ",");
    }
}

//16
// let num= parseInt(prompt("ingrese los numeros que desee"));

// let i=0
// while(num%3 !== 0){
//     num= parseInt(prompt("ingrese los numeros que desee"));
//     console.log(num);
//     i++;
// }
