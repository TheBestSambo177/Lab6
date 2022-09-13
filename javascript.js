//alert("Hello");
//Data: assume we have a list of top 5 movies - a list of JAVASCRIPT Objects
let topMovies = [{id: 0, title: "The Shawshank Redemption", year: 1994, image_url: "MEDIA/movie0.jpg"},
				 {id: 1, title: "The Godfather ", year: 1972, image_url: "MEDIA/movie1.jpg"},
				 {id: 2, title: "The Dark Knight", year: 2008, image_url: "MEDIA/movie2.jpg"},
			     {id: 3, title: "12 Angry Men", year: 1957, image_url: "MEDIA/movie3.jpg"},
			     {id: 4, title: " Schindler\'s List", year: 1993, image_url: "MEDIA/movie4.jpg"},
				];

//------------------------------------------------------------------------------------------------------
//Question 1: Look at the above list of movie "Javascript" Objects, 
//            do you see the different between "JSON" object and "Javascript" Object?




//------------------------------------------------------------------------------------------------------
//Load JSON File stored on web server at http://danieldangs.com/itwd6408/json/faqs.json
let loadJSON = function() {
	//1: Use CORS API website as proxy to retrieve JSON file
	4
	let proxy = 'https://cors-anywhere.herokuapp.com/';
	//Declare the URL indicates the location of the JOSN file
	let url = "http://danieldangs.com/itwd6408/json/faqs.json";
	//2: Create XMLHttpRequest object
	let ourRequest = new XMLHttpRequest();
	//Set ourRequest to URL to get data (not send data)
	ourRequest.open('GET', proxy + url, true);//"True": Asynchronous mode
	//Send XMLHttpRequest object or ourRequest via Internet
	ourRequest.send();
	//3: Receive response (reply) from web server and Process that data
	ourRequest.onload = function() {
	//Check if the response status is OK (o error), render data on web page
	if (ourRequest.status >= 200 && ourRequest.status < 400) {
	let receivedData = JSON.parse(ourRequest.responseText);//Parse JSON text to become a JS object
	renderHTML(receivedData);
	} else {
	//Exception handling
	console.log("Connected to the server successfully but it returned an error!");
	}
	};
	//-------------------------------------------
	//Function renderHTML()
	function renderHTML(data) {
	//Build an html string which will be rendered on browser as an html-formatted element
	let htmlString = "";
	//Retrieve question and relevant answer
	for (i = 0; i < data.length; i++) {
	//Get question
	htmlString += "<h4>" + data[i].question + "</h4>";
	//Get answer
	htmlString += "<p>" + data[i].answer + "</p><br>";
	}
	//Render the whole htmlString to web page
	document.getElementById("questions-list").innerHTML = htmlString;
	}
	}
	//Call to execute this loadJSON() function
	loadJSON();