var React = require('react')
var FlatIcon = require('./FlatIcon');

var Quality = React.createClass({
  render: function() {
    return (
		<div className="col span_1_of_4" style={{textAlign: 'center', paddingTop: '2em'}}>
			<div style={{paddingBottom: '1em'}}>
				<FlatIcon icon={this.props.icon} size="150%"></FlatIcon>
			</div>
			<p style={{maxWidth: "250px", margin: '0em auto', textAlign: 'center'}}>{this.props.children}</p>
		</div>
    )}
});

module.exports = Quality;