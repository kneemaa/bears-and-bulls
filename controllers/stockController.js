const db = require('../models')

module.exports = {
	// testing only
	allUsers: (req, res) => {
		db.Users.find({})
		.populate('ledger')
		.then(data => {
			res.json(data)
		})
	},
	// create new user
	newUser: (req, res) => {
		db.Users.create(req.body)
		.then(data => {
			res.json(data)
		})
	},
	// find one user
	findUser: (req, res) => {
		db.Users.find({_id:req.params.id})
		.populate('ledger')
		.then(data => {
			res.json(data)
		})
	},
	// buy stock
	buyStock: (req, res) => {
		db.Ledger.create(req.body)
		.then(stock => {
			db.Users.update(
				{ _id: req.params.id},
				{ $push: { ledger: stock._id }},
				{ new: true })
				.then(() => {
					res.end()
				})
		})
	}
}