const express = require('express')
const app = express()
const port = 3002

// how to transfer variable to new html files

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let arr=["raju","bheem","dholu","bholu"]
    res.render('index', {var1: 'hello',var2:'world',arr});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})