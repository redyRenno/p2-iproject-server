const express = require('express')
const app = express()

const port = 3000

app.get('/', (request, response) => {
  response.send('hallo')
})

server.listen(port, () => {
  console.log('Listening on port :', port);
})