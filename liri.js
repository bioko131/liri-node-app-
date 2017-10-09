// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
var keys = require("./keys.js");

var request = require("request");

// console.log(keys.twitterKeys.consumer_key)

//process.argvssss

var command = process.argv[2]

var valueCommand = process.argv[3];




// //switch case for the command in the process.argv[2]
// //my-tweets spotify-this-song movie-this do-what-it-says

switch (command){
  case "my-tweets":
  twitterFunction();
  break;
  case "spotify-this-song":
  spotifyFunc();
  break;
  case "movie-this":
  OMDBFunc();
  break;
  case "do-what-it-says":
  doWhatItSays();
  break;
}



//Twitter Function

function twitterFunc (){


}

//Spotify Function

function spotifyFunc (){

}

//OMDB Function

function OMDBFunc (){

  // Then run a request to the OMDB API with the movie specified
  request("http://www.omdbapi.com/?t=" + valueCommand +"&y=&plot=short&apikey=40e9cece", function(error, response, body) {
  
    // If the request is successful (i.e. if the response status code is 200)
    if (!error && response.statusCode === 200) {
  
      // Parse the body of the site and recover just the imdbRating
      // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
      console.log("\n/////////////////MOVIE THIS////////////////\n")
      console.log("Title: " + valueCommand);
      console.log("Year: " + JSON.parse(body)["Year"]);
      console.log("Rating: " + JSON.parse(body)["imdbRating"]);
      console.log("Country of Production: " + JSON.parse(body)["Country"]);
      console.log("Language: " + JSON.parse(body)["Language"]);
      console.log("Plot: " + JSON.parse(body)["Plot"]);
      console.log("Actors: " + JSON.parse(body)["Actors"]);
      // console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
    }
  });

}

//do-what-it-says Function

function doWhatItSays () {

}

// console.log(keys);
// console.log(request);