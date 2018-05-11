const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
	first_name: {
		type: String
	},
	last_name: {
		type: String
	},
	email: {
		type: String,
		required: true
	},
	account_balance: {
		type: Number,
		default: 100000
	}, 
	total_balance: {
		type: Number,
		default: 100000
	},
	competition_opted_out: {
		type: Boolean,
		default: false
	}
}, { timestamps: Date })

let Users = mongoose.model('Users', UserSchema)

module.exports = Users