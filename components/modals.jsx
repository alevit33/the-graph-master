
module.exports.register = function (context) {

  var TheGraph = context.TheGraph;

  var element = function(){
  	const element = (
    	<div>
    	<h1>Hello, world!</h1>
    	<h2>It is {new Date().toLocaleTimeString()}.</h2>
    	</div>
    	);
    ReactDOM.render(
    	element,
    	document.getElementById('root')
    	);
  }


};
