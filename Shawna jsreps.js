//1. Variable additons: Numbers - Finished
var holidaysJan = 7;
var holidaysShawna = 6;

function holidayCounter(holidaysJan, holidaysShawna){ 
	var totalHolidays = parseInt(holidaysJan) + parseInt(holidaysShawna);
	console.log(totalHolidays);
}
holidayCounter(holidaysJan, holidaysShawna);

//1.1 Variable additons: Strings - finished
var month="June";
var name="Shawna";
function addMonthName(month, name){ 
	var monthName = month + name;
	console.log(monthName)
}

addMonthName(month, name);

//2.multidimensional array with output 2 inputs in sub-arrays
var bikeArray = [["specialized", "pinarello", "bianchi"],[2017,2016,2015],["sky","jumbo"]];
//first loop:select object with loop, nested loop: select object
var bikeBrand = bikeArray[0][1];
console.log(bikeBrand);

var bikeYear = bikeArray[1][0];
console.log(bikeYear);

//3. check if var less than 100 with alerts

var dataCheck = 60; 
if (dataCheck < 100){
	alert("This is less than 100");
}
else {
	alert([dataCheck," Your number was greater than or equal to 100"]);
}

//4 name as an argument --> tells the user what name they've entered

function registry(firstName){
	alert("Name registered is: " + firstName);
}
registry("John Snow");

//5 function choose a 'door' --> tells the user they've received a different 'prize' in an alert. 3 doors.

function chooseDoor(someDoor){
//if door 1
// 1st console.log(someDoor);
	if (someDoor === "door1"){
		alert("You've won a chocolate");
	}
	else if(someDoor === "door2"){
		alert("You've won a beer");
	}
	else if(someDoor === "door3"){
		alert("You've won a t-shirt");
	}
	else{
		alert("Choose door 1 to 3");
	}
}

chooseDoor("door3");
chooseDoor("door2");
chooseDoor("door3");

