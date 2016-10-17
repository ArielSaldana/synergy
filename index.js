var express = require('express')
var app = express()
var path = require("path");

app.use(express.static('/'));
app.use(express.static('src'));
app.use(express.static('dev'));
app.use(express.static('builds'));
app.use(express.static('clear-master'));

// app.use(function (req, res) {
//     console.log(res);
//     // console.log('test');
//     // res.next();
//     next();
// });


app.all('*', function (req, res, next) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //   next() // pass control to the next handler
})

// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname+'/index.html'));
// })

app.listen(3000);