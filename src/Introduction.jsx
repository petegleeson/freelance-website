require("../style/main.scss")
require("../style/fonts/stroke.scss")
var React = require('react')
var FlatIcon = require('./FlatIcon');

var Introduction = React.createClass({
  render: function() {
    return (
		<div style={{height: "100%"}}>
			<div style={{height: "80%"}}>
		    	<div className="section group" style={{padding: "1em 2em"}}>
		    		<div className="col span_1_of_4 unresponsive">
						<FlatIcon icon="lightbulb-1" size="150%"></FlatIcon>
					</div>
		    		<div className="col span_1_of_4 unresponsive">
						<FlatIcon icon="bucket-1" size="150%"></FlatIcon>
					</div>
		    		<div className="col span_1_of_4 unresponsive">
						<FlatIcon icon="computer-1" size="150%"></FlatIcon>
					</div>
		    		<div className="col span_1_of_4 unresponsive">
						<FlatIcon icon="chat-1" size="150%"></FlatIcon>
					</div>
		    	</div>
	    		<div className="section group">
	    			<div className="col span_4_of_4">
				    	<p>
				    	Curabitur ornare suscipit pharetra. Morbi elit eros, mattis eu augue eu, aliquet pretium mauris. Duis sit amet mollis metus. Vestibulum hendrerit sapien vel sem interdum malesuada. Donec sit amet consequat enim. Aliquam tellus orci, mattis at ligula eget, cursus porta dolor. Nulla vitae bibendum turpis, at imperdiet enim.
						</p>
					</div>
				</div>
			</div>
			<div style={{height: "20%"}}>
    			<FlatIcon icon="down-2" size="200%"></FlatIcon>
			</div>
		</div>
   	)}
});

module.exports = Introduction;