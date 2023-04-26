import { createServer } from 'http';
import {romanToInt} from './app.mjs';
console.log(process.env.PORT)
const mensajeBienvenida = `
Bienvenido a la API para calcular el valor de un numero romano
Para calcular el valor de un numero romano, escribe / en la URL seguido del numero romano ` 
createServer((req, res) => {
  if (req.url=="/"){
    res.write(mensajeBienvenida)
  }
  else{
    res.write("Tu numero romano es: " + String(romanToInt((req.url).split("/").join(""))))
}
  res.end();
  
}).listen(process.env.PORT, () => {console.log("yai!")});


