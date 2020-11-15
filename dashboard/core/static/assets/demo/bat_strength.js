var ctx = document.getElementById("chartLinePurplestrength").getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.2)');
    gradientStroke.addColorStop(0.2, 'rgba(72,72,176,0.0)');
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors

    var data = {
      labels: ['20', '40', '60', '80', '100'],
      datasets: [{
        label: "Data",
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
        data: [80, 100, 70, 80, 120, 80],
      }]
    };

    var bat_strength = new Chart(ctx, {
      type: 'line',
      data: data,
      options: gradientChartOptionsConfigurationWithTooltipPurple
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
//bat_strength must be renamed bat_strength
//