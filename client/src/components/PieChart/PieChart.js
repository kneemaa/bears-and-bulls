import React, { Component } from 'react';
//import API from '../../utils/API.js';

import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/title';

class PieChart extends Component {
	state = {
		data: [
			{ name: 'AAPL', value: 3000 },
			{ name: 'IBM', value: 5000 },
			{ name: 'WFC', value: 8000 },
			{ name: 'FB', value: 2000 },
			{ name: 'GOOG', value: 5000 }
		]
	}

	componentDidMount(){
		this.getChartData();
	}

	getChartData = () => {
		// query from db
		this.createChart();
	}

	createChart = () => {
		let myChart = echarts.init(document.getElementById('pie'));
		let data = this.state.data;


		myChart.setOption({
			title: {
				text: 'Distribution'
			},
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)"
			},
			series: [
				{
					name:'Distribution',
					type:'pie',
					radius: ['40%', '60%'],
					avoidLabelOverlap: false,
					label: {
						normal: {
							show: false,
							position: 'center'
						},
						emphasis: {
							show: true,
							textStyle: {
								fontSize: '20',
								fontWeight: 'bold'
							}
						}
					},
					data: data
				}
			],
			color: ['#e3f2fd', '#bbdefb','#90caf9','#42a5f5', '#1e88e5', '#0d47a1']

		});
	}
	render() {
		return (
			<div id="pie" style={this.props.style}></div>
		);
	}
}

export default PieChart;
