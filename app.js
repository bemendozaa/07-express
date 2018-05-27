const http = require('http');


http.createServer( (req,res)=>{

    res.writeHead(200,{'Content-type':'application/json'});

    let salida={
        nombre: "brayan",
        edad:"12",
        url:req.url
    };
    res.write(JSON.stringify(salida));
    res.end();

})
.listen(8080);


console.log("Escuchando en el port 8080");