'use strict';

// User model (to create our bulk insert for local db)
var Project = require('../models')["Project"];

module.exports = {
  up: function (queryInterface, Sequelize) {
    return Project.bulkCreate([
      // Brief Opinions
      {
        name: "Brief Opinions",
        description: "Brief Opinions is an app that searches court cases and returns a summarized opinion via the courtlistener API and the Intellexer Summarizer API.",
        gitUrl: "https://github.com/codemarq/briefOpinions",
        herokuUrl: "https://briefopinions.herokuapp.com/",
        imageUrl: "./public/assets/img/briefOpinions.png",
        altText: "image of app"
      },
      // Sequelize Burger
      {
        name: "Sequelize Burgers",
        description: 'Eat the Burger is a full-stack web app. This is a burger eating game using node, express, mysql, handlebars, sequelize, html and css. I originally built this app using traditional MySQL schema and seeds.',
        gitUrl: "https://github.com/codemarq/sequelizedBurger",
        herokuUrl: "https://marquardt-sequelizedburger.herokuapp.com/",
        imageUrl: "./public/assets/img/sequelizeBurger.png",
        altText: "image of app"
      },
      // RPS
      {
        name: "Rock, Paper Scissors Multiplayer Online",
        description: "Rock, Paper, Scissors, Lizard, Spock is a multiplayer online game written in Javascript utilizing Firebase for player interaction and chat.",
        gitUrl: "https://github.com/codemarq/RPS-Multiplayer",
        herokuUrl: "https://jmmarquardt-rpsls.herokuapp.com/",
        imageUrl: "./public/assets/img/RPS.png",
        altText: "image of app"
      },
      // Python Asteroids
      {
        name: "Python Asteroids",
        description: 'Remake of the Classic arcade game "Asteroids" built in Python.',
        gitUrl: "https://github.com/codemarq/PythonAsteroids",
        herokuUrl: "",
        imageUrl: "./public/assets/img/asteroids.png",
        altText: "image of app"
      },
      // Python Pong
      {
        name: "Python Pong",
        description: 'Remake of the Classic arcade game "Pong" built in Python.',
        gitUrl: "https://github.com/codemarq/PythonPong",
        herokuUrl: "",
        imageUrl: "./public/assets/img/pong.png",
        altText: "image of app"
      },
      // Giphy API
      {
        name: "Giphy API",
        description: "App working with json data, querying API's on the giphyapi site using ajax. Dynamically creating html elements, (buttons, imgs, etc). Also, this site employs both start and stop animate functions on clicking the generated gif's.",
        gitUrl: "https://github.com/codemarq/giphyAPI",
        herokuUrl: "https://jmmarquardt-giphy.herokuapp.com/",
        imageUrl: "./public/assets/img/giphy.png",
        altText: "image of app"
      },
      // Archer Hangman
      {
        name: "Archer Hangman",
        description: '"Archer" tv show themed Hangman game, using HTML and JavaScript.',
        gitUrl: "https://github.com/codemarq/week-3-game",
        herokuUrl: "",
        imageUrl: "./public/assets/img/archer.png",
        altText: "image of app"
      },
      // Liri
      {
        name: "Liri Node CLI",
        description: "Liri is a Language Interpretation and Recognition Interface. Liri is a command line node app that takes in parameters and gives you back data.",
        gitUrl: "https://github.com/codemarq/liri-node-app",
        herokuUrl: "",
        imageUrl: "./public/assets/img/bamazon.png",
        altText: "image of app"
      },
      // Bamazon
      {
        name: "Bamazon Node CLI",
        description: "Bamazon is a Node JS app which mimics an Amazon type of store. This app is written in Node.JS and uses a local MySQL database.",
        gitUrl: "https://github.com/codemarq/bamazon",
        herokuUrl: "",
        imageUrl: "./public/assets/img/bamazon.png",
        altText: "image of app"
      },
      // Super-Friend Finder
      {
        name: "Super-Friend Finder App",
        description: 'FullStack "Friend Finder" app using express, node.js, HTML, CSS.',
        gitUrl: "https://github.com/codemarq/friendFinder",
        herokuUrl: "",
        imageUrl: "./public/assets/img/friendFinder.png",
        altText: "image of app"
      },
      // Star Wars
      {
        name: "Star Wars Card Battle Game",
        description: "This is a Star Wars card battle game. The purpose of this exercise was to create a simple game, with sounds and images, where you battle a computer based opponent.",
        gitUrl: "https://github.com/codemarq/week-4-game",
        herokuUrl: "",
        imageUrl: "./public/assets/img/starwars.png",
        altText: "image of app"
      },
      // Trivia Game
      {
        name: "Trivia Game",
        description: "A simple trivia game using HTML, CSS, JavaScript and jQuery. This was an exercise in dynamically generating HTML elements using JavaScript and jQuery. This was also an exercise in using timers and counters in JavaScript.",
        gitUrl: "https://github.com/codemarq/triviaGame",
        herokuUrl: "",
        imageUrl: "./public/assets/img/trivia.png",
        altText: "image of app"
      }     
    ])
  },

  down: function (queryInterface, Sequelize) {
    return Project.destroy({where: {name: [
      "Brief Opinions",
      "Sequelize Burgers",
      "Rock, Paper Scissors Multiplayer Online",
      "Archer Hangman",
      "Liri Node CLI",
      "Bamazon Node CLI",
      "Super-Friend Finder App",
      "Star Wars Card Battle Game",
      "Trivia Game",
      "Giphy API",
      "Python Asteroids",
      "Python Pong"
    ]}})
  }
};
