const express = require("express")
const logger = require("morgan")
const app = express()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const path = require('path')
// const routes = require('./routes/routes.js');

const controller = require('./controllers/stockController.js')

const PORT = process.env.PORT || 3001

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/BearsAndBulls"
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI)

app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static("client/build"))

require("./routes/routes.js")(app);

// app.get('*', function(req,res) {res.sendFile(path.resolve(__dirname,'../client/build/index.html'))})

const server = app.listen(PORT, () => {
	console.log("App listening on PORT: " + PORT)
})
