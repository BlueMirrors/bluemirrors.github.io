var done=false;
var set=false;

var name;
var word;
function animateName() {

	if(!done){
		var place = document.getElementsByClassName("name")[0];
		var result = place.innerHTML;
		var visible = place.style.visibility
		if(!set && visible!="hidden"){
			name = result.slice(1,result.length);
			word=result[0];
			set =true;
		}
		var curr = result.length;
		if(curr >= (name.length+1)){
			result ="";

		}
		else if (curr===0){
			result = word;
		}

		else{
			result += name[curr-1];
		}

		document.getElementsByClassName("name")[0].innerHTML=result;
		if(result==word+name){
			done=true; 
			document.getElementsByClassName("text")[0].style.visibility = "visible";
		}
		console.log("here");
	}
};

setInterval(animateName, 150);