(function() {

/* 
      Draw line: http://bl.ocks.org/mbostock/5649592
      Path along point: http://bl.ocks.org/mbostock/1705868
  */

/* CONFIGURATION 
   =============================== */

var margin = { top: 30, right: 20, bottom: 20, left: 30},
    width = 710 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

var unemploymentTarget = 6,
    inflationTarget = 2;

var currentAnnotation = false;

var annotationIndex = 0;

var showTrack = true,
    showArrows = false,
    showLine = false,
    showDots = false;

var patches = {
  5: "367.40000000000003, 167.49999999999994,454.6666666666667,90.00000000000006",
  6: "C465.66666666666663, 80.5 , 470.99999999999994 ,105, 483.99999999999994 ,115"
}

/* BASIC FUNCTIONS
   =============================== */

var formatPercent = function(d) { return d + '%'; }

var x = d3.scale.linear()
        .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .ticks(12)
    .tickSize(height, height)
    .tickFormat(formatPercent)
    .orient("top");

var yAxis = d3.svg.axis()
    .scale(y)
    .ticks(10)
    .tickSize(-width)
    .tickFormat(formatPercent)
    .orient("left");

var targetLine = d3.svg.line()
    .x(function(d) { return x(d.unemployment); })
    .y(function(d) { return y(d.inflation); })

var line = d3.svg.line()
    .interpolate("cardinal")
    .x(function(d) { return x(d.unemployment); })
    .y(function(d) { return y(d.inflation); });

var graphic = d3.select(".g-overlay")
    .style("margin-top", margin.top  - 15 + "px");

var svg = d3.select("#g-canvas")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var xLabel = graphic.append("div")
    .style("left", margin.left + "px")
    .style("top", -15 + "px")
    .attr("class", "x axis-label absolute")
    .html("Unemployment rate");

var xArrow = graphic.append("div")
    .attr("class", "arrow-container unemployment-arrow-container absolute")

    xArrow.append("div")
      .attr("class", "arrow unemployment-arrow");

var yArrow = graphic.append("div")
    .attr("class", "arrow-container inflation-arrow-container absolute")

    yArrow.append("div")
      .attr("class", "arrow inflation-arrow");

var yLabel = graphic.append("div")
    .style("left", 10 + "px")
    .style("top", 80 + "px")
    .attr("class", "y axis-label absolute")
    .html("Inflation<br />rate");

/* LOAD DATA
   =============================== */

queue()
    .defer(d3.tsv, NYTG_ASSETS + "yellen.txt")
    .await(ready);

function ready(error, complete){

    var data = complete.filter(function(d) { 
      // return d.year > 1940;
      return true;
    })



    function stepClicked(sequence, autodraw) {

      var tduration = 0;

      if (!autodraw) {

        d3.selectAll(".g-annotation")
          .style("display", "none");

        d3.select("#annotation-" + (sequence.index + 1)  )
          .style("display", "block");
        
      }

      d3.selectAll(".show")
        .classed("show", false)

      d3.select("body")
        .attr("class", "step-" + (sequence.index + 1) ) ;

      var annotation = currentAnnotation = annotations[sequence.index];

      

      if (sequence.index == 6) {

        d3.select("body")
          .classed( "suppress-7", true );

        zoom(0.35, .5, 1000);

        tduration = 1000;        

      } else {

        zoom(1, 1, 0);

      }

      if (sequence.index == 0) return false;

      setTimeout(function() { 

        if (sequence.index == 6) {
          annotation = computeLine(annotation);
          d3.select("body")
            .classed( "suppress-7", false );
        }

        if (annotation.path) annotation.path.call(function(path) {

          path.transition()
              .ease("linear")
              .duration(annotation.years.length * 350)
              .attrTween("stroke-dasharray", function() {

                var l = this.getTotalLength(),
                    i = d3.interpolateString("0," + l, l + "," + l);
                return function(t) { 

                  if (currentAnnotation.id != annotation.id) { 
                    return false;
                  }

                  _.each(currentAnnotation.years, function(year) {
                    if (year.pathLength <= t * l) {
                      d3.select("#label-" + year.year).classed("show", true);
                      d3.select("#dot-" + year.year).classed("show", true);
                    }
                  });
                  return i(t); 
                };

              })
        });

      }, tduration );


      if (autodraw) {

        setTimeout(function() {

          stepClicked({
            index: ++annotationIndex
          }, true)

        }, 7500)

      }

    }


    // $(".g-next-btn").click(function() {

    //   console.log("g-next-btn");

    //   stepClicked({
    //     index: 1
    //   });  

    // })


    annotationIndex = 0;

    // setTimeout(function() {

    //   stepClicked({
    //     index: ++annotationIndex
    //   }, true)

    // }, 0)

   

    // Prepare data
    _.each(data, function(d) {
        d.unemployment = +d.unemployment;
        d.inflation = +d.inflation;
    })

    // Set up domains
    x.domain([1, 10]);
    y.domain([0, d3.max(data, function(d) { return d.inflation; })]);


    window.y = y;

    // Draw axis
    var xGrid = svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

      xGrid.selectAll(".tick")
        .filter(function(d) { return d % 2 == 0; })
          .classed("major", true);

    var yGrid = svg.append("g")
      .attr("class", "y axis")
      .call(yAxis);

      yGrid
        .selectAll(".tick")
        .filter(function(d) { return d % 2 == 0 && d != 10 || d == 0; })
          .classed("major", true);


    /* TARGET RATE
       ============================ */

    // Lines for target rates

    var targetX = svg.append("path")
      .datum([
        { unemployment: unemploymentTarget, inflation: -12 },
        { unemployment: unemploymentTarget,  inflation: 11 }
      ])
      .attr("class", "target-rate x-rate")
      .attr("d", line)

    var targetY = svg.append("path")
      .datum([
        { unemployment: 1, inflation: inflationTarget },
        { unemployment: 25, inflation: inflationTarget }
      ])
      .attr("class", "target-rate y-rate")
      .attr("d", line)

    // "Target rate" -- Text labels for target rates
     
    var labelTargetX = svg.append("g")
      .selectAll(".x.axis-label")
      .data([
        { text: "Current", unemployment: unemploymentTarget, inflation: y.domain()[1] },
        { text: "natural rate*", unemployment: unemploymentTarget, inflation: y.domain()[1] }
      ])
      .enter()
      .append("text")
      .attr("x", function(d) { return x(d.unemployment) + 16; })
      .attr("y", function(d, i ) { return y(d.inflation) + i * 12 - 4; })
      .attr("class", "x target-label absolute")
      .attr("text-anchor", "start")
      .text(function(d) { return d.text; })

    var labelTargetY = svg.append("g")
    .selectAll(".y.axis-label")
      .data([
        { text: "current", unemployment: x.domain()[0], inflation: inflationTarget },
        { text: "target", unemployment: x.domain()[0], inflation: inflationTarget }
      ])
      .enter()
      .append("text")
      .attr("x", -18)
      .attr("y", function(d, i ) { return y(d.inflation) + i * 12 + 20; })
      .attr("class", "y target-label absolute")
      .attr("text-anchor", "start")
      .text(function(d) { return d.text; })

    // Numeric labels for target rates

    /*var rateTargetX = svg.append("text")
      .data([{ unemployment: unemploymentTarget, inflation: y.domain()[1] }])
      .attr("x", function(d) { return x(d.unemployment); })
      .attr("y", -3)
      .attr("class", "numeric-label target-label")
      .attr("text-anchor", "middle")
      .text(function(d) { return "" + formatPercent(d.unemployment); })

    var rateTargetY = svg.append("text")
      .data([{ unemployment: x.domain()[0], inflation: inflationTarget }])
      .attr("x", -10)
      .attr("y", function(d) { return y(d.inflation); })
      .attr("class", "numeric-label target-label")
      .attr("text-anchor", "middle")
      .text(function(d) { return "" + formatPercent(d.inflation); })*/
    


    /* PATH + TRACK
       ============================ */

    if (showTrack) {

      var track = svg.append("path")
        .datum(data)
        .attr("class", "track")
        // .style("marker-start", "url(#triangle)")
        .attr("d", line);
      
    }

    if (showLine) {

      // Main path
      var path = svg.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line)
        .call(transition);      // Enable this to animate
      
    }


    if (showArrows) {

      var begin = data.slice(0,1)[0];
      var end = data.slice(1,2)[0];
      var mid = _.extend({}, end);
      mid.unemployment = (end.unemployment + begin.unemployment) / 2;
      mid.inflation = (end.inflation + begin.inflation) / 2;
      
      var arrows = svg.append("path")
        .datum([begin, mid])
        .attr("class", "arrow-line")
        .attr("d", line)

    }

    function computeLine(annotation) {
      
      for (var i = 1; i <= annotation.years.length; i++) {

        annotation.years[i - 1].path = svg.append("path")
          .datum(annotation.years.slice(0, i))
          .attr("d", line)
          .attr("class", "hide");

        if (annotation.years[i - 1].path) {
          annotation.years[i - 1].pathLength = annotation.years[i - 1].path.node().getTotalLength();
        }
        
      }

      return annotation;
    }

    _.each(annotations, function(annotation, aindex) {

      if (aindex == 0) return false;

      if (annotation.id == 3) annotation.secondary = true;
      if (annotation.id == 6) annotation.secondary = true;
      if (annotation.id == 7) annotation.secondary = true;

      annotation.years = _.filter(data, function(item) {
        var match = (+item.year >= +annotation.start && +item.year <= +annotation.end);
        if (match) item.annotation = annotation;
        return match;
      });

      // svg.append("g")
      //   .data()
      //   .enter()
      //   .append()

      var container = graphic.append("div")
        .attr("class", "absolute hed-container hed-" + annotation.id  +  " show-" + annotation.id  + ((annotation.secondary) ? "" : " show-1") )
        .selectAll(".type")
        .data([
            annotation.title,
            annotation.period
          ])
        .enter()
          .append("div")
          .attr("class", function(d,i) { 
            if (i == 0) return "hed type";
            if (i == 1) return "subhed type";
          })
          // .style("left", x(annotation.years[0].unemployment) + "px")
          // .style("top", y(annotation.years[0].inflation) + "px")
          .text(function(d) { return d; })


      annotation = computeLine(annotation);

      annotation.path = svg.append("path")
        .datum(annotation.years)
        .attr("class", function(d) { 
          var css = "annotation-line show-" + annotation.id + " line-" + annotation.id; 
          if (!annotation.secondary) {
            css += " show-1";
          }
          return css;
        })
        .style("marker-start", "url(#triangle-" + annotation.id + ")")
        .attr("d", function(d) {  
          var str = line(d);   
          if (patches[annotation.id]) {
            if (annotation.id == 5) {
              var n = str.lastIndexOf("Q");
              str = str.substring(0, n) + "S" + patches[annotation.id];
            } else if (annotation.id == 6) {
              var pieces = str.split("Q")
              pieces[1] = patches[annotation.id];
              pieces[2] = "Q507.33333333333326, 123.5,637.9999999999999,225"
              str = pieces.join("");
            }
          }
          return str;
        });

    })


    /* ANNOTATION HEDS
       ============================ */

     


    /* YEAR LABELS and DOTS
       ============================ */

    var dots = svg.selectAll(".g-year-dot")
      .data(data)
      .enter()
      .append("circle")
        .attr("class", function(d) { 
          var css = "g-year-dot "; 
          if (d.annotation) { 
            css += "annotation-dot annotation-fill annotation-fill-" + d.annotation.id + /* " show-" + d.annotation.id +*/ " wait-" + d.annotation.id;
            if (!d.annotation.secondary) css += " show-1";
          }
          return css;
        })
        .attr("id", function(d) {
          return "dot-" + d.year;
        })
        .attr("cx", function(d) { return x(d.unemployment) })
        .attr("cy", function(d) { return y(d.inflation) })
        .attr("r", function(d) {
          return (d.annotation) ? 2 : 2;
        });

    // Draw year labels
    var labels = graphic.selectAll(".g-year-label")
        .data(data)
        .enter()
      .append("div")
        .attr("class", function(d) { 
          var css = "g-year-label " + d.offset;
          if (d.annotation) { 
            css += /*" show-" + d.annotation.id + */" wait-" + d.annotation.id + " color-" + d.annotation.id; 
            if (!d.annotation.secondary) css += " show-1";
          }
          return css;
        })
        .attr("id", function(d) {
          return "label-" + d.year;
        })
        .text(function(d) { return d.label; })
        .style("left", function(d) { return x(d.unemployment) + margin.left - 10 + "px"; })
        .style("top", function(d) { return y(d.inflation) + "px"; })
        
    labels.filter(function(d) { return d.display == "no" })
          .classed("hide", true);

    d3.selectAll(".animate")
      .on("click", function() {
        path.call(transition)
      })

    // Draw line along a path
    function transition(path) {
      path.transition()
          .ease("linear")
          .duration(15000)
          .attrTween("stroke-dasharray", tweenDash)
    }

    window.transition = transition;

    function tweenDash() {
      var l = this.getTotalLength(),
          i = d3.interpolateString("0," + l, l + "," + l);
      return function(t) { 
        _.each(currentAnnotation.years, function(year) {
          if (year.pathLength <= t * l) {
            d3.select("#label-" + year.year).classed("show", true);
            d3.select("#dot-" + year.year).classed("show", true);
          }
        });
        return i(t); 
      };
    }

    // Zoom path and text
    function zoom(scaleX, scaleY, duration) {

      if (!scaleX) scaleX = 1; 
      if (!scaleY) scaleY = 1; 
      x.range([0, width * 1]);
      y.range([height * 1, 0]);


      

      if (scaleX < 1) {

        x.domain([1, 25]);
        y.domain([-12, 11]);

        labelTargetX
          .style("display", "none");

        labelTargetY
          .style("display", "none");

      } else {

        d3.select("body")
            .classed( "suppress-7", false);

        x.domain([1, 10]);
        y.domain([0, 11]);

        labelTargetX
          .style("display", "");

        labelTargetY
          .style("display", "");

      }

      track
        .transition()
        .duration(duration)
        .attr("d", line)

      labels
        .transition()
        .duration(duration)
        .style("left", function(d) { 
          // return "0px";
          return x(d.unemployment) + margin.left - 10 + "px"; 
        })
        .style("top", function(d) { return y(d.inflation) + "px"; })

      dots
        .transition()
        .duration(duration)
        .attr("cx", function(d) { return x(d.unemployment) })
        .attr("cy", function(d) { return y(d.inflation) })

      xGrid
        .transition() 
        .duration(duration)
        .call(xAxis);

      yGrid
        .transition() 
        .duration(duration)
        .call(yAxis);

      targetX
        .transition()
        .duration(duration)
        .attr("d", line)

      targetY
        .transition()
        .duration(duration)
        .attr("d", line)

      if (scaleX < 1) {

        xGrid.selectAll(".tick")
        .filter(function(d) { return d % 2 == 0; })
          .classed("major", true);

        yGrid
          .selectAll(".tick")
          .classed("major", false)
          .filter(function(d) { return d % 2 == 0 && d != 10 && d != 8 || d == 0; })
            .classed("major", true);

      }

      _.each(annotations, function(annotation) {


        if (!annotation.path) return false;

        annotation.path
          .transition()
          .duration(duration)
          .attr("d", function(d) {
             var str = line(d);   
            if (patches[annotation.id] && scaleX == 1) {
              if (annotation.id == 5) {
                var n = str.lastIndexOf("Q");
                str = str.substring(0, n) + "S" + patches[annotation.id];
              } else if (annotation.id == 6) {
                var pieces = str.split("Q")
                pieces[1] = patches[annotation.id];
                pieces[2] = "Q507.33333333333326, 123.5,637.9999999999999,225"
                str = pieces.join("");
              }
            }
            return str;
          });

      });

    }

    // zoom(0.35, .5);

     var stepper = new Ink.Stepper('#g-stepper-container',
      [
        { label: 1 , callback: stepClicked },
        { label: 2 , callback: stepClicked },
        { label: 3 , callback: stepClicked },
        { label: 4 , callback: stepClicked },
        { label: 5 , callback: stepClicked },
        { label: 6 , callback: stepClicked },
        { label: 7 , callback: stepClicked }
      ],
      {
        autostart: true,
        loop: true
      });


}

})()