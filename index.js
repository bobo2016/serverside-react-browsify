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

ReactDOM.render(<HelloWorld></HelloWorld>, document.getElementById('react-demo'));


