import React, { Component } from "react";
import CanvasJSReact from '../../canvasjs.react';
import CanvasJS from '../../canvasjs.min';
import './Chart.css'


var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends Component {	

	render() {

		const options = {
			animationEnabled: true,
			theme: "light2",
			title:{
				// text: "NUMBER OF USERS JOINED"
			},
			axisX:{
				valueFormatString: "DD MMM",
				crosshair: {
					enabled: true,
					snapToDataPoint: true
				}
			},
			axisY: {
				title: "No of users",
				includeZero: false,
				valueFormatString: "##0",
				crosshair: {
					enabled: true,
					snapToDataPoint: true,
					labelFormatter: function(e) {
						return CanvasJS.formatNumber(e.value, "##0");
					}
				}
			},
			data: [{
				type: "area",
				xValueFormatString: "DD MMM",
				yValueFormatString: "##0.00",
				dataPoints: [
				  { x: new Date("2018-03-01"), y: 85},
				  { x: new Date("2018-03-02"), y: 83},
				  { x: new Date("2018-03-05"), y: 83},
				  { x: new Date("2018-03-06"), y: 84},
				  { x: new Date("2018-03-07"), y: 84},
				  { x: new Date("2018-03-08"), y: 84},
				  { x: new Date("2018-03-09"), y: 85},
				  { x: new Date("2018-03-12"), y: 85},
				  { x: new Date("2018-03-13"), y: 84},
				  { x: new Date("2018-03-14"), y: 84},
				  { x: new Date("2018-03-15"), y: 85},
				  { x: new Date("2018-03-16"), y: 85},
				  { x: new Date("2018-03-19"), y: 85},
				  { x: new Date("2018-03-20"), y: 85},
				  { x: new Date("2018-03-21"), y: 86},
				  { x: new Date("2018-03-22"), y: 85},
				  { x: new Date("2018-03-23"), y: 84},
				  { x: new Date("2018-03-26"), y: 85},
				  { x: new Date("2018-03-27"), y: 85},
				  { x: new Date("2018-03-28"), y: 85},
				  { x: new Date("2018-03-29"), y: 88}
				]
			}]
		}
		
		return (
        <div className="chartCnt">
        <h3>Number of users joined</h3>

			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
 
// module.exports = App;                      
  export default Chart;