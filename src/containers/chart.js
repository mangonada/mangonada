import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GithubApiInterface from '../reducers/gitD3/githubBranchFunction';

// import d3 from '../reducers/gitD3/d3';

class CrossfilterChart extends Component {
  componentDidMount(){
    console.log('crossfilter component will mount');
    this.makeCrossfilterChart();
  }
  makeCrossfilterChart(){
    // console.log("crossfitlerChart loaded")

    let JSONCommits = this.props.currentRepo.JSONCommits;
    // let commits = crossfilter(this.props.currentRepo.JSONCommits);
    // var date = commits.dimension(function(d) { return d.commit.date; });

    // Various formatters.
      let formatNumber = d3.format(",d"),
          formatChange = d3.format("+,d"),
          formatDate = d3.time.format("%B %d, %Y"),
          formatTime = d3.time.format("%I:%M %p");

      // A nest operator, for grouping the flight list.
      let nestByDate = d3.nest()
          .key(function(d) { return d3.time.day(d.commit.author.date); });

      // // A little coercion, since the CSV is untyped.
      JSONCommits.forEach(function(d, i) {
         d.index = i;
         d.commit.author.date = new Date(d.commit.author.date);
      //   d.delay = +d.delay;
      //   d.distance = +d.distance;
      });

      // Create the crossfilter for the relevant dimensions and groups.
      let commits = crossfilter(JSONCommits);
      let all = commits.groupAll();
      let date = commits.dimension(function(d) { return d.commit.author.date; });
      let dates = date.group(d3.time.day);
      let hour = commits.dimension(function(d) { return d.commit.author.date.getHours() + d.commit.author.date.getMinutes() / 60; });
      let hours = hour.group(Math.floor);
          // delay = commits.dimension(function(d) { return Math.max(-60, Math.min(149, d.delay)); }),
          // delays = delay.group(function(d) { return Math.floor(d / 10) * 10; }),
          // distance = commits.dimension(function(d) { return Math.min(1999, d.distance); }),
          // distances = distance.group(function(d) { return Math.floor(d / 50) * 50; });

      let charts = [

        barChart()
            .dimension(hour)
            .group(hours)
          .x(d3.scale.linear()
            .domain([0, 24])
            .rangeRound([0, 10 * 24])),

        // barChart()
        //     .dimension(delay)
        //     .group(delays)
        //   .x(d3.scale.linear()
        //     .domain([-60, 150])
        //     .rangeRound([0, 10 * 21])),
        //
        // barChart()
        //     .dimension(distance)
        //     .group(distances)
        //   .x(d3.scale.linear()
        //     .domain([0, 2000])
        //     .rangeRound([0, 10 * 40])),

        barChart()
            .dimension(date)
            .group(dates)
            .round(d3.time.day.round)
          .x(d3.time.scale()
            .domain([new Date(2001, 0, 1), new Date(2001, 3, 1)])
            .rangeRound([0, 10 * 90]))
            .filter([new Date(2001, 1, 1), new Date(2001, 2, 1)])

      ];

      // Given our array of charts, which we assume are in the same order as the
      // .chart elements in the DOM, bind the charts to the DOM and render them.
      // We also listen to the chart's brush events to update the display.
      let chart = d3.selectAll(".chart")
          .data(charts)
          .each(function(chart) { chart.on("brush", renderAll).on("brushend", renderAll); });

      // Render the initial lists.
      let list = d3.selectAll(".list") //commits list not defined
          .data([commitsList])
          .data([commitsList]);
          console.log('list', list);
      // Render the total.
      d3.selectAll("#total")
          .text(formatNumber(commits.size()));

      renderAll();

      // Renders the specified chart or list.
      function render(method) {
        d3.select(this).call(method);
      }

      // Whenever the brush moves, re-rendering everything.
      function renderAll() {
        chart.each(render);
        list.each(render);
        d3.select("#active").text(formatNumber(all.value()));
      }

      // Like d3.time.format, but faster.
      // function parseDate(d) {
      //   return new Date(2001,
      //       d.substring(0, 2) - 1,
      //       d.substring(2, 4),
      //       d.substring(4, 6),
      //       d.substring(6, 8));
      // }

      window.filter = function(filters) {
        filters.forEach(function(d, i) { charts[i].filter(d); });
        renderAll();
      };

      window.reset = function(i) {
        charts[i].filter(null);
        renderAll();
      };

      function commitsList(div) {
        console.log('div', div);
        var commitsByDate = nestByDate.entries(date.top(40));

        div.each(function() {
          console.log('*', d3.select(this)); // flight-list.list <-- need to set
          var date = d3.select(this).selectAll(".date")
              .data(commitsByDate, function(d) {
                return d.key;
              });

          date.enter().append("div")
              .attr("className", "date")
            .append("div")
              .attr("className", "day")
              .text(function(d) { return formatDate(d.values[0].date); });

          date.exit().remove();

          var commit = date.order().selectAll(".flight")
              .data(function(d) { return d.values; }, function(d) { return d.index; });

          var commitEnter = commit.enter().append("div")
              .attr("className", "flight");

          commitEnter.append("div")
              .attr("className", "time")
              .text(function(d) { return formatTime(d.commit.author.date); });
          // commitEnter.append("div").attr("className", "here");
          //     .attr("className", "origin")
          //     .text(function(d) { return d.origin; });
          //
          // flightEnter.append("div")
          //     .attr("className", "destination")
          //     .text(function(d) { return d.destination; });
          //
          // flightEnter.append("div")
          //     .attr("className", "distance")
          //     .text(function(d) { return formatNumber(d.distance) + " mi."; });
          //
          // flightEnter.append("div")
          //     .attr("className", "delay")
          //     .classNameed("early", function(d) { return d.delay < 0; })
          //     .text(function(d) { return formatChange(d.delay) + " min."; });

          commit.exit().remove();

          commit.order();
        });
      }

      function barChart() {
        if (!barChart.id) barChart.id = 0;

        var margin = {top: 10, right: 10, bottom: 20, left: 10},
            x,
            y = d3.scale.linear().range([100, 0]),
            id = barChart.id++,
            axis = d3.svg.axis().orient("bottom"),
            brush = d3.svg.brush(),
            brushDirty,
            dimension,
            group,
            round;

        function chart(div) {
          var width = x.range()[1],
              height = y.range()[0];
          console.log(group.top,"hello cady");
          // y.domain([0, group.top(1)[0].value]);
          y.domain([0, 50]);


          div.each(function() {
            var div = d3.select(this),
                g = div.select("g");

            // Create the skeletal chart.
            if (g.empty()) {
              div.select(".title").append("a")
                  .attr("href", "javascript:reset(" + id + ")")
                  .attr("className", "reset")
                  .text("reset")
                  .style("display", "none");

              g = div.append("svg")
                  .attr("width", width + margin.left + margin.right)
                  .attr("height", height + margin.top + margin.bottom)
                .append("g")
                  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

              g.append("clipPath")
                  .attr("id", "clip-" + id)
                .append("rect")
                  .attr("width", width)
                  .attr("height", height);

              g.selectAll(".bar")
                  .data(["background", "foreground"])
                .enter().append("path")
                  .attr("className", function(d) { return d + " bar"; })
                  .datum(group.all());

              g.selectAll(".foreground.bar")
                  .attr("clip-path", "url(#clip-" + id + ")");

              g.append("g")
                  .attr("className", "axis")
                  .attr("transform", "translate(0," + height + ")")
                  .call(axis);

              // Initialize the brush component with pretty resize handles.
              var gBrush = g.append("g").attr("className", "brush").call(brush);
              gBrush.selectAll("rect").attr("height", height);
              gBrush.selectAll(".resize").append("path").attr("d", resizePath);
            }

            // Only redraw the brush if set externally.
            if (brushDirty) {
              brushDirty = false;
              g.selectAll(".brush").call(brush);
              div.select(".title a").style("display", brush.empty() ? "none" : null);
              if (brush.empty()) {
                g.selectAll("#clip-" + id + " rect")
                    .attr("x", 0)
                    .attr("width", width);
              } else {
                var extent = brush.extent();
                g.selectAll("#clip-" + id + " rect")
                    .attr("x", x(extent[0]))
                    .attr("width", x(extent[1]) - x(extent[0]));
              }
            }

            g.selectAll(".bar").attr("d", barPath);
          });

          function barPath(groups) {
            var path = [],
                i = -1,
                n = groups.length,
                d;
            while (++i < n) {
              d = groups[i];
              path.push("M", x(d.key), ",", height, "V", y(d.value), "h9V", height);
            }
            return path.join("");
          }

          function resizePath(d) {
            var e = +(d == "e"),
                x = e ? 1 : -1,
                y = height / 3;
            return "M" + (.5 * x) + "," + y
                + "A6,6 0 0 " + e + " " + (6.5 * x) + "," + (y + 6)
                + "V" + (2 * y - 6)
                + "A6,6 0 0 " + e + " " + (.5 * x) + "," + (2 * y)
                + "Z"
                + "M" + (2.5 * x) + "," + (y + 8)
                + "V" + (2 * y - 8)
                + "M" + (4.5 * x) + "," + (y + 8)
                + "V" + (2 * y - 8);
          }
        }

        brush.on("brushstart.chart", function() {
          var div = d3.select(this.parentNode.parentNode.parentNode);
          div.select(".title a").style("display", null);
        });

        brush.on("brush.chart", function() {
          var g = d3.select(this.parentNode),
              extent = brush.extent();
          if (round) g.select(".brush")
              .call(brush.extent(extent = extent.map(round)))
            .selectAll(".resize")
              .style("display", null);
          g.select("#clip-" + id + " rect")
              .attr("x", x(extent[0]))
              .attr("width", x(extent[1]) - x(extent[0]));
          dimension.filterRange(extent);
        });

        brush.on("brushend.chart", function() {
          if (brush.empty()) {
            var div = d3.select(this.parentNode.parentNode.parentNode);
            div.select(".title a").style("display", "none");
            div.select("#clip-" + id + " rect").attr("x", null).attr("width", "100%");
            dimension.filterAll();
          }
        });

        chart.margin = function(_) {
          if (!arguments.length) return margin;
          margin = _;
          return chart;
        };

        chart.x = function(_) {
          if (!arguments.length) return x;
          x = _;
          axis.scale(x);
          brush.x(x);
          return chart;
        };

        chart.y = function(_) {
          if (!arguments.length) return y;
          y = _;
          return chart;
        };

        chart.dimension = function(_) {
          if (!arguments.length) return dimension;
          dimension = _;
          return chart;
        };

        chart.filter = function(_) {
          if (_) {
            brush.extent(_);
            dimension.filterRange(_);
          } else {
            brush.clear();
            dimension.filterAll();
          }
          brushDirty = true;
          return chart;
        };

        chart.group = function(_) {
          if (!arguments.length) return group;
          group = _;
          return chart;
        };

        chart.round = function(_) {
          if (!arguments.length) return round;
          round = _;
          return chart;
        };

        return d3.rebind(chart, brush, "on");


  }
}

  render(){
    return(
      <div>
        {this.makeCrossfilterChart()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { currentRepo: state.currentRepo };
}

export default connect(mapStateToProps)(CrossfilterChart);
