const http = require('http')
const style = require('ansi-styles')

const server = http.createServer((request, response) => {
  response.write('hello world');
  response.end('...');
})

server.listen(3000, 'localhost', () => {
  console.log('Server has started on localhost:3000')
})

