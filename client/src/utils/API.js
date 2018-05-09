import axios from "axios";

export default {
	// search price history for chart
	searchStock: (symbol) => {
		const queryURL = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + symbol + '&apikey=GNC3G50UKYCQIXVN';

		return axios.get(queryURL);
	}
}
