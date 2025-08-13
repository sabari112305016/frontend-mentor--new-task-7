var options = {
    chart: {
      type: 'bar',
       toolbar: { show: false },
    },
    series: [{
      data: [5, 9, 12, 8, 7, 11, 7.5]
    }],
    xaxis: {
      categories: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
      axisBorder: { show: false },
      axisTicks: { show: false },
       labels: {
        show: true ,
      }
    },

    yaxis: {
      show:false
    },
     grid: {
        show: false 
      },
      dataLabels: {
        enabled: false 
      },
       plotOptions: {
        bar: {
          columnWidth: '80%',
          borderRadius: 2,
          distributed: true,
        }
      },

       fill: {
        colors: ['hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', 'hsl(186, 34%, 65%)', 'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)']
       },
       legend: {
  show: false
}

  };

  var chart = new ApexCharts(document.querySelector(".chart"), options);
  chart.render();