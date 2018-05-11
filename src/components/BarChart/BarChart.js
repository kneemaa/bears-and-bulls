import React, { Component } from 'react';
import API from '../../utils/API.js';
import * as stocksActionCreators from "../../actions/stocksActions"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './BarChart.css'
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class BarChart extends Component {
	state = {
		// symbol: this.props.symbol,
		// data: {}
	}

	componentDidMount(){
		this.getChartData();
	}

	componentDidUpdate(){
		this.props.stocks.charted && this.getChartData()
	}

	getChartData = () => {
		let symbol;
		if (this.props.symbol === undefined) {
			symbol = this.props.stocks.charted
		} else {
			symbol = this.props.symbol
		}
		API.searchStock(symbol).then(res => {
			// console.log(res);
			// this.setState({data: res.data["Time Series (Daily)"]}, () => {
				this.createChart(symbol, res.data["Time Series (Daily)"]);
			// });
		})
	}

    createChart = (symbol, data) => {
		let myChart = echarts.init(document.getElementById('bar'));
		// let symbol = this.props.stocks.charted;
		// let data = this.state.data;

		// prices for last 30 days
		let dates = Object.keys(data).slice(0,29).reverse();
		let prices = [];

		for (var i = 0; i < 29; i++) {
			prices.push(parseFloat(data[dates[i]]['4. close']));
		}

		let increase = [];
		let decrease = [];

		// interval = 5
		let max = Math.max(...prices) + 10 - Math.max(...prices)%5;
		let min = Math.min(...prices) - Math.min(...prices)%5;

		for (var j = 0; j < prices.length; j++) {
			var difference = (prices[j] - prices[j-1]).toFixed(2);

			if (difference >= 0) {
				decrease.push('-');
				increase.push(difference);
			} else {
				difference = Math.abs(difference);
				decrease.push(difference);
				increase.push('-');
			}
		}

        myChart.setOption({
			title: {
				text: symbol,
				// subtext: company,
				// sublink: 'https://www.ibm.com/'
			},
			tooltip : {
				trigger: 'axis',
				axisPointer : {
					type : 'shadow'
				},
				formatter: params => {
					let tar;
					if (params[1].value !== '-') {
						tar = params[1];
					}
					else {
						tar = params[0];
					}
					return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
				}
			},
			grid: {
				left: '0',
				right: '0',
				bottom: '3%',
				containLabel: true
			},
			xAxis: {
				type: 'category',
				splitLine: {show:false},
				data: dates
			},
			yAxis: {
				type : 'value',
				max: max,
				min: min,
				interval: 5
			},
			series: [
				{
					name: 'Total-line',
					type: 'line',
					itemStyle: {
						barBorderColor: 'rgba(100,0,255,1)',
						color: '#546dd0'
					},
					data: prices
				},
				{
					name: 'prices',
					type: 'bar',
					stack: 'total',
					itemStyle: {
						barBorderColor: 'rgba(0,0,0,0)',
						color: 'rgba(0,0,0,0)'
					},
					data: prices
				},
				{
					name: 'Up',
					type: 'bar',
					stack: 'total',
					label: {
						normal: {
							show: true,
							position: 'top'
						}
					},
					itemStyle: {
						barBorderColor: 'rgba(0,0,0,0)',
						color: '#00BDD4'
					},
					data: increase
				},
				{
					name: 'Down',
					type: 'bar',
					stack: 'total',
					label: {
						normal: {
							show: true,
							position: 'bottom'
						}
					},
					itemStyle: {
						barBorderColor: 'rgba(0,0,0,0)',
						color: '#FF6300'
					},
					data: decrease
				}
			]
		});
    }
    render() {
        return (
            <div id="bar" style={this.props.style}></div>
        );
    }
}

function mapStateToProps(state) {
    return {
      stocks: state.stocks,
    };
  }
  function mapDispatchToProps(dispatch) {
    return {
      stocksActions: bindActionCreators(stocksActionCreators, dispatch),

    };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(BarChart);
