var React = require('react');
var ReactDOM = require('react-dom');

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
			<LeftMenu></LeftMenu>
		)
	}
})

var LeftMenu =  React.createClass({
	render: function(){
		return (

			/*<a href="#menu" className="menu-link">
			        <span></span>
			    </a>*/
			<div className="pure-menu custom-restricted-width">
			    <span className="pure-menu-heading">Dashboard</span>

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


