var React = require('react')
var FlatIcon = require('./FlatIcon')

var Footer = React.createClass({
  render: function() {
    return (
    	<div className="section group" style={{padding: "2em 0"}}>
	    	<div className="col span_4_of_4">
	    		<div style={{margin: '0em auto', textAlign: 'center'}}>
					<div>
						<FlatIcon icon="mail-4" size="150%"></FlatIcon>
					</div>
					<p>petergleeson.dev@gmail.com</p>
	    		</div>
	    	</div>
    	</div>
   	)}
});

module.exports = Footer;