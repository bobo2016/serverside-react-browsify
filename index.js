var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Routes = require('react-router').Routes;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var StateMixin = require('react-router').State;

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
			name: "Charles Zhang",
			title: "Web Developer",
			duty: "Build awesome website"
		}
	},

	render: function(){
		var name =  this.state.name,
			title = this.state.title,
			duty = this.state.duty;
		return (
			<div className="pure-g staff-summary">
			    <div className="pure-u-1 pure-u-md-1-3">
			    	<img className="thumbnail-img" src="http://placehold.it/200x200" alt="thumbnail img"></img>
			    	<div className="desc">
			    		<h2>Name: {name}</h2>
			    		<span className="title">Title: {title}</span>
			    		<span className="duty">Duty: {duty}</span>
			    	</div>
			    </div>
			    <div className="pure-u-1 pure-u-md-1-3">
			    	<img className="thumbnail-img" src="http://placehold.it/200x200" alt="thumbnail img"></img>
			    	<div className="desc">
			    		<h2>Name: {name}</h2>
			    		<span className="title">Title: {title}</span>
			    		<span className="duty">Duty: {duty}</span>
			    	</div>
			    </div>
			    <div className="pure-u-1 pure-u-md-1-3">
			    	<img className="thumbnail-img" src="http://placehold.it/200x200" alt="thumbnail img"></img>
			    	<div className="desc">
			    		<h2>Name: {name}</h2>
			    		<span className="title">Title: {title}</span>
			    		<span className="duty">Duty: {duty}</span>
			    	</div>
			    </div>
			    <div className="pure-u-1 pure-u-md-1-3">
			    	<img className="thumbnail-img" src="http://placehold.it/200x200" alt="thumbnail img"></img>
			    	<div className="desc">
			    		<h2>Name: {name}</h2>
			    		<span className="title">Title: {title}</span>
			    		<span className="duty">Duty: {duty}</span>
			    	</div>
			    </div>
			    <div className="pure-u-1 pure-u-md-1-3">
			    	<img className="thumbnail-img" src="http://placehold.it/200x200" alt="thumbnail img"></img>
			    	<div className="desc">
			    		<h2>Name: {name}</h2>
			    		<span className="title">Title: {title}</span>
			    		<span className="duty">Duty: {duty}</span>
			    	</div>
			    </div>
			    <div className="pure-u-1 pure-u-md-1-3">
			    	<img className="thumbnail-img" src="http://placehold.it/200x200" alt="thumbnail img"></img>
			    	<div className="desc">
			    		<h2>Name: {name}</h2>
			    		<span className="title">Title: {title}</span>
			    		<span className="duty">Duty: {duty}</span>
			    	</div>
			    </div>
			    <div className="pure-u-1 pure-u-md-1-3">
			    	<img className="thumbnail-img" src="http://placehold.it/200x200" alt="thumbnail img"></img>
			    	<div className="desc">
			    		<h2>Name: {name}</h2>
			    		<span className="title">Title: {title}</span>
			    		<span className="duty">Duty: {duty}</span>
			    	</div>
			    </div>
			    <div className="pure-u-1 pure-u-md-1-3">
			    	<img className="thumbnail-img" src="http://placehold.it/200x200" alt="thumbnail img"></img>
			    	<div className="desc">
			    		<h2>Name: {name}</h2>
			    		<span className="title">Title: {title}</span>
			    		<span className="duty">Duty: {duty}</span>
			    	</div>
			    </div>
			    <div className="pure-u-1 pure-u-md-1-3">
			    	<img className="thumbnail-img" src="http://placehold.it/200x200" alt="thumbnail img"></img>
			    	<div className="desc">
			    		<h2>Name: {name}</h2>
			    		<span className="title">Title: {title}</span>
			    		<span className="duty">Duty: {duty}</span>
			    	</div>
			    </div>
			    <div className="pure-u-1 pure-u-md-1-3">
			    	<img className="thumbnail-img" src="http://placehold.it/200x200" alt="thumbnail img"></img>
			    	<div className="desc">
			    		<h2>Name: {name}</h2>
			    		<span className="title">Title: {title}</span>
			    		<span className="duty">Duty: {duty}</span>
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
});


/*var routes = (
	<Routes location = "hash">
		<Route path="/" handler = {App}>
			<Route path="books" name="bookList" handler={Books}/>
			<Route path="movies" name="movieList" handler={Movies}/>
		</Route>
	</Routes>

)

var App = React.createClass({
	render: function(){
		return (
			<div className = "main">
				<nav>
					<Link to="bookList">Books</Link>
					<Link to="movieList">Movies</Link>
				</nav>
				<section>
					<RouteHandler>
				</section>
			</div>
		)
	}
});

var Books = React.createClass({
	render: function(){
		return (
			<div>	
				<ul>
					<li>Live</li>
					<li>Harry potter</li>
					<li>Audacity of Hope</li>
				</ul>
				<RouteHandler/>
			</div>
		)
	}
});

var Movies =  React.createClass({
	render: function(){
		return (
			<div>
				<ul>
					<li>Movie1</li>
					<li>Movie2</li>
					<li>Movie3</li>
				</ul>
				<RouteHandler/>
			</div>
		)
	}
});

var Movie =  React.createClass({
	mixins: [StateMixin],

	render: function(){
		return(
			<article>
				<h1>movie description</h1>
			</article>
		)
	}

})
*/

ReactDOM.render(<Dashboard></Dashboard>, document.getElementById('main-content'));
//React.renderComponent(routes, document.body);



