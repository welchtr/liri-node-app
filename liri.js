
require("dotenv").config();
var args = process.argv.slice(2);

var keys = require("./keys.js")
var Spotify = require('node-spotify-api')
var Twitter = require('twitter')

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


Spotify(keys.spotify)
