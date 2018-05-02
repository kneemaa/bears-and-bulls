const controller = require('../controllers/stockController.js')

const routes = function(app){
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
}

module.exports = routes