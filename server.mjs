import { createServer } from 'http';
console.log(process.env.PORT)
createServer((req, res) => {
  res.write('Hello World!');
  res.end();
}).listen(process.env.PORT, () => {console.log("yai!")});
