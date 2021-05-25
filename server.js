// Primary file for the API


// Dependencies

const http = require('http');
const url = require('url')

// Ther server should respond to all requests with a string
const server = http.createServer((req, res) => {

  // Get the url and parse it 
  const parsedUrl = url.parse(req.url, true)
  // console.log(parsedUrl)

  // Get the path
  const path = parsedUrl.pathname
  const trimmedPath = path.replace(/^\/+|\/+$/g, '')

  // Send the response
  res.end("hello world\n")

  // Log the request path
  console.log("Req received on this path : ", trimmedPath)

})


server.listen(3000, () => {
  console.log(`The server is running at 3000`)
})