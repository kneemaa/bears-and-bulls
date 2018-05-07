const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CompetitionSchema = new Schema({
	competition_name: {			//Friendly name of contest
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

let Competition = mongoose.model('Competition', CompetitionSchema)

module.exports = Competition