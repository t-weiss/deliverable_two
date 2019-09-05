var result  = "OOPS";
var eventType = ""

do {
  var temp = prompt("What kind of event are you attending?", "casual, semi-formal, or formal");
  temp = temp.toLowerCase();
  if ( temp == null){
  }
  else if (temp != "casual" && temp != "semi-formal" && temp != "formal") {
    alert("I'm not sure what type of event you are attending. Please try again.");
  } else {
	eventType = temp
  }
}
while (temp != null && eventType == "");

tempFahr = ""
if ( eventType != "") {
	do {
	  var temp = prompt("what is the temperature (in fahrenheit)");
	  if ( temp == null){
      }
	  else if (isNaN(parseInt(temp, 10))) {
	    alert("Please enter a number for the temperature.");
	  } else {
		tempFahr = temp
	  }
	}
	while (temp != null && tempFahr == "");
}

if (eventType != "" && tempFahr != "") {
	if (eventType == "casual") {   
	   if (tempFahr < 54){
		result = "something comfy with a coat.";
	   } else if (tempFahr >= 54 && tempFahr <= 70) {
		result = "something comfy with a jacket.";
	   } else if (tempFahr > 70) {
		result = "something comfy without a jacket.";
	   } else {
		result = "BAD";
	   }
	} else if (eventType == "semi-formal") {
	  if (tempFahr < 54) {
		result = "a polo with a coat.";
	  } else if (tempFahr >= 54 && tempFahr <= 70) {
		result = "a polo with a jacket.";
	  } else if (tempFahr > 70){
		result = "a polo without a jacket.";
	  } else {
		result = "BAD";
	  }
	} else if (eventType == "formal") {
	  if (tempFahr < 54) {
		result = "a suit with a coat.";
	  } else if (tempFahr >= 54 && tempFahr <= 70) {
		result = "a suit with a jacket.";
	  } else if (tempFahr > 70) {
		result = "a suit without a jacket.";
	  } else {
		result = "BAD";
	  }
	} else {
	  eventType = 0;
	}
	console.log("Since it is " + tempFahr +" degrees out, and you are attending a " + eventType +" event, you should wear " + result);
	alert("Since it is " + tempFahr +" degrees out, and you are attending a " + eventType +" event, you should wear " + result);
}