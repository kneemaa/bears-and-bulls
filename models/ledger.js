const mongoose = require("mongoose")
const Schema = mongoose.Schema

const LedgerSchema = new Schema({
	symbol: {
		type: String,
		required: true
	},
	purchase_price: {
		type: Number
	},
	stock_count: {
		type: Number
	},
	owned_by: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'Users'
	}
}, { timestamps: Date })

let Ledger = mongoose.model("Ledger", LedgerSchema)

module.exports = Ledger