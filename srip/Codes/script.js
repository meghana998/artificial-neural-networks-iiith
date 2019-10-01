var type="";
var nosample=0;
var noiter=0;
var sizesample=0;
var sizeiter=0;
var ls=0;
var data = {
    datasets: [{ 
        data: [],
        showLine: false,
        backgroundColor:[ 
        "black",
        "black",
        ],
       fill: false,
         
      }
    ]
};
var data1 = {
    datasets: [{ 
        data: [
        {
            x: 1,
            y: 10
         }, {
            x: 2,
            y: 2
         }, {
            x: 5,
            y: 3
         }, {
            x: 3,
            y: 5
         },
         {
            x: 4,
            y: 6
         },{
            x: 9,
            y: 6
         }, {
            x: 7,
            y: 10
         }, {
            x: 10,
            y: 6
         },
         {
            x: 6,
            y: 6
         }, {
            x: 4,
            y: 8
         }],
        showLine: false,
        backgroundColor:[ 
        "blue",//class1
        "blue",//class1
        "blue",//class1
        "blue",//class1
        "blue",//class1
        "red",//class2
        "red",//class2
        "red",//class2
        "red",//class2
        "red",//class2
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
                
                xAxes: [{
                     gridLines: {
                     display:false
                },
                scaleLabel: {
                       display: true,
                       labelString: 'x1'
                      },
                      ticks: {
                max: 10,
                min: 0,
                stepSize: 1
                }
                }],
                yAxes: [{
                     gridLines: {
                     display:false
                     },
                     scaleLabel: {
                       display: true,
                       labelString: 'x2'
                      } ,
                      ticks: {
                max: 10,
                min: 0,
                stepSize: 1
                }  
                 }],   
        },
      legend: {
         display: false,
        },

    }
});
/*drawing line
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(300, 150);
ctx.stroke();
*/
document.getElementById('init').onclick = function() {
    myChart.destroy();
  myChart = new Chart(ctx, {
    type: 'scatter',
    data: data1,
    options: {
    showLines: false ,
     scales: {
                 ticks: {
                max: 10.0,
                min: -10.0,
                stepSize: 0.1
                },
                xAxes: [{
                     gridLines: {
                     display:false
                },
                scaleLabel: {
                       display: true,
                       labelString: 'x1'
                      },
                      ticks: {
                max: 10,
                min: 0,
                stepSize: 1
                }
                }],
                yAxes: [{
                     gridLines: {
                     display:false
                     },
                     scaleLabel: {
                       display: true,
                       labelString: 'x2'
                      },
                      ticks: {
                max: 10,
                min: 0,
                stepSize: 1
                }  
                 }],  
          
        },
      legend: {
         display: false,
        }
    }

  });

     type=document.getElementById('type').value;
     nosample=Number(document.getElementById('nosample').value);
     noiter=Number(document.getElementById('noiterations').value);
     sizesample=Number(document.getElementById('samplesize').value);
     sizeiter=Number(document.getElementById('iterationsize').value);
    if(type=="Linearly separable"){
     ls=0;
    }
    if(type=="Linearly inseparable"){
     ls=1;
    }
}
/*var minx1=10; 
       var maxx1=20; 
       var miny1=1; 
       var maxy1=4;  
       var x1 = Math.random() * (+maxx1 - +minx1) + +minx1; 
       var y1 = Math.random() * (+maxy1 - +miny1) + +miny1; 
       randdata.push([x1,y1]);
*/
//next sample
document.getElementById('next1').onclick=function(){
   if(ls==0){
     ;
   }
   if(ls==1){
     ;
   }
}
//next iteration
document.getElementById('next2').onclick=function(){
   if(ls==0){
     ;
   }
   if(ls==1){
    ;
   }
}
