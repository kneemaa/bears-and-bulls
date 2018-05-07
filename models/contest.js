const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ContestSchema = new Schema({
	contest_name: {			//Friendly name of contest
		type: String,
		required: true
	},
	start_date: {
		type: Date 			//Start of contest
	},
	end_date: {
		type: Date 			//End of contest
	},
	starting_amount: {
		type: Number,
		required: true
	}
	competition_type: {
		type: Number,
		required: true
	},
	contestants: [{
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'Users'
	}]
	}, { timestamps: Date })

let Contest = mongoose.model('Contest', ContestSchema)

module.exports = Contest