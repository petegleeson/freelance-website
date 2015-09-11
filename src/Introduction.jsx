require("../style/main.scss")
require("../style/fonts/stroke.scss")
var React = require('react')
var FlatIcon = require('./FlatIcon');

var Introduction = React.createClass({
  render: function() {
    return (
		<div style={{height: "100%"}}>
			<div style={{height: "80%"}}>
		    	<div className="section group" style={{padding: "2em 1em 0em 1em"}}>
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
				    	<p style={{padding: '0em 1em', textAlign: 'justify'}}>
				    	Hello! My name is Peter Gleeson, welcome to my slice of the internet. I am a <span className='bold'>freelance software developer</span> based in Brisbane, Australia. I have worked on a wide range of projects in both <span className='bold'>desktop and web</span> environments. I love solving problems and learning new things.<br />Lets work together.
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