var React = require('react')

var SplashIcon = React.createClass({
  render: function() {
    return (
		<div className={this.props.icon + ' splash-icon'}></div>
   	)}
});

module.exports = SplashIcon;