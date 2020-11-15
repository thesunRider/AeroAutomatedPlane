var ctx = document.getElementById("chartLinePurpleleft").getContext("2d");

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

    var bat_left = new Chart(ctx, {
      type: 'line',
      data: data,
      options: gradientChartOptionsConfigurationWithTooltipPurple
    });


var zero_left = 5;
left_now = document.getElementById('left_now');

const adddata_left= async () => {
  var leftvalue = await getdata_left();
  bat_left.data.labels.push(zero_left);
  bat_left.data.labels.splice(0, 1);
  bat_left.data.datasets[0].data.splice(0, 1);
  bat_left.data.datasets[0].data.push(leftvalue); 

  
  left_now.innerHTML = "Battery left " +leftvalue +"min";
  bat_left.update();
  zero_left++;
}


const getdata_left = async () => {
    $.ajax({
        url: '/ajax/sensors/left',
        success: function (data) {
            console.log('left: '+data.leftvalue);
            out2002 = data.leftvalue; //change this variable always
        }
      });
    return out2002;
}
//bat_left must be renamed bat_left
//