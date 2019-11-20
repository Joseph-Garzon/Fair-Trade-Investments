document.addEventListener("DOMContentLoaded", function(event) { 
  // your code here
var u=document.getElementById("username");
var p=document.getElementById("password");
var arr_u=["joseph","carlos","tully"];
var arr_p=["garzon","dilly","turtle"];
function check(){
	u=document.getElementById("username");
    p=document.getElementById("password");
	var us=u.value;
    var pa=p.value;
	for(var x=0;x<arr_u.length;x++){
		if(arr_u[x]===us){
			if(arr_p[x]===pa){
				alert("Sign in successful!");
			}else{
				alert("Incorrect password.");
			}
		}
	}
	if(!arr_u.includes(us)){
		alert("That username does not exist, try making an account.");
	}
}
document.getElementById("check").onclick = function changeContent() {
   check();
}
});
