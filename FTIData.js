$(document).ready(function () {

var carlos={
	LName:"Espinoza",
	FName:"Carlos",
	age:2,
	CCNum:"1111-1111-1111",
	SSNum:"999-99-9999",
	accountNum:998
};

var smallBrain={
	LName:"Something",
	FName:"Ahbi",
	age:0,
	CCNum:"2222-2222-2222",
	SSNum:"888-88-8888",
	accountNum:991
};

var accounts=[carlos,smallBrain];

for (var i = 0; i < accounts.length; i++) {
	$('#'+i+' #accountNum').text(accounts[i].accountNum);
	$('#'+i+' #lastName').text(accounts[i].LName);
	$('#'+i+' #firstName').text(accounts[i].FName);
	$('#'+i+' #age').text(accounts[i].age);
	$('#'+i+' #creditNum').text(accounts[i].CCNum);
	$('#'+i+' #socSecNum').text(accounts[i].SSNum);

}

});
