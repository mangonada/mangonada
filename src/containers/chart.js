/**

 * This is the container that displays the hour chart, weekday chart, date chart and commit list.
 * It needs access to the redux state to receive the commit data returned from the api call.
 * Does not need to dispatch to the redux state.
 *
 * While this is a container, React is not actually being used to manipulate the
 * DOM here. We simply call a function that will directly go to our canvas and
 * draw on it, bypassing React.
 */

/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

class CrossfilterChart extends Component {

  makeCrossfilterChart() {
    $('#stats').empty();
    $('#stats').html(`
        <div id="charts" class="container">
          <div class ="row">
            <div class="col-lg-2">
            </div>
            <div id="weekday-chart" class="chart col-lg-3 col-sm-10">
            <div class="title">Weekday</div>
            </div>
            <div id="hour-chart" class= "chart col-lg-5 col-sm-10">
              <div class="title">Time of Day</div>
            </div>
          </div>
          <div class="row">
            <div id="date-chart" class="chart col-md-12 col-sm-10">
              <div class="title">Date</div>
            </div>
          </div>
        </div>
        <div class ="row">
          <aside id="totals" class="col-xs-12">
          <span id="active">-</span> of <span id="total">-</span> commits selected.
          </aside>
        </div>
        <div id="lists">
          <div id="commit-list" class="list"></div>
        </div>`);
    /*


    NEED TO FIX, JSON commits are being placed in order in api.js. but sample data is not in order

    So in this code, initial state of sample json works and next api calls dont works,
    or initial state doesnt work and next api calls work.

     */

    const JSONCommits = this.props.currentRepo.JSONCommits.slice();
    let startDate = new Date(JSONCommits[0].commit.author.date);
    let endDate = new Date(JSONCommits[JSONCommits.length - 1].commit.author.date);

    // TEMP FIX because of initial state being in wrong order
    // reverses order of array
    if (startDate.getTime() > endDate.getTime()) {
      const temp = startDate;
      startDate = endDate;
      endDate = temp;
      JSONCommits.reverse();
    }

    // Calculate 25% and 75% of date for initial filter area to load for chart
    const timeBetween = endDate.getTime() - startDate.getTime();
    const quarterMark = Math.floor(timeBetween / 4);
    const filterStart = new Date(startDate.getTime() + quarterMark);
    const filterEnd = new Date(endDate.getTime() - quarterMark);
    const commits = JSONCommits;
      // Various formatters.
    const formatNumber = d3.format(',d');
    const formatDate = d3.time.format('%A, %B %d, %Y');
    const formatTime = d3.time.format('%I:%M %p');

    // A nest operator, for grouping the commit list.
    const nestByDate = d3.nest().key(d => d3.time.day(d.date));

    // Create array of weekdays to store in d.words property of commits
    const weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    // Add properties to each commit
    commits.forEach((d, i) => {
      // Convert date
      d.date = new Date(d.commit.author.date);
      // Add property to hold all words in commit and corresponding weekday
      d.words = JSON.stringify(d).toLowerCase() + weekdays[d.date.getDay()];
      // Add an index property
      d.index = i;
    });

    // Create the crossfilter for the relevant dimensions and groups.
    const commit = crossfilter(commits);
    const all = commit.groupAll();
    const date = commit.dimension(d => d.date);
    const dates = date.group(d3.time.day);
    const hour = commit.dimension(d => d.date.getHours() + (d.date.getMinutes() / 60));
    const hours = hour.group(Math.floor);
    const day = commit.dimension(d => d.date.getDay());
    const days = day.group(d => d);
    const word = commit.dimension(d => d.words);
    let charts;
    let mobileView = ($(window).width() < 960);
    // If viewed on mobile, make chart width smaller
    if (mobileView) {
      charts = [
        barChart()
        .dimension(day)
        .group(days)
        .x(d3.scale.linear()
        // Domain starts at -1 and ends at 7 to add extra tick as padding on the sides
        .domain([-1, 7])
        .rangeRound([0, 30 * 7])),
        barChart()
            .dimension(hour)
            .group(hours)
            .x(d3.scale.linear()
              .domain([0, 24])
              .rangeRound([0, 15 * 24])),
        barChart()
            .dimension(date)
            .group(dates)
            .x(d3.time.scale()
            // x-axis label of the chart
              .domain([startDate, endDate])
            // The range of the chart, how wide it is
              .rangeRound([0, 10 * 36]))
            // Filter is the part of barChart that is selected
            .filter([filterStart, filterEnd]),
      ];
    }else {
      charts = [
        barChart()
        .dimension(day)
        .group(days)
        .x(d3.scale.linear()
        // Domain starts at -1 and ends at 7 to add extra tick as padding on the sides
        .domain([-1, 7])
        .rangeRound([0, 30 * 7])),
        barChart()
            .dimension(hour)
            .group(hours)
            .x(d3.scale.linear()
              .domain([0, 24])
              .rangeRound([0, 18 * 24])),

        barChart()
            .dimension(date)
            .group(dates)
            .x(d3.time.scale()
            // x-axis label of the chart
              .domain([startDate, endDate])
            // The range of the chart, how wide it is
              .rangeRound([0, 18 * 36]))
            // Filter is the part of barChart that is selected
            .filter([filterStart, filterEnd]),
      ];
    }

    // Given our array of charts, which we assume are in the same order as the
    // .chart elements in the DOM, bind the charts to the DOM and render them.
    // We also listen to the chart's brush events to update the display.
    const chart = d3.selectAll('.chart')
        .data(charts)
        .each(chart => chart.on('brush', renderAll).on('brushend', renderAll));

    // Render the initial lists.
    const list = d3.selectAll('.list')
        .data([commitList]);

    // Render the total.
    d3.selectAll('#total')
        .text(formatNumber(commit.size()));

    renderAll();

    // Renders the specified chart or list.
    function render(method) {
      d3.select(this).call(method);
    }

    // Whenever the brush moves, re-rendering everything.
    function renderAll() {
      chart.each(render);
      list.each(render);
      d3.select('#active').text(formatNumber(all.value()));
    }

    window.filter = (filters) => {
      filters.forEach((d, i) => charts[i].filter(d));
      renderAll();
    };

    window.reset = (i) => {
      charts[i].filter(null);
      renderAll();
    };

    function commitList(div) {
      const commitsByDate = nestByDate.entries(date.top(40));
      div.each(function () {
        const date = d3.select(this).selectAll('.date')
            .data(commitsByDate, d => d.key);

        date.enter().append('div')
            .attr('class', 'date container')
          .append('span')
            .attr('class', 'day')
            // appends first date to top of list "Feburary 28, 2001"
            .text(d => formatDate(d.values[0].date));

        date.exit().remove();

        const commitItem = date.order().selectAll('.commit')
            .data(d => d.values, d => d.index);

        const commitEnter = commitItem.enter().append('div')
            .attr('class', 'commit row');

        // This is where they append data to divs
        commitEnter.append('div')
            .attr('class', 'time col-md-1 col-xs-3')
            .text(d => {
              let result = formatTime(d.date);
              // Remove beginning 0 if there is a 0 in front of the hours
              return result = result[0] === "0" ? result.slice(1) : result;
            });

        commitEnter.append('div')
            .attr('class', 'author col-md-2 col-xs-3')
            .text(d => d.author.login);

        commitEnter.append('div')
            .attr('class', 'sha-link col-md-2 col-xs-6')
            .html(d => `<span>SHA: <a href="${d.html_url}" target="_blank">${d.sha.slice(0, 9)}...</a></span>`);

        commitEnter.append('div')
            .attr('class', 'commit-message col-md-7 col-xs-12')
            .text(d => d.commit.message);

        commitItem.exit().remove();
        commitItem.order();
      });
    } // End of commitList function

    /**
     * [convertTime] Converts military time to standard AM/PM time
     * @param  {[number]} hour [military time in hours]
     * @return {[string]} standard time in hours % AM/PM
     */
    function convertTime(oldHour) {
      if (oldHour === 0 || oldHour === 24) {
        return '12AM';
      }
      const amPm = oldHour > 11 ? 'PM' : 'AM';
      const newHour = oldHour > 12 ? oldHour - 12 : oldHour;
      return newHour + amPm;
    }

    function barChart() {
      if (!barChart.id) barChart.id = 0;
      let margin = { top: 10, right: 15, bottom: 20, left: 15 };
      let x;
      let y = d3.scale.linear().range([100, 0]);
      const id = barChart.id++;
      let axis = d3.svg.axis().orient('bottom');
      const brush = d3.svg.brush();
      let brushDirty;
      let dimension;
      let group;
      let round;

      /**
      * If barchart.id is 1, it is the week day chart.
      * Change x-axis for weekday chart to have the days of the week instead of numbers
      */
      if (barChart.id === 1) {
        axis = d3.svg.axis().orient('bottom').tickFormat((d) => {
          if (!weekdays[d]) {
            return '';
          }
          return weekdays[d].slice(0, 1).toUpperCase() + weekdays[d].slice(1, 3);
        });
      }
      /**
       * If barchart.id is 2, it is the hourly chart
       * Change x-axis for hourly chart to have AM/PM time instead of military time
       */
      if (barChart.id === 2) {
        axis = d3.svg.axis().orient('bottom').tickFormat(d => {
          return convertTime(d);
        });
      }
      /**
      * If barchart.id is 3, it is the date chart
      * Change x-axis for date chart to display date in Mon date
      * If viewing on mobile, make every other tick on x-axis to be blank for spacing
      */
      if (barChart.id === 3) {
        let count = 0;
        axis = d3.svg.axis().orient('bottom').tickFormat(d => {
          count++;
          if (!mobileView || count % 2 === 1){
            return `${d.toString().slice(4,7)} ${d.getDate()}`;
          }
          return '';
        });
      }

      function chart(div) {
        let width = x.range()[1];
        const height = y.range()[0];
        // if scale is ordinal, adjust width accordingly
        if (x.range().length > 2) {
          width = x.range()[x.range().length - 1];
        }

        y.domain([0, group.top(1)[0].value]);

        div.each(function () {
          let div = d3.select(this),
            g = div.select('g');

          // Create the skeletal chart.
          if (g.empty()) {
            div.select('.title').append('a')
                .attr('href', 'javascript:reset(' + id + ')')
                .attr('class', 'reset')
                .text('reset')
                .style('display', 'none');

            g = div.append('svg')
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
              .append('g')
                .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

            g.append('clipPath')
                .attr('id', 'clip-' + id)
              .append('rect')
                .attr('width', width)
                .attr('height', height);

            g.selectAll('.bar')
                .data(['background', 'foreground'])
              .enter().append('path')
                .attr('class', d =>  d + ' bar')
                .datum(group.all());

            g.selectAll('.foreground.bar')
                .attr('clip-path', 'url(#clip-' + id + ')');

            g.append('g')
                .attr('class', 'axis')
                .attr('transform', 'translate(0,' + height + ')')
                .call(axis);

            // Initialize the brush component with pretty resize handles.
            const gBrush = g.append('g').attr('class', 'brush').call(brush);
            gBrush.selectAll('rect').attr('height', height);
            gBrush.selectAll('.resize').append('path').attr('d', resizePath);
          }

          // Only redraw the brush if set externally.
          if (brushDirty) {
            brushDirty = false;
            g.selectAll('.brush').call(brush);
            div.select('.title a').style('display', brush.empty() ? 'none' : null);
            if (brush.empty()) {
              g.selectAll('#clip-' + id + ' rect')
                  .attr('x', 0)
                  .attr('width', width);
            } else {
              const extent = brush.extent();
              g.selectAll('#clip-' + id + ' rect')
                  .attr('x', x(extent[0]))
                  .attr('width', x(extent[1]) - x(extent[0]));
            }
          }

          g.selectAll('.bar').attr('d', barPath);
        });

        function barPath(groups) {
          let path = [],
            i = -1,
            n = groups.length,
            d;
          while (++i < n) {
            d = groups[i];
            path.push('M', x(d.key), ',', height, 'V', y(d.value), 'h9V', height);
          }
          return path.join('');
        }

        function resizePath(d) {
          let e = +(d == 'e'),
            x = e ? 1 : -1,
            y = height / 3;
          return 'M' + (0.5 * x) + ',' + y
              + 'A6,6 0 0 ' + e + ' ' + (6.5 * x) + ',' + (y + 6)
              + 'V' + (2 * y - 6)
              + 'A6,6 0 0 ' + e + ' ' + (0.5 * x) + ',' + (2 * y)
              + 'Z'
              + 'M' + (2.5 * x) + ',' + (y + 8)
              + 'V' + (2 * y - 8)
              + 'M' + (4.5 * x) + ',' + (y + 8)
              + 'V' + (2 * y - 8);
        }
      }// End of chart function

      brush.on('brushstart.chart', function () {
        const div = d3.select(this.parentNode.parentNode.parentNode);
        div.select('.title a').style('display', null);
      });

      brush.on('brush.chart', function () {
        let g = d3.select(this.parentNode),
          extent = brush.extent();
        if (round) g.select('.brush')
            .call(brush.extent(extent = extent.map(round)))
          .selectAll('.resize')
            .style('display', null);
        g.select('#clip-' + id + ' rect')
            .attr('x', x(extent[0]))
            .attr('width', x(extent[1]) - x(extent[0]));
        dimension.filterRange(extent);
      });

      brush.on('brushend.chart', function () {
        if (brush.empty()) {
          const div = d3.select(this.parentNode.parentNode.parentNode);
          div.select('.title a').style('display', 'none');
          div.select('#clip-' + id + ' rect').attr('x', null).attr('width', '100%');
          dimension.filterAll();
        }
      });

      chart.margin = function (_) {
        if (!arguments.length) return margin;
        margin = _;
        return chart;
      };

      chart.x = function (_) {
        if (!arguments.length) return x;
        x = _;
        axis.scale(x);
        brush.x(x);
        return chart;
      };

      chart.y = function (_) {
        if (!arguments.length) return y;
        y = _;
        return chart;
      };

      chart.dimension = function (_) {
        if (!arguments.length) return dimension;
        dimension = _;
        return chart;
      };

      chart.filter = function (_) {
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

      chart.group = function (_) {
        if (!arguments.length) return group;
        group = _;
        return chart;
      };

      chart.round = function (_) {
        if (!arguments.length) return round;
        round = _;
        return chart;
      };

      return d3.rebind(chart, brush, 'on');
    }// End of barChart function

    /**
     * On form input, check if word exist in each word dimension,
     * if it does, filter to only show those commit
     * Utilized a flag variable to only render if neccessary
     */
    $('.form-control').on('input', function () {
      const term = this.value.toLowerCase().split(' ');
      let needToRender = false;
      word.filterFunction((d) => {
        const termCheck = term.map(input => d.includes(input));
        if (!termCheck.includes(false)) {
          needToRender = true;
          return true;
        }
      });
      if (needToRender) {
        renderAll();
      }
    });
  }

  render() {
    return (
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
