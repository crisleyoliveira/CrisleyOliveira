// VARIABLES
var data = [];
var offsetX = 30;
var offsetY = 15;
var height = 80;
var step = 10;
var bottomY = 2000000;
var topY = 4000000;

var x = d3.time.scale.utc()
          .range([0, 230])
          .domain([new Date('2015-01-01T00:00:00.000Z'),
                   new Date('2015-01-02T00:00:00.000Z')]);
var xAxis = d3.svg.axis()
              .scale(x)
              .ticks(d3.time.hour, 6);
var yAvailability;
var yAxisAvailabilityR;
var yAxisAvailabilityL;
var line = d3.svg.line()
             .x(function(d,i) { return i*10; })
             .y(function(d,i) { return (height - d*height); })
             .interpolate("basis");

var infoHeader = d3.select("#info-header");
var infoContentGraph = d3.select("#info-content-graphs");


// HELPER FUNCTION: Adds commas for thousands place.
const numberWithCommas = (x) => {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  };

  function ngFormatter(neighbourhood) {
    var ng_long;
    if (neighbourhood == "Ajuda") ng_long = "Ajuda";
    if (neighbourhood == "Alcntara") ng_long = "Alcântara";
    if (neighbourhood == "Alvalade") ng_long = "Alvalade";
    if (neighbourhood == "Areeiro") ng_long = "Areeiro";
    if (neighbourhood == "Arroios") ng_long = "Arroios";
    if (neighbourhood == "Avenidas Novas") ng_long = "Avenidas Novas";
    if (neighbourhood == "Beato") ng_long = "Beato";
    if (neighbourhood == "Belm") ng_long = "Belém";
    if (neighbourhood == "Benfica") ng_long = "Benfica";
    if (neighbourhood == "Campo de Ourique") ng_long = "Campo de Ourique";
    if (neighbourhood == "Campolide") ng_long = "Campolide";
    if (neighbourhood == "Carnide") ng_long = "Carnide";
    if (neighbourhood == "Estrela") ng_long = "Estrela";
    if (neighbourhood == "Lumiar") ng_long = "Lumiar";
    if (neighbourhood == "Marvila") ng_long = "Marvila";
    if (neighbourhood == "Misericrdia") ng_long = "Misericórdia";
    if (neighbourhood == "Olivais") ng_long = "Olivais";
    if (neighbourhood == "Parque das Naes") ng_long = "Parque das Nações";
    if (neighbourhood == "Penha de Frana") ng_long = "Penha de França";
    if (neighbourhood == "Santa Clara") ng_long = "Santa Clara";
    if (neighbourhood == "Santa Maria Maior") ng_long = "Santa Maria Maior";
    if (neighbourhood == "Santo Antnio") ng_long = "Santo António";
    if (neighbourhood == "So Domingos de Benfica") ng_long = "São Domingos de Benfica";
    if (neighbourhood == "So Vicente") ng_long = "São Vicente";
    return ng_long;
  }

// Bring in Neighborhood data.
d3.csv('lisboa_data.csv', function(file) {
    file.forEach(function(row) {
      var neighbourhood = neighbourhoodFormatter(row.neighbourhood);
      var price = parseFloat(row.price);
  
      data.push({
        neighbourhood: neighbourhood,
        price: price
      });
    });
  });

// Update the Info panel graph.
function getPriceGraph(container, ntaid) {
    // Set the graph's title.
    container.text('');
    container.append("div")
             .text("Neighbourhood's Price Distribution")
             .style("text-align", "center");
  
    // Init SVG container for the graph.
    var svg = container.append("svg").attr("width", offsetX*2 + step*23 + 10)
                                     .attr("height", height + offsetY*2 + 10);
  
    // Take the min and max for the whole dataset and make it the Y-axis range.
    var max = d3.max(data, function(d) { return d.price; });
    var min = d3.min(data, function(d) { return d.price; });
    var neighbourhoodData = data.filter(function(d) { return d.neighbourhood === ntaid; })[0].price;
  
    for (i = 0; i < neighbourhoodData.length; i++) {
      neighbourhoodData[i] = (neighbourhoodData[i] - min) / (max - min);
    }
  
    // Set the D3 Y axis objects with the new range.
    yAvailability = d3.scale.linear()
                      .range([height, 0])
                      .domain([min, max]);
  
    yAxisAvailabilityR = d3.svg.axis()
                           .scale(yAvailability)
                           .ticks(3)
                           .tickFormat(d3.format("s"))
                           .orient("right");
  
    yAxisAvailabilityL = d3.svg.axis()
                           .scale(yAvailability)
                           .ticks(3)
                           .tickFormat(d3.format("s"))
                           .orient("left");
  
    if (neighbourhoodData) {
      // Build the line and assign to div.
      svg.append("g")
         .append("svg:path")
         .attr("fill", "none")
         .style("stroke", "#fff")
         .style("opacity", 0.7)
         .style("stroke-width", 2)
         .attr("id", "p" + ntaid)
         .attr("transform", "translate(" + offsetX + "," + offsetY + ")")
         .attr("d", function() { return line(neighbourhoodData); });
  
      // Build the X axis.
      svg.append("g")
         .attr("class", "x axis")
         .attr("transform", "translate(" + offsetX + ", " + (offsetY + height) + ")")
         .call(xAxis);
  
      // Build the Y axis (left).
      svg.append("g")
         .attr("class", "y axis")
         .attr("transform", "translate("+ offsetX + "," + offsetY + ")")
         .call(yAxisAvailabilityL);
  
      // Build the Y axis (right).
      svg.append("g")
         .attr("class", "y axis")
         .attr("transform", "translate("+ (offsetX + step*23) + "," + offsetY + ")")
         .call(yAxisAvailabilityR);
    }
  }