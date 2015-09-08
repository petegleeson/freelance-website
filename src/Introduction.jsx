require("../style/main.scss")
require("../style/fonts/stroke.scss")
var React = require('react')
var SplashIcon = require('./SplashIcon');

var Introduction = React.createClass({
  render: function() {
    return (
		<div>
	    	<div className="section group">
				<div className="col span_1_of_4">
					<SplashIcon icon="flaticon stroke lightbulb-1"></SplashIcon>
				</div>
				<div className="col span_1_of_4">
					<SplashIcon icon="flaticon stroke bucket-1"></SplashIcon>
				</div>
				<div className="col span_1_of_4">
					<SplashIcon icon="flaticon stroke computer-1"></SplashIcon>
				</div>
				<div className="col span_1_of_4">
					<SplashIcon icon="flaticon stroke chat-2"></SplashIcon>
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
   	)}
});

module.exports = Introduction;