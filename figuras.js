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
//  Triángulo
function calcularPerimetroT()
{
    const input1 = document.getElementById("ladot1") //Jala todo el input
    const value1 = parseInt(input1.value) //Jala el contenido del input
    const input2 = document.getElementById("ladot2") //Jala todo el input
    const value2 = parseInt(input2.value) //Jala el contenido del input
    const base = document.getElementById("base") //Jala todo el input
    const valueb = parseInt(base.value)  //Jala el contenido del input
    const perimetro = value1 + value2 + valueb
    if(value1!=value2)
    {        
        alert("weon ctm, ese triángulo no es isósceles, pero su perimetro es: " + perimetro)
    }
    else{
        alert("El resultado es: " + perimetro)
    }
}
function calcularAreaT()
{
    const input1 = document.getElementById("ladot1") //Jala todo el input
    const value1 = parseInt(input1.value) //Jala el contenido del input
    const input2 = document.getElementById("ladot2") //Jala todo el input
    const value2 = parseInt(input2.value) //Jala el contenido del input
    const base = document.getElementById("base") //Jala todo el input
    const valueb = parseInt(base.value)  //Jala el contenido del input
    const area = value1 + value2 + valueb
    if(value1!=value2)
    {
        alert("weon ctm, ese triángulo no es isósceles")
    }
    else{
        
        const h = Math.sqrt((Math.pow(value1,2) - Math.pow(valueb/2,2)))     
        alert("La altura es: "+h)   
        const area = areat(valueb,h)
        alert("El resultado es: " + area)
    }
}