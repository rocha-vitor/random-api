const express = require('express')
const path = require('path')

const server = express()

server.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, '/index.html'))
})

server.listen('3030', () => {
  console.log('--> server started!');
})
