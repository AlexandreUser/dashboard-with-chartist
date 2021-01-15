  
  /* Set some base options (settings will override the default settings in Chartist.js *see default settings*). We are adding a basic label interpolation function for the xAxis labels. */
  var options = {
    lineSmooth: Chartist.Interpolation.simple({
        divisor: 2
      }),
      fullWidth: true,
      chartPadding: {
        right: 20
      },
      low: 0,
  
  };
  
  /* Now we can specify multiple responsive settings that will override the base settings based on order and if the media queries match. In this example we are changing the visibility of dots and lines as well as use different label interpolations for space reasons. */
  var responsiveOptions = [
    ['screen and (min-width: 641px) and (max-width: 1024px)', {
      showPoint: false,
     
    }],
    ['screen and (max-width: 640px)', {
      showLine: false,
    
    }]
  ];
fruits =  ["apple","orange","melon","grape","pear","peach"]
data = {
    labels:fruits,
    series: [
      {
        data: fruits.map(fruit=>{return 0})
      }
    ]
  }

  /* Initialize the chart with the above settings */
  chart = new Chartist.Bar('#my-chart', data, options, responsiveOptions);
  chart.on('draw', function(data) {
    if(data.type == 'bar') {
        data.element.animate({
            y2: {
                dur: '0.2s',
                from: data.y1,
                to: data.y2
            }
        });
    }
});