const db = require('../models')

module.exports = {
	// testing only
	allUsers: (req, res) => {
		db.Users.find({})
		.populate('ledger')
		.then(data => {
			res.json(data)
		}).catch(err => {
			console.log(err)
		})
		.catch(err => { console.log(err)})
	},
	// create new user
	newUser: (req, res) => {
		db.Users.create(req.body)
		.then(data => {
			res.json(data)
		}).catch(err => {
			console.log(err)
		})
		.catch(err => { console.log(err)})
	},
	// find one user
	findUser: (req, res) => {
		db.Users.findOne({email:req.params.email})
		.then(data => {
			if(data){
			return res.json(data)
			}
			return res.status(400).send({
				message: "User not found"
			})
		}).catch(err => {
			console.log(err)
		})
	},
	updateUser: (req, res) => {
		db.Users.findOneAndUpdate({_id:req.params.id}, req.body)
				.then(result => res.json(result))
				.catch(err => console.log(err))
	},
	// get portfolio
	getPortfolio: (req, res) => {
		console.log(req.params.id)
			db.Ledger.find({owned_by: req.params.id})
			.then(ledger => {
				const consolidated = ledger.reduce((accum, stock) => {
					const { symbol } = stock;

					if (accum[symbol]) {
						accum[symbol] = Object.assign(
						accum[symbol],
							{
								stock_count: accum[symbol].stock_count + stock.stock_count,
								total: accum[symbol].total + (stock.purchase_price * stock.stock_count)
							},{})
						return accum;
					}

					accum[symbol] = Object.assign(
						stock,
							{
							  total: stock.stock_count * stock.purchase_price
							}, {})
						return accum;
				}, {})

				const averages = Object.keys(consolidated).map((key) => {
					const stock = consolidated[key];

					return Object.assign(
						stock,
							{
							  purchase_price: (stock.total / stock.stock_count).toFixed(2)
							},{})
				})
				res.json(averages)
		}).catch(err => { console.log(err)})
	},
	// get trade history
	getHistory: (req, res) => {
		db.Ledger.find({owned_by:req.params.id})
		.then(data => {
			res.json(data)
		}).catch(err => {
			console.log(err)
		})
		.catch(err => { console.log(err)})
	},
	// buy and sell stock
	stockTrade: (req, res) => {
		db.Ledger.create(req.body)
		.then(data => res.json(data.data))
		.catch(err => res.json(err))
	}
}
