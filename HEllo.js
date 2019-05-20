const express = require('express')
const app = express()
const port = 3000
var bodyParser  = require("body-parser")
app.use(bodyParser.urlencoded({extended: false}))

// app.get('/Hello', function (req,res){res.send('Hello World!')})
// app.get('/Hhello', function (req,res){res.send('Hhello World!'+req.query.name)})
app.post('/Hhello', function (req,res){
    res.send('Đăng ký thành công với tài khoản là ' + req.body.Username +' kèm theo tên đầy đủ là ' + req.body.Fullname )})

app.listen(port, function(){
    console.log(`Example app listening on port ${port}!`)
})
