//Código del cuadrado
console.group("Cuadrados")
const cuad = 5;
console.log("Los lado del cuadrado miden: " + cuad + "cm")
const perimetroc = cuad*4;
console.log("El perímetro de esta vaina es: " + perimetroc + "cm")
const areacuad = cuad*cuad;
console.log("El área de esta vaina es: " + areacuad + "cm")
console.groupEnd()
//Código del triángulo
//*Identar: darle espacio a las líneas de código*/

console.group("Triangulos")
const ladot1 = 6;
const ladot2 = 6;
const baset = 8;
const h = 5.5; //h = (baset/2 ^2 * lado^2)^2

console.log("Los lados del triángulo son Lado 1: "+ ladot1 + " Lado 2: " + ladot2 + " base: " + baset + " altura: " +h)
const perimetrot = ladot1 + ladot2 + baset
console.log("El perímetro del triángulo es: "+ perimetrot)
const areat = (baset * h) / 2
console.log("El área del triángulo es: "+ areat)

console.groupEnd()

console.group("Circulos")
//Radio
const radioci = 15
console.log("El radio del círculo es: "+ radioci)
const diametroci = radioci *2
console.log("El diámetro del círculo es: "+ diametroci)
const perimetroci = radioci * 2 * Math.PI
console.log("El perímetro del círculo es: "+ perimetroci)

console.groupEnd()
