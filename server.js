// Primary file for the API


// Dependencies

const http = require('http');

// Ther server should respond to all requests with a string
const server = http.createServer((req, res) => {
  res.end('Hello world\n')
})


server.listen(3000, () => {
  console.log(`The server is running at 3000`)
})