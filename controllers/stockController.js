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
			res.json(data)
		}).catch(err => {
			console.log(err)
		})
		.catch(err => { console.log(err)})
	},
	updateUser: (req, res) => {
		console.log(req.body)
		db.Users.findOneAndUpdate({email:req.params.email}, req.body)
				.then(result => res.json(result))
				.catch(err => console.log(err))
	},
	// get portfolio
	getPortfolio: (req, res) => {
		db.Users.findOne({email:req.params.email})
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
				let total = 0;

				stocks[key].map((record)=>{
					count = count + record.stock_count;
					total = total + record.stock_count*record.purchase_price;

				if (count !== 0) {
					let avg_price = (total/count).toFixed(2);
					portfolioData.push({
						symbol: key,
						count: count,
						purchase_price: avg_price
					});
				}
			});
			res.json(portfolioData);
		}
	})
	.catch(err => { console.log(err)})
	},
	// get trade history
	getHistory: (req, res) => {
		db.Users.findOne({_id:req.params.id})
		.populate('ledger')
		.then(data => {
			res.json(data.ledger)
		}).catch(err => {
			console.log(err)
		})
		.catch(err => { console.log(err)})
	},
	// buy and sell stock
	stockTrade: (req, res) => {
		db.Ledger.create(req.body)
		.then(success => res.json(success))
		.catch(err => res.json(err))
	}
}
