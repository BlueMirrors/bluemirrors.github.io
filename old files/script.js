function animateName() {
	var name = "lueMirrors";
	var result = document.getElementById("name").innerHTML; 
	console.log(result+"here");
	var curr = result.length;
	if(curr >= (name.length+1)){
		result ="";

	}
	else if (curr===0){
		result = "B";
	}

	else{
		result += name[curr-1];
	}
	
	document.getElementById("name").innerHTML = result;
	console.log(result);


	
};

var mul = 0;
function zoom(){
	var incr = .1;
	if(mul >= 2){
		incr = -.1;
	}

	else if(mul <= 0 && incr <=0){
		incr = incr * (-1);
	}

	mul += incr;
	document.getElementById("data").style.fontSize = mul+"em";
}
