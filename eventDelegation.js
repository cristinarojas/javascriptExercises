// JS event listeners fire not only on a single DOM element but on all its descendants.
<div id="myDiv">
	<a href="#home" class="home">Home</a>
	<a href="#dashboard" class="dashboard">Dashboard</a>
</div>

document.getElementById('myDiv').addEventListener('click', function(e) {
	if (e.target && e.target.matches('a.home')) {
		console.log('Home anchor was clicked');
	}
}, false);
