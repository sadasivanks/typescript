// import { request, response } from 'express';
import http from 'http';
http.createServer((request,response)=>{
    response.end('helloooooooo');
}).listen(3000,()=>console.log('started'))