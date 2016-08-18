var express = require('express')
var bodyParser = require('body-parser')

var PORT = 3000

var app = express()

let index = require("./routes/index")

app.use(bodyParser.json())
app.get("/", index.get)


app.listen(PORT, function () {
  console.log('Listening on port: ' + PORT)
})
