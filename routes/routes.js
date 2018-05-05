const controller = require('../controllers/stockController.js')

const routes = function(app){
	// test routes
	app.get('/api/allUsers', controller.allUsers)
	// create user
	app.post('/api/newUser', controller.newUser)
	// find user data
	app.get('/api/user/:email', controller.findUser)
	// get portfolio
	app.get('/api/user/:email/portfolio', controller.getPortfolio)
	// get history
	app.get('/api/user/:email/history', controller.getHistory)
	// buy and sell stock
	app.post('/api/user/:email/trade', controller.stockTrade)
	// update user's profile
	app.post('/api/user/:email/update', controller.updateUser)
}

module.exports = routes