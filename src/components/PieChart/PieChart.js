import React, { Component } from 'react';
import echarts from 'echarts/lib/echarts';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/title';

class PieChart extends Component {

	componentDidMount(){
		this.componentDidUpdate();
	}

	componentDidUpdate(){
		let data =[];
		this.props.stocks.map(stock => {
			let value = stock.market_value*stock.stock_count;
			data.push({
				name: stock.symbol,
				value: value
			})
			return data
		});
		this.props.stocks && this.createChart(data);
	}

	createChart = data => {
		let title = 'Distribution'
		if (this.props.stocks.length === 0) {
			title = 'You do not own any stocks.';
		}

		let myChart = echarts.init(document.getElementById('pie'));
		myChart.setOption({
			title: {
				text: title
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
		)
	}
}

function mapStateToProps(state) {
    return {
      stocks: state.stocks.owned
    };
  }

export default connect(mapStateToProps)(PieChart);
