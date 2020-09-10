gradientChartOptionsConfigurationWithTooltipPurple = {
  
  showLines: true,
  scales: {
    yAxes: [{
      display: true,
      ticks: {
        beginAtZero:true,
        min: 0
      }
    }]
  },
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(225,78,202,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }]
      }
    };


var ctx = document.getElementById("chartLinePurple").getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.2)');
    gradientStroke.addColorStop(0.2, 'rgba(72,72,176,0.0)');
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors

    var data = {
      labels: ['0','5','10','15','20'],
      datasets: [{
        label: "Battery level",
        fill: true,
        backgroundColor: gradientStroke,
        borderColor: '#d048b6',
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#d048b6',
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: '#d048b6',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: [0,0,0,0,0],
      }]
    };

    var myChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: gradientChartOptionsConfigurationWithTooltipPurple
    });


var zero_bat = 5;
bat_now = document.getElementById('bat_now');

function adddata_bat(){

  var value = Math.floor((Math.random() * 100) + 1);;
  myChart.data.labels.push(zero_bat);
  myChart.data.labels.splice(0, 1);
  myChart.data.datasets[0].data.splice(0, 1);
  //console.log(myChart.data.datasets[0].data);
  myChart.data.datasets[0].data.push(value); 

  
  bat_now.innerHTML = "Remaining " +value +"%";
  myChart.update();
  zero_bat++;
}

var refresh_rate = 4000;
setInterval(function(){
  adddata_bat();
},refresh_rate);