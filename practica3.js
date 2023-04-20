//Operador terniario
const velocidad = 120;
let mensaje;
if (velocidad >100) {
    mensaje = 'Vas muy rapido';
} else {
 mensaje = 'Vas a buen ritmo';   
}
console.log(mensaje);

const Velocidad =120;
const Mensaje = velocidad > 100 ? 'Vas muy rapido' : 'Vas a buen ritmo';
console.log(Mensaje);

//Ciclo for
for (let i = 0; i<10; i++){
    if(i==5) continue
    console.log(i);
}

//ciclo while
let i = 0;
while (i < 10){
    console.log(i);
    i++;
}

//Números pares
for(i=0; i<=100; i++){
    if(i%2==0){
        console.log(i);
    }
}

//Números primos
for(i=2; i<100; i++){
    let primo= true;
    for(let j=2; j<i; j++){
        if(i%j==0){
            primo= false;
        }
    }
    if(primo){
        console.log(i);
    }
}
