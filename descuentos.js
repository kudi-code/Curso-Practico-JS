function descuento(precioOriginal,porcentajeDescuento)
{
    if(porcentajeDescuento>100||porcentajeDescuento<0)
    {
        return "Especifique un valor porcentual entre 0 y 100"
    }
    else{
        return precioOriginal*(1-(porcentajeDescuento/100))
    }
}

function priceDiscount()
{
    const input1 = document.getElementById("price")
    const price = parseInt(input1.value)
    const input2 = document.getElementById("discount")
    const discount = parseInt(input2.value)
    const priceDiscounted = descuento(price,discount)
    const paraph = document.getElementById("priceD")
    paraph.innerText = "El precio con descuento es: $" + priceDiscounted
}