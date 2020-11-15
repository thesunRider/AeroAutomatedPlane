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

    var ctx = document.getElementById("chartLinePurplestrength").getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
    gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
    gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); //blue colors


    var bat_strength = new Chart(ctx, {
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


var zero_strength = 5;
strength_now = document.getElementById('strength_now');

const adddata_strength= async () => {
  var strengthvalue = await getdata_strength();
  bat_strength.data.labels.push(zero_strength);
  bat_strength.data.labels.splice(0, 1);
  bat_strength.data.datasets[0].data.splice(0, 1);
  bat_strength.data.datasets[0].data.push(strengthvalue); 

  
  strength_now.innerHTML = "Battery strength " +strengthvalue +"%";
  bat_strength.update();
  zero_strength++;
}


const getdata_strength = async () => {
    $.ajax({
        url: '/ajax/sensors/strength',
        success: function (data) {
            console.log('strength: '+data.strengthvalue);
            out2001 = data.strengthvalue; //change this variable always
        }
      });
    return out2001;
}