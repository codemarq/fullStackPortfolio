'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return project.bulkCreate([
      // Brief Opinions
      {
        name: "Brief Opinions",
        description: "Brief Opinions is an app that searches court cases and returns a summarized opinion via the courtlistener API and the Intellexer Summarizer API.",
        gitUrl: "https://github.com/codemarq/briefOpinions",
        herokuUrl: "https://polar-beach-64295.herokuapp.com/",
        imageUrl: "./public/assets/img/briefOpinions.png"
      },
      // Sequelize Burger
      {
        name: "Sequelize Burgers",
        description: 'Eat the Burger is a full-stack web app. This is a burger eating game using node, express, mysql, handlebars, sequelize, html and css. I originally built this app using traditional MySQL schema and seeds. This version of the app had been rebuilt using the node package "Sequelize" to seed the database, and build models and their associated methods.',
        gitUrl: "https://github.com/codemarq/sequelizedBurger",
        herokuUrl: "https://marquardt-sequelizedburger.herokuapp.com/",
        imageUrl: "./public/assets/img/sequelizeBurger.png"
      },
      // RPS
      {
        name: "Rock, Paper Scissors Multiplayer Online",
        description: "Rock, Paper, Scissors, Lizard, Spock is a multiplayer online game written in Javascript utilizing Firebase for player interaction and chat.",
        gitUrl: "https://github.com/codemarq/RPS-Multiplayer",
        herokuUrl: "",
        imageUrl: ""
      },
      // Archer Hangman
      {
        name: "Archer Hangman",
        description: 'https://github.com/codemarq/week-3-game"Archer" tv show themed Hangman game, using HTML and JavaScript.',
        gitUrl: "https://github.com/codemarq/week-3-game",
        herokuUrl: "",
        imageUrl: ""
      },
      // Liri
      {
        name: "Liri Node CLI",
        description: "Liri is a Language Interpretation and Recognition Interface. Liri is a command line node app that takes in parameters and gives you back data.https://github.com/codemarq/liri-node-app",
        gitUrl: "https://github.com/codemarq/liri-node-app",
        herokuUrl: "",
        imageUrl: ""
      },
      // Bamazon
      {
        name: "Bamazon Node CLI",
        description: "",
        gitUrl: "",
        herokuUrl: "",
        imageUrl: ""
      },
      // Super-Friend Finder
      {
        name: "Super-Friend Finder App",
        description: 'FullStack "Friend Finder" app using express, node.js, HTML, CSS.',
        gitUrl: "https://github.com/codemarq/friendFinder",
        herokuUrl: "",
        imageUrl: ""
      },
      // Star Wars
      {
        name: "Star Wars Card Battle Game",
        description: "This is the week 4 game assignment for UNC Coding Bootcamp-Star Wars card battle game. The purpose of this exercise was to create a simple game, with sounds and images, where you battle a computer based opponent. If you choose your enemies in the correct order, you win, as you get stronger and stronger. If you don't choose wisely, you die!",
        gitUrl: "https://github.com/codemarq/week-4-game",
        herokuUrl: "",
        imageUrl: ""
      },
      // Trivia Game
      {
        name: "Trivia Game",
        description: "A simple trivia game using HTML, CSS, JavaScript and jQuery. This was an exercise in dynamically generating HTML elements using JavaScript and jQuery. This was also an exercise in using timers and counters in JavaScript.",
        gitUrl: "https://github.com/codemarq/triviaGame",
        herokuUrl: "",
        imageUrl: ""
      },
      // Giphy API
      {
        name: "Giphy API",
        description: "Practice working with json data, querying API's on the giphyapi site using ajax. Dynamically create html elements, (buttons, imgs, etc). Also, this site employs both start and stop animate functions on clicking the generated gif's. User can also add a new button based on text entered in the 'Add a topic' section, and ping the giphy api with that button.",
        gitUrl: "https://github.com/codemarq/giphyAPI",
        herokuUrl: "",
        imageUrl: ""
      }
    ])
  },

  down: function (queryInterface, Sequelize) {
    return project.destroy({where: {name: [
      "Brief Opinions",
      "Sequelize Burgers",
      "Rock, Paper Scissors Multiplayer Online",
      "Archer Hangman",
      "Liri Node CLI",
      "Bamazon Node CLI",
      "Super-Friend Finder App",
      "Star Wars Card Battle Game",
      "Trivia Game",
      "Giphy API"
    ]}})
  }
};
