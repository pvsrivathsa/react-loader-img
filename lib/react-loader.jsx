var React = require('react');
var classNames = require('classnames');

var ReactLoaderImg = React.createClass({
  render: function() {
    var hideLoader = classNames({
      'hidden': this.props.loaded
    });
    return (
      <div className={"loader " + hideLoader}>
        <img src={this.props.imgPath}/>
      </div>);
  }
});

module.exports = ReactLoaderImg;