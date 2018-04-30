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
		db.Users.findOne({_id:req.params.id})
		.then(data => {
			res.json(data)
		})
	},
	// get portfolio
	getPortfolio: (req, res) => {
		db.Users.findOne({_id:req.params.id})
		.populate('ledger')
		.then(data => {
			Array.prototype.sortBySymbol = function(){
				return this.reduce((groups,item) => {
				groups[item.symbol] = groups[item.symbol] || [];
				groups[item.symbol].push(item);
				return groups
			}, {});
			}

			let stocks = data.ledger.sortBySymbol();
			let portfolioData = [];

			for(key in stocks){
				let count = 0;
				stocks[key].map((record)=>{
					count = count + record.stock_count
					return count
				});

				if (count !== 0) {
					portfolioData.push({
						symbol: key,
						count: count
					});
				}
			}
			res.json(portfolioData);
		})
	},
	// get trade history
	getHistory: (req, res) => {
		db.Users.findOne({_id:req.params.id})
		.populate('ledger')
		.then(data => {
			res.json(data.ledger)
		})
	},
	// buy and sell stock
	stockTrade: (req, res) => {
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