require("../style/main.scss")
require("../style/fonts/stroke.scss")
var React = require('react')
var FlatIcon = require('./FlatIcon');

var Introduction = React.createClass({
  render: function() {
    return (
		<div style={{height: "100%"}}>
			<div style={{height: "80%"}}>
		    	<div className="section group">
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
				    	Hello!<br /><br />Welcome to my slice of the internet. I am a freelance software developer 
				    	based in Brisbane, Australia. I have worked on a wide range of projects in both desktop 
				    	and web environments. I love solving problems and learning new things.<br /><br />Lets work together.
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