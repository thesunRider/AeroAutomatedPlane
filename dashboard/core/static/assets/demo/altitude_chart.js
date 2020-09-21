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


    var chart_labels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
    var chart_data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


    var ctx = document.getElementById("chartBig1").getContext('2d');

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
    gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors
    var config = {
      type: 'line',
      data: {
        labels: chart_labels,
        datasets: [{
          label: "Altitude from Ground",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#d346b1',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#d346b1',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#d346b1',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: chart_data,
        }]
      },
      options: gradientChartOptionsConfigurationWithTooltipPurple
    };
    var myChartData = new Chart(ctx, config);
    $("#0").click(function() {
      var data = myChartData.config.data;
      data.datasets[0].data = chart_data;
      data.labels = chart_labels;
      myChartData.update();
    });

alt_now = document.getElementById('alt_now');
var zero_alt = 12;
function adddata_altitude(){

  var value = Math.floor((Math.random() * 500) + 1);;
  myChartData.data.labels.push(zero_alt);
  myChartData.data.labels.splice(0, 1);
  myChartData.data.datasets[0].data.splice(0, 1);
  //console.log(myChartData.data.datasets[0].data);
  myChartData.data.datasets[0].data.push(value); 

  
    alt_now.innerHTML = "Altitude (" +value +"m)";
  myChartData.update();
  zero_alt++;
}

var refresh_rate = 1000;
setInterval(function(){
  adddata_altitude();
},refresh_rate);





