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

    var ctx = document.getElementById("randchart").getContext("2d");

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
          label: "Temp Current",
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
randlbl = document.getElementById('randlabel');

const adddata_rand = async () => {
  var value = await getdata_rand();
  chart_rand.data.labels.push(zero_tmp);
  chart_rand.data.labels.splice(0, 1);
  chart_rand.data.datasets[0].data.splice(0, 1);
  chart_rand.data.datasets[0].data.push(value); 

  
  randlbl.innerHTML = "Random: " +value +"data";
  chart_rand.update();
  zero_tmp++;
}


const getdata_rand = async () => {
    $.ajax({
        url: '/ajax/sensors/rand',
        success: function (data) {
            console.log('tmp: '+data.value);
            out3 = data.value; //change this variable always
        }
      });
    return out3;
}