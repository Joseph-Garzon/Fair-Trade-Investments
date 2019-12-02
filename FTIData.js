$(document).ready(function () {
 
var carlos={
	LName:"Espinoza",
	FName:"Carlos",
	age:2,
	CCNum:"1111-1111-1111-1111",
	SSNum:"999-99-9999",
	accountNum:998
};

var smallBrain={
	LName:"Something",
	FName:"Ahbi",
	age:12,
	CCNum:"2222-2222-2222-2222",
	SSNum:"888-88-8888",
	accountNum:997
};

var a={
	LName:"Gibbs",
	FName:"Matteo",
	age:6,
	CCNum:"3333-3333-3333-3333",
	SSNum:"777-77-7777",
	accountNum:996
};
var b={
	LName:"Boyle",
	FName:"Arjun",
	age:45,
	CCNum:"4444-4444-4444-4444",
	SSNum:"666-66-6666",
	accountNum:995
};
var c={
	LName:"Whitaker",
	FName:"Elena",
	age: 67,
	CCNum:"5555-5555-5555-5555",
	SSNum:"555-55-5555",
	accountNum:994
};
var d={
	LName:"Blackburn",
	FName:"Travis",
	age: 34,
	CCNum:"6666-6666-6666-6666",
	SSNum:"444-44-4444",
	accountNum:993
};
var e={
	LName:"Glenn",
	FName:"Victor",
	age: 56,
	CCNum:"7777-7777-7777-77777",
	SSNum:"333-33-3333",
	accountNum:992
};
var f={
	LName:"Calhoun",
	FName:"Kira",
	age:78,
	CCNum:"8888-8888-8888-8888",
	SSNum:"222-22-2222",
	accountNum:991
};
var g={
	LName:"Montoya",
	FName:"Nora",
	age: 27,
	CCNum:"9999-9999-9999-9999",
	SSNum:"111-11-1111",
	accountNum:990
};
var h={
	LName:"Saunders",
	FName:"Muhammad",
	age:34,
	CCNum:"1234-5678-9123-4567",
	SSNum:"000-00-0000",
	accountNum:999
};

var accounts=[carlos,smallBrain,a,b,c,d,e,f,g,h];

for (var i = 0; i < accounts.length; i++) {
	$('#'+i+' #accountNum').text(accounts[i].accountNum);
	$('#'+i+' #lastName').text(accounts[i].LName);
	$('#'+i+' #firstName').text(accounts[i].FName);
	$('#'+i+' #age').text(accounts[i].age);
	$('#'+i+' #creditNum').text(accounts[i].CCNum);
	$('#'+i+' #socSecNum').text(accounts[i].SSNum);
}

});
