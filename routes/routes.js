const controller = require('../controllers/stockController.js')

const routes = function(app){
	// test routes
	app.get('/api/allUsers', controller.allUsers)
	// create user
	app.post('/api/newUser', controller.newUser)
	// find user data
	app.get('/api/user/:email', controller.findUser)
	// get portfolio
	app.get('/api/user/:id/portfolio', controller.getPortfolio)
	// get history
	app.get('/api/user/:id/history', controller.getHistory)
	// buy and sell stock
	app.post('/api/user/trade', controller.stockTrade)
	// update user's profile
	app.post('/api/user/:id/update', controller.updateUser)
	// get global contest users
	app.get('/api/competitions/globalUsers', controller.getGlobalCompetitors)
}

module.exports = routes