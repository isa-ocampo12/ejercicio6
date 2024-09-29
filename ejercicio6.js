listaProductos = []
agregarProductos = true
total = 0
let programa = prompt('Ingrese a que programa pertenece: fidelidad=f o ninguno=n: ').toLowerCase
while (agregarProductos) {

    var producto =
    {
        valor: 0,
        nombre: ''
    }

    let nombreProducto = prompt('Ingrese NOMBRE del producto: ')
    let valor = Number(prompt('Ingrese VALOR del producto: '))
    

    producto.nombre = nombreProducto
    producto.valor = valor

    total += valor

    listaProductos.push(producto)

    let opcion = prompt('Desea ingresar otro producto? SI=1 NO=2')
    if(opcion == '1'){
        agregarProductos = true
    }
    else{
        agregarProductos = false
    }
}
let descuento = 0
let iva = 0
let sinDescuento = 0

if(programa == 'f'){
    descuento = total * 0.10
    totalConDescuento = total - descuento
    console.log('El total de su compra con un descuento del 10% es de: ' + totalConDescuento);  
}
if(programa == 'n'){
    if(total < 300.000)
        console.log('El total de su compra sin aplicar descuento e iva es: '+ total)

}
if(total > 300.000){
    iva = total * 0.19
    totalConIva = total + iva
    console.log('El total de su compra incluyendo el 19% del iva es: '+ totalConIva)
}

