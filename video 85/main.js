// video 85-87
//  const { createServer } = require('node:http');
// const fs =require('fs')

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


// video 87-
const express = require('express')
const blog =require('./routes/blog.js')
const app = express()
const port = 3000

app.use(express.static('public')) // allow a folder to see the user
app.use('/blog',blog)

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/blog/:slug/:second', (req, res) => {
  // http://192.168.1.8:3000/blog/a/b?mode=dark&region=in
  console.log(req.params)
  console.log(req.query)
  res.send(`hello ${req.params.slug} and and ${req.params.second}`)
})


app.post('/', (req, res) => {
  console.log("its post request");
  
  res.send(`hello `)
})

app.get('/index', (req, res) => {
  res.sendFile('templates/index.html',{root:__dirname})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})