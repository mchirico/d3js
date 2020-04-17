var svg = d3.select("#chart-area").append("svg")
    .attr("width", 500)
    .attr("height",400);

var cicle = svg.append("circle")
    .attr("cx", 200)
    .attr("cy", 200)
    .attr("r", 100)
    .attr("fill","green")

var square = svg.append("square")
    .attr("width", 20)
    .attr("height", 20)
    .attr("fill","blue")
