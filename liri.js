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
  twitterFunc();
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
  default:
    console.log("Command not recognized");
}



//Twitter Function

function twitterFunc (){

  var twitterKeys = keys.twitterKeys;
  // console.log(twitterKeys);

  var Twitter = require("twitter");
  // console.log(Twitter);
  
var client = new Twitter ({



  consumer_key: twitterKeys.consumer_key,
  consumer_secret: twitterKeys.consumer_secret,
  access_token_key: twitterKeys.access_token_key,
  access_token_secret: twitterKeys.access_token_secret

});

// console.log(client);

//Search command capture

var params = {screen_name: "Mike Brr"};
  // console.log(params);

  client.get('statuses/user_timeline', {count: 20, trim_user: false, exclude_replies: true, include_rts: false}, function(error, tweets, response) {
  // client.get("statutes/user_timeline", params, function(error, tweets){
    if (error) {
     return console.log(error);
    }else{
      console.log("MY TWEETS");
      for (var i = 0; i < tweets.length; i++) {
        console.log((i+1) + ". " + tweets[i].text);
        
      }
    }
  })

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
      console.log("MOVIE THIS")
      console.log("Title: " + valueCommand);
      console.log("Year: " + JSON.parse(body)["Year"]);
      console.log("Rating: " + JSON.parse(body)["imdbRating"]);
      console.log("Country of Production: " + JSON.parse(body)["Country"]);
      console.log("Language: " + JSON.parse(body)["Language"]);
      console.log("Plot: " + JSON.parse(body)["Plot"]);
      console.log("Actors: " + JSON.parse(body)["Actors"]);
      console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
    }
  });

}

//do-what-it-says Function

function doWhatItSays () {

}

// console.log(keys);
// console.log(request);