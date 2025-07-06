
const mainchartPie = document.getElementById('chart-pie')
const mainchartLine = document.getElementById('chart-line')
const mainchartBar = document.getElementById('chart-bar')

let chartPie = new Chart(mainchartPie, { })
let chartLine = new Chart(mainchartLine, { })
let chartBar = new Chart(mainchartBar, { })

let label = [], data1 = [], data2 = [], data3 = [], bar = []
for (let x=1;x<=3;x++) {
	label.push(Math.random())
	data1.push(Math.random())
}
for (let x=1;x<=3;x++) {
	data2.push(Math.random())
}
for (let x=1;x<=3;x++) {
	data3.push(Math.random())
}
for (let x=1;x<=3;x++) {
	bar.push(Math.random())
}

chartPie.destroy()
chartPie = new Chart(mainchartPie, {
	type: 'pie',
    data: {
      datasets: [{
        data: [Math.random(),Math.random(),Math.random()],
        backgroundColor: ['#FF00FF','#0066FF','#FFCC00'],
        borderWidth: 0
      }]
    },
    options: {
    	responsive: true,
    	events: null
    }
})

chartLine.destroy()
chartLine = new Chart(mainchartLine, {
	type: 'line',
    data: {
    	labels: label,
    	datasets: [
	    	{
	    		tension: 1,
	    		data: data1,
	    		borderColor: '#FF00FF',
	    		borderWidth: 1
	    	},
	    	{
	    		tension: 1,
	    		data: data2,
	    		borderColor: '#0066FF',
	    		borderWidth: 1
	    	},
	    	{
	    		tension: 1,
	    		data: data3,
	    		borderColor: '#FFCC00',
	    		borderWidth: 1
	    	}
    	]
    },
    options: {
    	responsive: true,
    	elements: {
    		point: {
    			pointStyle: false
    		}
    	},
    	scales: {
    		x: {
    			display: false,
    			stacked: true,
    			grid: {
    				display: false
    			},
    			ticks: {
    				beginAtZero: true
    			}
    		},
    		y: {
    			display: false,
    			min: 0,
    			step: 0.1,
    			ticks: {
    				beginAtZero: true
    			}
    		}
    	},
    	plugins: {
    		legend: {
    			display: false
    		}
    	},
    	events: null
    }
})

chartBar.destroy()
chartBar = new Chart(mainchartBar, {
	type: 'bar',
    data: {
    	labels: label,
    	datasets: [{
    		data: bar,
        	backgroundColor: ['#FF00FF','#0066FF','#FFCC00'],
	    	borderWidth: 0
	    }]
    },
    options: {
    	responsive: true,
    	scales: {
    		x: {
    			display: false,
    			stacked: true,
    			grid: {
    				display: false
    			},
    			ticks: {
    				beginAtZero: true
    			}
    		},
    		y: {
    			display: false,
    			min: 0,
    			step: 0.1,
    			ticks: {
    				beginAtZero: true
    			}
    		}
    	},
    	plugins: {
    		legend: {
    			display: false
    		}
    	},
    	events: null
    }
})
