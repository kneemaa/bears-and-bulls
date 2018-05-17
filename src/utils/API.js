import axios from "axios";

export default {
	// search price history for chart
	searchStock: (symbol) => {
		const queryURL = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + symbol + '&apikey=GNC3G50UKYCQIXVN';
		// const queryURL = 'https://api.iextrading.com/1.0/tops/last?symbols=' + symbol
		return axios.get(queryURL);
	}
}
