function initMostWanted(people){

	alert("Welcome to my Super Secret government search engine!");	
	do{
		var searchType = prompt("Do you want to search by name or attributes? Enter word 'name' or 'attributes' here.");
	}while(!(searchType == "name" || searchType == "attributes"));
	switch(searchType){
		case "name":
			var person = searchByName(prompt("What is the persons first name?"), prompt("And now the last name please?"), people);
			if (person){
			mainMenu(person, people);	
		} else {
			alert("Please enter a relavent name.");
		}
			
		break;
		case "attributes":
		
			var height = prompt("What is the height? If not then leave blank.");
			var weight = prompt("What is the weight? If not then leave blank.");
			var age = prompt("Do you know the persons age? If not then leave blank.");
			var sex= prompt("What is the sex? If not then leave blank.");
			var eyeColor = prompt("What is the eye color? If not then leave blank.");
			var occupation = prompt("What is their occupation? If not then leave blank.");

			// find a subset from your list of people
			var filteredList = searchByAttributes(height, weight, age, sex, eyeColor,occupation, people);

			// allow the user to select a person from the subset
			var selectedPerson = pickPerson(filteredList);

			// send the selected person to the main menu where the user can view information about them
			mainMenu(selectedPerson, people);
		break;
		default:
		alert("There was an error processing your request.");
		initMostWanted(people);
	}
}

function searchByName(firstName, lastName, people){
	var person= people.filter(person =>person.firstName === firstName && person.lastName === lastName);
	return person[0];
}

function searchByAttributes(height, weight, age, sex, eyeColor,occupation,people){
	return people.filter(function(person){
		if (height && (height != person.height)){
			return false;
		} if (weight && (weight != person.weight)){
			return false;
		} if (age && (age != person.dob)){
			return false;
		} if (sex && (sex != person.gender)){
			return false;
		} if (eyeColor && (eyeColor != person.eyeColor)){
			return false;
		} if (occupation && (occupation != person.occupation)){
			return false;
		}
		return true;
	});
}

function pickPerson(filteredList){
	//if(filteredList.length > 1){
		var message=""; 
		for (var i=0; i < filteredList.length; i++){
			message += (i +": "+filteredList[i].firstName+ " " +filteredList[i].lastName+"  ");
		}
		// else {
		// 		message += (i +"Found one match: "+filteredList[i].firstName+ " " +filteredList[i].lastName+"  ");
		// }else if (filteredList[i].length = 1){
		// 		message += (i +"Found one match: "+filteredList[i].firstName+ " " +filteredList[i].lastName+"  ");				
		// }
		//}
	



	alert(message);

	var chosenPerson = prompt("Type the number of the person you would like to know more about?");
	 return filteredList[chosenPerson];
}

function mainMenu(person, people){
/*	if(!person){
		alert("Criteria not found.");
		initMostWanted(people);
	}
*/	var displayInfo = prompt("Found: "+person.firstName+ " " +person.lastName+" Would you like to search for their 'info', 'family' or 'decendents'? Otherwise type 'quit' or 'restart'.");
	switch(displayInfo){
		case "info":
		getPersoninfo(person, people);
	break;
		case "family":
		getFamily(person,people);
	break;

		case "decendents":
		getDecendents(person,people);

	break;
		case "quit":

	break;
		case "restart":
		initMostWanted(people);

	break;
	default:
}}

function getPersoninfo(person, people){
	alert("Name is: "+person.firstName+" "+person.lastName+"\nBirthday is: "+person.dob+"\nHeight is: "+person.height+"\nWeight is: "+person.weight+"\nOccupation is: "+person.occupation+".");
	mainMenu(person,people);
}

function getFamily(person,people){
	prompt("Would you like to search for parents or current spouse?");

		mainMenu(person,people);	
}


function getDecendents(person, people){

}
/*
function getParents(person,people){
	return people.filter(function(p){
		if((p.id == person.parents[0] && p.id) || p.id == person.parents[1].id){
			return true;
		} else{
				return false;
			}
})};
*/	










