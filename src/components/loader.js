/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _  from 'lodash';
import $ from 'jquery';

export default class Loader extends Component {
  makeLoader(){}
    loader(config) {

      return function() {
        // creates shape of loader
        var radius = Math.min(config.width, config.height) / 2;
        var tau = 2 * Math.PI;

        var arc = d3.svg.arc()
                .innerRadius(radius*0.5)
                .outerRadius(radius*0.9)
                .startAngle(0);

        // appends the svg to container
        var svg = d3.select(config.container).append("svg")
            .attr("id", config.id)
            .attr("width", config.width)
            .attr("height", config.height)
          .append("g")
            .attr("transform", "translate(" + config.width / 2 + "," + config.height / 2 + ")")

        // creates path (shape of an element) and calls spin
        var background = svg.append("path")
                .datum({endAngle: 0.33*tau})
                .style("fill", "#4D4D4D")
                .attr("d", arc)
                .call(spin, 1500)

        // rotates background (above)
        function spin(selection, duration) {
            selection.transition()
                .ease("linear")
                .duration(duration)
                .attrTween("transform", function() {
                    return d3.interpolateString("rotate(0)", "rotate(360)");
                });

            setTimeout(function() { spin(selection, duration); }, duration);
        }

        // updates path
        function transitionFunction(path) {
            path.transition()
                .duration(7500)
                .attrTween("stroke-dasharray", tweenDash)
                .each("end", function() { d3.select(this).call(transition); });
        }

      };
    }

    // creates loader
    var myLoader = loader({width: 960, height: 500, container: "#container", id: "loader"});
    myLoader();
  }

  render(){
    return (
      <div>{this.makeLoader}</div>
    );
  }
}
