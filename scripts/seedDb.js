const mongoose = require('mongoose')
const db = require('../models')
mongoose.Promise = global.Promise

mongoose.connect(
	process.env.MONGODB_URI || 'mongodb://localhost/BearsAndBulls'
)

const userSeed = [
	{
		_id: mongoose.Types.ObjectId("59316b89627c586bc2214667"),
		first_name: 'Devin',
		last_name: 'Thomas',
		email: 'dthomase30@gmail.com',
		account_balance: 10000,
		ledger: [
			{'_id': mongoose.Types.ObjectId("59316b89008c586bc2214313")},
			{'_id': mongoose.Types.ObjectId("59316b89008c586bc2214310")},
			{'_id': mongoose.Types.ObjectId("59316b89008c586bc2214304")},
			{'_id': mongoose.Types.ObjectId("59316b89008c586bc2214300")},
		]
	},
	{
		_id: mongoose.Types.ObjectId("59316b89627c586bc2214668"),
		first_name: 'Nema',
		last_name: 'Darban',
		email: 'nema.darban@gmail.com',
		account_balance: 10000,
		ledger: [
			{'_id': mongoose.Types.ObjectId("59316b89008c586bc2214305")},
			{'_id': mongoose.Types.ObjectId("59316b89008c586bc2214305")},
			{'_id': mongoose.Types.ObjectId("59316b89008c586bc2214311")},
			]
	},
	{
		_id: mongoose.Types.ObjectId("59316b89627c586bc2214669"),
		first_name: 'Daphne',
		last_name: 'Chen',
		email: 'daphne@gmail.com',
		account_balance: 10000,
		ledger: [
			{'_id': mongoose.Types.ObjectId("59316b89008c586bc2214302")},
			{'_id': mongoose.Types.ObjectId("59316b89008c586bc2214306")},
			{'_id': mongoose.Types.ObjectId("59316b89008c586bc2214309")},
			{'_id': mongoose.Types.ObjectId("59316b89008c586bc2214312")},
			{'_id': mongoose.Types.ObjectId("59316b89008c586bc2214314")},
		]
	},
	{
		_id: mongoose.Types.ObjectId("59316b89627c586bc2214666"),
		first_name: 'Jeremy',
		last_name: 'Gruhlkey',
		email: 'jeremygruhlkey@gmail.com',
		account_balance: 10000,
		ledger: [
			{'_id': mongoose.Types.ObjectId("59316b89008c586bc2214308")},
			{'_id': mongoose.Types.ObjectId("59316b89008c586bc2214307")},
			{'_id': mongoose.Types.ObjectId("59316b89008c586bc2214303")},
		]
	},
]

const ledgerSeed = [
	{
		_id: mongoose.Types.ObjectId("59316b89008c586bc2214300"),
		symbol: "TSLA",
		purchase_price: 50,
		stock_count: 5,
		is_owned: true,
	},
	{
		_id: mongoose.Types.ObjectId("59316b89008c586bc2214301"),
		symbol: "TSLA",
		purchase_price: 50,
		stock_count: 5,
		is_owned: true,
	},
	{
		_id: mongoose.Types.ObjectId("59316b89008c586bc2214302"),
		symbol: "TSLA",
		purchase_price: 50,
		stock_count: 5,
		is_owned: true,
	},
	{
		_id: mongoose.Types.ObjectId("59316b89008c586bc2214303"),
		symbol: "TSLA",
		purchase_price: 50,
		stock_count: 5,
		is_owned: true,
	},
	{
		_id: mongoose.Types.ObjectId("59316b89008c586bc2214304"),
		symbol: "FB",
		purchase_price: 50,
		stock_count: 5,
		is_owned: true,
	},
	{
		_id: mongoose.Types.ObjectId("59316b89008c586bc2214305"),
		symbol: "MNKD",
		purchase_price: 50,
		stock_count: 5,
		is_owned: true,
	},
	{
		_id: mongoose.Types.ObjectId("59316b89008c586bc2214306"),
		symbol: "FB",
		purchase_price: 50,
		stock_count: 5,
		is_owned: true,
	},	
	{
		_id: mongoose.Types.ObjectId("59316b89008c586bc2214307"),
		symbol: "FB",
		purchase_price: 50,
		stock_count: 5,
		is_owned: true,
	},
	{
		_id: mongoose.Types.ObjectId("59316b89008c586bc2214308"),
		symbol: "SNAP",
		purchase_price: 50,
		stock_count: 5,
		is_owned: true,
	},
	{
		_id: mongoose.Types.ObjectId("59316b89008c586bc2214309"),
		symbol: "SNAP",
		purchase_price: 50,
		stock_count: 5,
		is_owned: true,
	},
	{
		_id: mongoose.Types.ObjectId("59316b89008c586bc2214310"),
		symbol: "SNAP",
		purchase_price: 50,
		stock_count: 5,
		is_owned: true,
	},
	{
		_id: mongoose.Types.ObjectId("59316b89008c586bc2214311"),
		symbol: "FB",
		purchase_price: 50,
		stock_count: 5,
		is_owned: true,
	},
	{
		_id: mongoose.Types.ObjectId("59316b89008c586bc2214312"),
		symbol: "SNAP",
		purchase_price: 50,
		stock_count: 5,
		is_owned: true,
	},
	{
		_id: mongoose.Types.ObjectId("59316b89008c586bc2214313"),
		symbol: "MNKD",
		purchase_price: 50,
		stock_count: 5,
		is_owned: true,
	},
	{
		_id: mongoose.Types.ObjectId("59316b89008c586bc2214314"),
		symbol: "SNAP",
		purchase_price: 50,
		stock_count: 5,
		is_owned: true,
	},
	]

db.Ledger
	.remove({})
	.then(() => db.Ledger.create(ledgerSeed))
	.then(data => {
		process.exit(0)
	})
	.catch(err => {
		console.error(err)
		process.exit(1)
	})

db.Users
	.remove({})
	.then(() => db.Users.create(userSeed))
	.then(data => {
		process.exit(0)
	})
	.catch(err => {
		console.error(err)
		process.exit(1)
	})
