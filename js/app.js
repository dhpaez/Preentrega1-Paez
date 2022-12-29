// compra de helados

let precio;

do{

    let index = 2;
    
for (index = 2; index >= 0; index--) {
    let helado = prompt('elija la opcion del helado 1-1/4kg vale $900\n 2-1/2kg vale $1600\n 3-1kg vale $2600');    
    
if (helado == 1) {
    precio=900
    index=0;
    alert('Eligio 1/4 debe pagar $ '+precio);
    
} else if(helado == 2) {
    precio=1600
    alert('Eligio 1/2 Kg debe pagar $ '+precio)
    index=0;
} else if (helado == 3) {
    precio=2600
    alert('Eligio 1 Kg debe pagar $ '+precio) 
    index=0;   
} else{
    alert('No ha seleccionado la opcion correcta puede intentar '+ index +' veces mas');
    
    }
}

let pago = (valor, valor1) => {

switch (valor) {
    
    case "1" :
        alert('pagara el precio final de $ '+valor1+' pagara');
        break;
    case "2" :
        alert('pagara el precio $ '+valor1+ ' con un 5% de recargo');
        break;
    default:
        alert('No ha seleccionado una opcion correcta');
        break;
    }
}
let formaPago = prompt('como pagara elija: 1-efectivo\n 2-tarjeta');
pago(formaPago, precio);


} while (confirm('Quiere elegir uno mas?'));


