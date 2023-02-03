	function getTicks(){
		var width = parseInt(d3.select("#chart").style("width"))					
		if (width < 370){
			return ["2001-01-01", "2014-01-01"]
		} else if (width < 480){
			return ["2001-01-01", "2007-01-01", "2014-01-01"]
		} else {
			return ["2001-01-01", "2005-01-01", "2010-01-01", "2014-01-01"]
 		}
	}

	var chart = c3.generate({
		padding:{
			left: 45,
			top: 10,
			bottom: 15,
			right: 30
		},
		size: {
			height: 360
		},		
		data: {
		    x:'Years',
            url: 'data.csv',
          type: 'line',
		  order: null
        },
		color: {
			pattern: ['#525e6d', '#f78d1f', '#00cbc7', '#b4c715', '#01adff', '#5e9633', '#9f0cb4']  //Darkest three colours from http://colorschemedesigner.com/csd-3.5/#3q413w0w0w0w0
		},
		legend: {
			show: true
		},
		point:{
			show:false
		},
		grid: {
			y: {
				show: true
			}
		},
        axis: {
          x: {
			tick:{
				values: getTicks(),
				format: function(d){
					//var previousYear = moment(d).format('YYYY') - 1
					//return previousYear + '-' + moment(d).format('YY')
					return moment(d).format('YYYY')
				},
				multiline:false
			},
            type: 'timeseries'
          },
		  y: {
			min: 0,
			tick:{
				format: function(d){
					return d + '%';
				}
			}
		  },
        },
		tooltip: {
			format: {
				value: function (value, ratio, id) {
					return numeral(value).format('0.0') + '%';
				}
			}
		}
    });
	
