var type="";
var nosample=0;
var noiter=0;
var sizesample=0;
var sizeiter=0;
var ls=0;
var x11=70;
var x21=50;
var x12=380;
var x22=340;
var count=0;
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
            y: 9
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
      }
    ],
    lineAtIndex: 2
};
var data2 = {
    datasets: [{ 
        data: [
        {x: 7,
            y: 10
           
         }, {
            x: 2,
            y: 2
         }, {
            x: 10,
            y: 6
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
             x: 1,
            y: 10
         }, {
            x: 5,
            y: 3
            
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
      }
    ],
    lineAtIndex: 1
};


var originalLineDraw = Chart.controllers.line.prototype.draw;
Chart.helpers.extend(Chart.controllers.line.prototype, {
  draw: function() {
    originalLineDraw.apply(this, arguments);

    var chart = this.chart;
    var ctx = chart.chart.ctx;

    var index = chart.config.data.lineAtIndex;
    if (index) {
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(index-1+x11,index-1+x21);
      ctx.strokeStyle ="black";
      ctx.lineTo(index-1+x12,index-1+x22);
      ctx.stroke();
      ctx.restore();
    }
  }
});
var config = {
  type: 'line',
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
                       labelString: 'bp'
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
                       labelString: 'choloestrol'
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
}
var ctx = document.getElementById("linechart").getContext("2d");
var myChart = new Chart(ctx, config);

document.getElementById('init').onclick = function() {
    

document.getElementById('next2').disabled=false;
count=0;

     type=document.getElementById('type').value;
     nosample=10//Number(document.getElementById('nosample').value);
     noiter=Number(document.getElementById('noiterations').value);
     sizesample=1//Number(document.getElementById('samplesize').value);
     sizeiter=Number(document.getElementById('iterationsize').value);
    if(type=="Linearly separable"){
     ls=0;
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
                       labelString: 'bp'
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
                       labelString: 'choloestrol'
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
    }
    if(type=="Linearly inseparable"){
     ls=1;
     myChart.destroy();
  myChart = new Chart(ctx, {
    type: 'scatter',
    data: data2,
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
                       labelString: 'bp'
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
                       labelString: 'choloestrol'
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
    }
}

//calculation of perceptron 
//b-bais , l=learing rate, w-weights,x-coordinates
function randomDataSet(dataSetSize, minValue, maxValue) {
  return new Array(dataSetSize).fill(0).map(function(n) {
    return Math.floor(Math.random() * (maxValue - minValue) + minValue);
  });
}
var x=[[1,10],[2,2],[5,3],[3,5],[4,6],[9,6],[7,10],[10,6],[6,6],[4,8]];
var w=randomDataSet(10,1,3);
var b=1;
var l=1;
var y=0;
var num_epochs=4;

function Prediction(x1,x2,w1,w2,b){
    t=(x1*w1)+(x2*w2)+b;
    if(t>=0){
        return 1;
    }
    else{
        return 0;
    }
   
}

//next iteration
document.getElementById('next2').onclick=function(){
   if(ls==0){
    count=count+1;
     if(count==1){
        document.getElementById('next2').disabled=true;
    }
         var j=0;
          for (var i=0; i<=2; i++) {
                y=Prediction(x[i][0],x[i][1],w[j],w[j+1],b);
                // If Red point misclassified into Positive region WX + b >= 0
                if(y== 1){
                     b -= l;
                     x11=x11+20;
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
                                                       labelString: 'bp'
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
                                                       labelString: 'choloestrol'
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
                       
                             }
        // If Blue point misclassified into Negative region WX + b < 0
                 else if(y==0){

                           b += l;
                           x12=x12-20;
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
                                       labelString: 'bp'
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
                                       labelString: 'choloestrol'
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
                            }
               
    }
     
   }

   if(ls==1){
     var j=0;
     count=count+1;
     if(count==2){
        document.getElementById('next2').disabled=true;
    }
          for (var i=0; i<=2; i++) {
                y=Prediction(x[i][0],x[i][1],w[j],w[j+1],b);
                // If Red point misclassified into Positive region WX + b >= 0
                if(y== 1){
                     b -= l;
                     x11=x11+5;
                     myChart.destroy();
                     myChart = new Chart(ctx, {
                     type: 'scatter',
                     data: data2,
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
                                                       labelString: 'bp'
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
                                                       labelString: 'choloestrol'
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
                       
                             }
        // If Blue point misclassified into Negative region WX + b < 0
                 else if(y==0){

                           b += l;
                           x12=x12-20;
                        myChart.destroy();
                  myChart = new Chart(ctx, {
                    type: 'scatter',
                    data: data2,
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
                                       labelString: 'bp'
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
                                       labelString: 'choloestrol'
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
                            }
               
    }
   }
}


function PerceptronStep(x,w,b,l=1){
    var j=0;
    for (var i=0; i<nosample; i++) {
        y=Prediction(x[i][0],x[i][1],w[j],w[j+1],b);
        // If Red point misclassified into Positive region WX + b >= 0
        if(y== 1){
            w[j] -= l * x[i][0];
            w[j+1] -= l * x[i][1];
            b -= l;
        }
        // If Blue point misclassified into Negative region WX + b < 0
        else if(y==0){
           w[j] += l * x[i][0];
            w[j+1] += l * x[i][1];
            b += l;
        }
         j=j+2;
    }
    return b;
}
//Run the perceptronStep for number of epochs

for(var i=0 ;i<num_epochs;i++){
//drawing line

    b = PerceptronStep(x,w,b,l);
}

