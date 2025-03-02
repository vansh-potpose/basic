const express = require('express')
const app = express()
const Employee = require("./models/Empoyee")
const mongoose = require('mongoose');
const port = 3000

mongoose.connect('mongodb://127.0.0.1:27017/company');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { foo: 'FOO' });

})

const getRandom=(arr)=>{
    let rno=Math.floor(Math.random()*(arr.length-1))
    return arr[rno]
}

app.get('/generate', async (req, res) => {
    await Employee.deleteMany({})
    let names=["pandu","chaman chapry","jr pandu","dolly chaiwala"]
    let languages=["pyhton","c++","java","js"]
    let cities=["nagpur","kanpur","jaipur","loahagadh"]
    for (let i = 0; i < 10; i++) {
        let e = await Employee.create({
            name: getRandom(names),
            salary: Math.floor(Math.random()*10000),
            language: getRandom(languages),
            city: getRandom(cities),    
            isManager: Math.random()>0.5?false:true
        })
        e.save()
    }

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})