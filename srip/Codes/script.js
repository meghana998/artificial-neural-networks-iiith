var data = {
    datasets: [{ 
        data: [
        {
            x: 0.3,
            y: 0.20
         }, {
            x: 0.4,
            y: 0.30
         }, {
            x: -0.4,
            y: -0.30
         }, {
            x: -0.3,
            y: -0.20
         },
         {
            x: 0.2,
            y: -0.4
         },{
            x: 0.3,
            y: -0.20
         }, {
            x: 0.7,
            y: 0.30
         }, {
            x: -0.4,
            y: 0.60
         }],
        showLine: false,
        backgroundColor:[ 
        "red",//class1
        "red",//class1
        "blue",//class2
        "blue",//class2
        "green",//class3
        "green",//class3
        "black",//class4
        "black",//class4
        ],
       fill: false,
         
      }
    ]
};

var ctx = document.getElementById("linechart");
var myChart = new Chart(ctx, {
  type: 'scatter',
  data: data,
  options: {
    showLines: false ,
    responsive: true,
    scales: {
                ticks: {
                max: 10.0,
                min: -10.0,
                stepSize: 0.1
                },
                xAxes: [{
                     gridLines: {
                     display:false
                }
                }],
                yAxes: [{
                     gridLines: {
                     display:false
                     }   
                 }],   
        },
      legend: {
         display: false,
        },

    }
});
