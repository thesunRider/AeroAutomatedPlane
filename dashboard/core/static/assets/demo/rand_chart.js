   gradientBarChartConfiguration = {
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

          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 120,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }],

        xAxes: [{

          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }]
      }
    };

       var ctx = document.getElementById("rand_chart").getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
    gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
    gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); //blue colors


    var chart_rand = new Chart(ctx, {
      type: 'bar',
      responsive: true,
      legend: {
        display: false
      },
      data: {
        labels: ['0', '5', '5', '5', '5', '5'],
        datasets: [{
          label: "random label",
          fill: true,
          backgroundColor: gradientStroke,
          hoverBackgroundColor: gradientStroke,
          borderColor: '#1f8ef1',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          data: [0, 0, 0, 0, 0, 0],
        }]
      },
      options: gradientBarChartConfiguration
    });


var zero_tmp = 5;
rand_shit = document.getElementById('rand_shit');

function adddata_rand(){

  var value = getdata_rand();
  chart_rand.data.labels.push(zero_tmp);
  chart_rand.data.labels.splice(0, 1);
  chart_rand.data.datasets[0].data.splice(0, 1);
  //console.log(chart_rand.data.datasets[0].data);
  chart_rand.data.datasets[0].data.push(value); 

  
  rand_shit.innerHTML = "Random label: " +value +"";
  chart_rand.update();
  zero_tmp++;
}

function getdata_rand(){
      $.ajax({
        url: ', view/ajax/sensors/rand',
        success: function (data) {
            console.log(data.value);
            out = data.value;
        }
      });
    return out;
}

var refresh_rate = 3000;
setInterval(function(){
  adddata_rand();
},refresh_rate);