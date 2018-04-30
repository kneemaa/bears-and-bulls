const express = require("express")
const logger = require("morgan")
const app = express()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const path = require('path')

const controller = require('./controllers/stockController.js')

const PORT = process.env.PORT || 3001

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/BearsAndBulls"
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI)

app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static("client/build"))

// test routes
app.get('/api/allUsers', controller.allUsers)
// create user
app.post('/api/newUser', controller.newUser)
// find user data
app.get('/api/user/:id', controller.findUser)
// get portfolio
app.get('/api/user/:id/portfolio', controller.getPortfolio)
// get history
app.get('/api/user/:id/history', controller.getHistory)
// buy and sell stock
app.post('/api/user/:id/trade', controller.stockTrade)

app.use(routes)
app.get('*', function(req,res) {res.sendFile(path.resolve(__dirname,'../client/build/index.html'))})

const server = app.listen(PORT, () => {
	console.log("App listening on PORT: " + PORT)
})