require("../style/main.scss")
require("../style/fonts/stroke.scss")
var React = require('react')
var Header = require("./Header")
var Introduction = require("./Introduction")
var Qualities = require("./Qualities")
var Footer = require("./Footer")
var FlatIcon = require("./FlatIcon")

var Home = React.createClass({
  render: function() {
    return (
    	<div id='wrapper'>
    		<div id="top-wrapper">
    			<div id="bg">
		    		<div id='top-row' className='row'>
						<div id="header-content">
				    		<Header/>
			    		</div>
			    		<div id="introduction-content">
				    		<Introduction />
			    		</div>
		    		</div>
    			</div>
    		</div>
    		<div id="middle-row" className='row'>
				<div className="content">
	    			<Qualities />
    			</div>
			</div>
    		<div id="bottom-row" className='row'>
				<div className="content">
	    			<Footer />
    			</div>
			</div>
		</div>
    );
  }
});

module.exports = Home;