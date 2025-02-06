import http from 'http' ;

const hostmane = '127.0.0.1' ;
const port = 3000;


const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola Mundo\n');
});


server.listen(port, hostmane, () => { 
    console.log(`Servidor corriendo`);
});