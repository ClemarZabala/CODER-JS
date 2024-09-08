
let nombre = prompt('Por favor ingrese su nombre y apellido');

if (nombre == "" || nombre == null) {
    alert("No ingresaste nombre de usuario, vuelve a cargar la pagina si deseas continuar");
} else {
    alert('Bienvenida/o ' + nombre + '. En esta pagina te ensenaremos a agregar productos a tu carro de compras y finalizar la misma');
}

// Informo los precios de los productos
    let productos = ['\n 1) fundas $8000',  '\n 2) cargadores $15000' , '\n 3) vidrios templados $7500'];
    let precioproducto1 = 8000;
    let precioproducto2 = 15000;
    let precioproducto3 = 7500;

    let totalCompra = 0; // el precio es 0 antes de comenzar la compra
    let continuar= true; //indico que si continuar es true se van a sumar los precios de los productos



    while(continuar){
    let eleccionproducto = prompt('Elige un número para agregar a nuestro carro:' + productos);
    if (eleccionproducto == "" || eleccionproducto == null) {
        alert("No podemos continuar");
    } else {
        if (eleccionproducto == '1') {
            console.log('El usuario ' + nombre +' eligio el producto 1 que cuesta $' + precioproducto1)
            totalCompra += precioproducto1;
            
            
        }else if (eleccionproducto == '2') {
            console.log('El usuario ' + nombre +' eligio el producto 2 que cuesta $' + precioproducto2);
            totalCompra += precioproducto2;
        
           
        }else if (eleccionproducto == '3') {
            console.log('El usuario ' + nombre +' eligio el producto 3 que cuesta $' + precioproducto3);
            totalCompra += precioproducto3;
            
    
        } else {
            alert('No tenemos el producto seleccionado');
        }
    }

        //Mientras el confirm tenga un numero valido se va a poder ir agregando nuevos productos
    continuar=confirm('Quiere elegir mas productos?');
    if(!continuar){
        break;
    }
}


        

console.log('La compra total de ' + nombre + ' es $' + totalCompra);
alert('Gracias por tu compra, ' + nombre + '. El total de tu compra es $' + totalCompra);


let contactar;
    while (true) {
        contactar = prompt('Por favor ingrese su número de celular para poder contactarlo y finalizar la compra');
        console.log('El nunero de ceular de ' + nombre + ' es '+ contactar) //Aca quedara en el console.log guardado el numero de ceular para contactarlo

        if (contactar == "" || contactar == null) {
            alert('Su número no fue agregado. Por favor ingrese un número válido.');
        } else {
            alert(nombre + ", en unos instantes el vendedor se contactará con usted para finalizar la compra.");
            break;}
        }



















