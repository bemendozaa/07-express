const express = require('express');
const app = express();

//parciales
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000; //este objeto localmente no existe por eso le asigno el puerto 3000


//vamos a crear un middleware 
app.use(express.static(__dirname+'/public'));//todo lo que haya en esa carpeta va a ser de 
//contenido publico y puedes acceder asi no haya ruta declarada


hbs.registerPartials(__dirname + '/views/partials');
//express hbs engine
app.set('view engine', 'hbs'); //para usar handlebars




app.get('/',  (req, res) => {
   
    res.render('home',{
        nombre:'Brayan',
        //anio: new Date().getFullYear(), lo remplaza el helper
    });
});


app.get('/about',  (req, res) => {
   
    res.render('about',{ 
        // anio: new Date().getFullYear()
    });
});


// app.get('/data',  (req, res) => {
   
//     res.send('salida de data');
// });
 
app.listen(port, () => {
    console.log("Escuchando peticiones en el puerto:"+port);
})