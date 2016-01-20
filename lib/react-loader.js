'use strict';

var React = require('react');
var classNames = require('classnames');

var ReactLoaderImg = React.createClass({
  displayName: 'ReactLoaderImg ',

  render: function render() {
    var hideLoader = classNames({
      'hidden': this.props.loaded
    });
    return React.createElement(
      'div',
      { className: "loader " + hideLoader },
      React.createElement('img', { src: (this.props.imgPath || window.imagesPath + "spinner.gif")})
    );
  }
});

module.exports = ReactLoaderImg;