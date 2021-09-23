var timeleft = 10;

function countdown(timeleft, cb) {
	console.log(timeleft);
	setTimeout(function(){
		document.getElementById("seconds").innerHTML = String(--timeleft);
	}, 1000)
	setTimeout(function(){
		document.getElementById("seconds").innerHTML = String(--timeleft);
	}, 2000)
	setTimeout(function(){
		document.getElementById("seconds").innerHTML = String(--timeleft);
	}, 3000)
	setTimeout(function(){
		document.getElementById("seconds").innerHTML = String(--timeleft);
	}, 4000)
	setTimeout(function(){
		document.getElementById("seconds").innerHTML = String(--timeleft);
	}, 5000)
	setTimeout(function(){
		document.getElementById("seconds").innerHTML = String(--timeleft);
	}, 6000)
	setTimeout(function(){
		document.getElementById("seconds").innerHTML = String(--timeleft);
	}, 7000)
	setTimeout(function(){
		document.getElementById("seconds").innerHTML = String(--timeleft);
	}, 8000)
	setTimeout(function(){
		document.getElementById("seconds").innerHTML = String(--timeleft);
		cb(timeleft);
	}, 9000)
	
}

countdown(10, function(timeleft){
	setTimeout(function(){
		document.getElementById("clock").style.display = "none";
		document.getElementById("display").style.display = ""}, 1000);
})