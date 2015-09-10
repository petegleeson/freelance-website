require("../style/fonts/stroke.scss")
var React = require('react')

var defaultSize = '100%';

var FlatIcon = React.createClass({
  render: function() {
    return (
		<span className={'flaticon stroke ' + this.props.icon} style={{fontSize : this.props.size || defaultSize}}></span>
   	)}
});

module.exports = FlatIcon;