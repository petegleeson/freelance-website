var React = require('react')
var FlatIcon = require('./FlatIcon')
var Quality = require('./Quality')

var Qualities = React.createClass({
  render: function() {
    return (
    	<div>
	    	<div className="section group" style={{paddingBottom: "2em"}}>
	    		<Quality icon="lightbulb-1">
	    			Morbi hendrerit lacinia suscipit. Nullam id mattis sapien. Ut ullamcorper pretium turpis in placerat. Cras velit erat, vestibulum eget gravida sit amet, tempor et justo.
	    		</Quality>
	    		<Quality icon="bucket-1">
	    			Etiam eget lectus odio. Suspendisse eu efficitur velit, vitae fermentum ex. Sed efficitur cursus odio, non tristique nulla mattis id.
    			</Quality>
	    		<Quality icon="computer-1">
	    			Donec aliquet id augue id feugiat. Morbi sodales tellus finibus venenatis dapibus. In iaculis auctor metus eget bibendum.
    			</Quality>
	    		<Quality icon="chat-1">
	    			Ut ultrices urna enim, nec ultricies massa rhoncus sed. Etiam arcu augue, rutrum vitae efficitur eget, ultrices ullamcorper purus.
    			</Quality>
			</div>
    	</div>
   	)}
});

module.exports = Qualities;