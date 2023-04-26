const colors = ["Rojo", "Verde", "Azul", "Amarillo"]
console.log(colors)

console.log(colors [2])
console.log(colors.length)

const nums = [1,3,5,7,9,0]
const doble = []
for (let i = 0; i< nums.length; i++){
      doble.push(nums[i]*2)
}
console.log(nums)
console.log(doble)

const numbers = [5,3,4,7,2,1,9,7,7]
let suma = 0
for (let i= 0; i<numbers.length; i++){
    suma +=numbers[i];
}
promedio = suma/numbers.length;
console.log(promedio)

//Objetos
const persona = {
    nombre: "Rosario",
    apellido: "Tijeras",
    edad: 22,
    estatura: 1.63
}
console.log(persona.nombre)
persona.name = "Marianita"
console.log(persona.nombre)

// Spread Operator (...)
const color = ["negro", "blanco", "naranja"]
const color2 = [...color]
console.log(color2) 

const unoAlTres = [1,2,3]
const cuatroAlSeis = [4,5,6]
const unoAlSeis = [...unoAlTres, ...cuatroAlSeis]
console.log(unoAlSeis)

const saludos = {
    english: "hi",
    french: "bonjour"
}
const saludos2 = {
    russian: "privet",
    japanese: "kon'nichiwa"
}
const saludos3 = {...saludos, ...saludos2}
console.log(saludos3)