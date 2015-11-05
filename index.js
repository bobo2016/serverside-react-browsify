var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router
var Route = require('react-router').Route
var Link = require('react-router').Link

var HelloWorld = React.createClass({
	getInitialState : function(){
		return {
			name: "Charles"
		}
	},
	render : function(){
		var name =  this.state.name;
		return (
			<h1>Hello World, {name}</h1>
		)
	}
})

var Dashboard = React.createClass({
	render:function(){
		return (
			<div className = "dashboard">
				<TopHeader/>
				<MenuButton/>
				<LeftMenu/>
				<Header/>
				<GridContainer/>
			</div>
		)
	}
})

var LeftMenu =  React.createClass({
	render: function(){
		return (
			<div className="left-menu pure-menu custom-restricted-width">
			    <span className="pure-menu-heading">Summary</span>

			    <ul className="pure-menu-list">
			        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Daily Duty</a></li>
			        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Project Process</a></li>
			        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Vacation Summary</a></li>
			        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Other</a></li>
			    </ul>
			</div>
		)
	}
})


var MenuButton = React.createClass({
	render: function(){
		return (
			<div>
				<a href="#menu" className="menu-link">
			        <span></span>
			    </a>
			</div>
		)
	}
})

var TopHeader = React.createClass({
	render: function(){
		return (
			<div className="topHeader pure-menu pure-menu-horizontal pure-menu-scrollable">
				<a href="#" className="pure-menu-link pure-menu-heading">Dashboard</a>
		        <ul className="pure-menu-list">
		            <li className="pure-menu-item pure-menu-selected"><a href="#" className="pure-menu-link">Home</a></li>
		            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Tour</a></li>
		            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Sign Up</a></li>
		        </ul>
			</div>
		)
	}
})

var Header = React.createClass({
	render: function(){
		return(
			<div className="header">
	            <h1>DEPARTMENT STAFF</h1>
	            <h2>IT Dpartment</h2>
	        </div>
		)
	}
})


var Grid = React.createClass({
	getInitialState: function(){
		return{
			name: "Charles"
		}
	},

	render: function(){
		var name =  this.state.name;
		return (
			<div className="pure-g staff-summary">
			    <div className="pure-u-1 pure-u-md-1-3">
			    	<img className="thumbnail-img" src="http://placehold.it/200x200" alt="thumbnail img"></img>
			    	<div className="desc">
			    		<h2>Name: Charles</h2>
			    		<span className="title">Title:</span>
			    		<span className="duty">Duty:</span>
			    	</div>
			    </div>
			    <div className="pure-u-1 pure-u-md-1-3">
			    	<img className="thumbnail-img" src="http://placehold.it/200x200" alt="thumbnail img"></img>
			    	<div className="desc">
			    		<h2>Name: Charles</h2>
			    		<span className="title">Title:</span>
			    		<span className="duty">Duty:</span>
			    	</div>
			    </div>
			    <div className="pure-u-1 pure-u-md-1-3">
			    	<img className="thumbnail-img" src="http://placehold.it/200x200" alt="thumbnail img"></img>
			    	<div className="desc">
			    		<h2>Name: Charles</h2>
			    		<span className="title">Title:</span>
			    		<span className="duty">Duty:</span>
			    	</div>
			    </div>
			    <div className="pure-u-1 pure-u-md-1-3">
			    	<img className="thumbnail-img" src="http://placehold.it/200x200" alt="thumbnail img"></img>
			    	<div className="desc">
			    		<h2>Name: Charles</h2>
			    		<span className="title">Title:</span>
			    		<span className="duty">Duty:</span>
			    	</div>
			    </div>
			    <div className="pure-u-1 pure-u-md-1-3">
			    	<img className="thumbnail-img" src="http://placehold.it/200x200" alt="thumbnail img"></img>
			    	<div className="desc">
			    		<h2>Name: Charles</h2>
			    		<span className="title">Title:</span>
			    		<span className="duty">Duty:</span>
			    	</div>
			    </div>
			    <div className="pure-u-1 pure-u-md-1-3">
			    	<img className="thumbnail-img" src="http://placehold.it/200x200" alt="thumbnail img"></img>
			    	<div className="desc">
			    		<h2>Name: Charles</h2>
			    		<span className="title">Title:</span>
			    		<span className="duty">Duty:</span>
			    	</div>
			    </div>
			    <div className="pure-u-1 pure-u-md-1-3">
			    	<img className="thumbnail-img" src="http://placehold.it/200x200" alt="thumbnail img"></img>
			    	<div className="desc">
			    		<h2>Name: Charles</h2>
			    		<span className="title">Title:</span>
			    		<span className="duty">Duty:</span>
			    	</div>
			    </div>
			    <div className="pure-u-1 pure-u-md-1-3">
			    	<img className="thumbnail-img" src="http://placehold.it/200x200" alt="thumbnail img"></img>
			    	<div className="desc">
			    		<h2>Name: Charles</h2>
			    		<span className="title">Title:</span>
			    		<span className="duty">Duty:</span>
			    	</div>
			    </div>
			    <div className="pure-u-1 pure-u-md-1-3">
			    	<img className="thumbnail-img" src="http://placehold.it/200x200" alt="thumbnail img"></img>
			    	<div className="desc">
			    		<h2>Name: Charles</h2>
			    		<span className="title">Title:</span>
			    		<span className="duty">Duty:</span>
			    	</div>
			    </div>
			    <div className="pure-u-1 pure-u-md-1-3">
			    	<img className="thumbnail-img" src="http://placehold.it/200x200" alt="thumbnail img"></img>
			    	<div className="desc">
			    		<h2>Name: Charles</h2>
			    		<span className="title">Title:</span>
			    		<span className="duty">Duty:</span>
			    	</div>
			    </div>
			</div>
		)
	}
})

var GridContainer =  React.createClass({
	render: function(){
		return (
			<div className="grid-ctnr">
				<Grid></Grid>
			</div>
		)
	}
})
/*var Menu = React.createClass({
	render:function(){
		return(
			    <a href="#menu" className="menu-link">
			        <span></span>
			    </a>

			    <div className="menu">
			        <div className="pure-menu">
			            <a className="pure-menu-heading" href="#">Company</a>

			            <ul className="pure-menu-list">
			                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
			                <li className="pure-menu-item"><a href="#" className="pure-menu-link">About</a></li>

			                <li className="pure-menu-item" className="menu-item-divided pure-menu-selected">
			                    <a href="#" className="pure-menu-link">Services</a>
			                </li>

			                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Contact</a></li>
			            </ul>
			        </div>
			    </div>
		)
	}
})
*/





ReactDOM.render(<Dashboard></Dashboard>, document.getElementById('react-demo'));


