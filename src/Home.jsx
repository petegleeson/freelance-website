require("../style/main.scss")
require("../style/fonts/stroke.scss")
var React = require('react')
var Header = require("./Header")
var Introduction = require("./Introduction")
var Qualities = require("./Qualities")
var Footer = require("./Footer")
var SplashIcon = require('./SplashIcon')

var Home = React.createClass({
  render: function() {
    return (
    	<div id='wrapper'>
    		<div id='top-row' className='row'>
				<div id="header-content">
		    		<Header/>
	    		</div>
	    		<div id="introduction-content">
		    		<Introduction />
	    		</div>
		    	<img className="bg" src="http://i.imgur.com/8ZwdeDF.jpg" /> 
    		</div>
    		<div id="middle-content" className='row'>
				<div className="content">
	    			<Qualities />
    			</div>
			</div>
    		<div className='row'>
				<div className="content">
	    			<Footer />
    			</div>
			</div>
		</div>
    );
  }
});

module.exports = Home;