document.addEventListener("DOMContentLoaded", function(event) { 
  // your code here
var name= prompt("Username:");
var pass= prompt("Password:");
var arr_u=["joseph","carlos","tully"];
var arr_p=["garzon","dilly","turtle"];
function check(){
	for(var x=0;x<arr_u.length;x++){
		if(arr_u[x]===name){
			if(arr_p[x]===pass){
				alert("Sign in successful!");
			}else{
				alert("Incorrect password.");
			}
		}
	}
	if(!arr_u.includes(name)){
		alert("That username does not exist, try making an account.");
	}
}
check();
});