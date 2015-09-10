var React = require('react')
var FlatIcon = require('./FlatIcon')
var Quality = require('./Quality')

var Qualities = React.createClass({
  render: function() {
    return (
    	<div>
	    	<div className="section group" style={{paddingBottom: "2em"}}>
	    		<Quality icon="lightbulb-1">
		    		Existing system or just an idea, no matter what stage of development you are at, I can jump in and quickly get going.
	    		</Quality>
	    		<Quality icon="bucket-1">
		    		I am committed to providing a great user experience. I make sure I am up to date with the latest web trends. Software should be beautiful!
    			</Quality>
	    		<Quality icon="computer-1">
		    		Developing for web and desktop has made me familiar with many technologies. Whatever the project, I will make sure the right technology is driving it.
    			</Quality>
	    		<Quality icon="chat-1">
		    		I will talk to you! I understand the importance of communication between client and developer.
    			</Quality>
			</div>
    	</div>
   	)}
});

module.exports = Qualities;