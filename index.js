const http = require('http')
const style = require('ansi-styles')

const server = http.createServer((request, response) => {
  response.write('hello world');
  response.end();
})

// console.log(`${style.bgCyan.open}Hello world!${style.green.close}`);