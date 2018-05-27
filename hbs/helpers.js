
const hbs = require('hbs');


//un helper es una funcion que se dispara cuando el template lo requiere
hbs.registerHelper('getAnio', ()=>{
    return new Date().getFullYear();
});
//lo ultimo que busca es los helpers a ver si hay dato o funcion para mostrar en el html

hbs.registerHelper('capitalizar', (texto)=>{
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
         palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});