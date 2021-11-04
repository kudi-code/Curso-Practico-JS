//Código del cuadrado
console.group("Cuadrados")
function perimetroc(cuad)
{ 
    return cuad*4 + " cm"
}
function areacuad(cuad)
{ 
    return cuad*cuad + " cm^2"
}
console.groupEnd()
//Código del triángulo
//*Identar: darle espacio a las líneas de código*/

console.group("Triangulos")
function perimetrot(ladot1,ladot2,baset) //h = (baset/2 ^2 * lado^2)^2
{
    return ladot1 + ladot2 + baset + " cm"
}
function areat(baset,h)
{
    return (baset * h) / 2 + " cm^2"
}

console.groupEnd()

console.group("Circulos")
//Radio
// const radioci = 15
// console.log("El radio del círculo es: "+ radioci)
// const diametroci = radioci *2
// console.log("El diámetro del círculo es: "+ diametroci)
// const perimetroci = radiosci * 2 * Math.PI
// console.log("El perímetro del círculo es: "+ perimetroci)
// const areaci = radioci * radioci * Math.PI
// console.log("El área del círculo es: "+ areaci)

function perimetroci(radioci)
{
    return radioci*2*Math.PI + " cm"
}
function areaci(radioci)
{
    return radioci*radioci*Math.PI + " cm^2"
}

console.groupEnd()

//Interactuar con el HTML
function calcularPerimetroCuad(){
    const input = document.getElementById("ladoc") //Jala todo el input
    const value = input.value //Jala el contenido del input
    const perimetro = perimetroc(value)
    alert("El resultado es: " + perimetro)
}
function calcularAreaCuad()
{
    const input = document.getElementById("ladoc") //Jala todo el input
    const value = input.value //Jala el contenido del input
    const area = areacuad(value)
    alert("El resultado es: " + area)
}