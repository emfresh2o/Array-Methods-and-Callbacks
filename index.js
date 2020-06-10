const fifaData = require('./fifa');
console.log(fifaData);

console.log('its working');

// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

const home14 = fifaData.filter((home) => {
    return home.Year === 2014 && home.Stage === 'Final';
});
console.log(home14[0]['Home Team Name']);

const away14 = fifaData.filter((away) => {
    return away.Year === 2014 && away.Stage === 'Final';
});
console.log(away14[0]['Away Team Name']);

const homeGoals14 = fifaData.filter((home) => {
    return home.Year === 2014 && home.Stage === 'Final';
});
console.log(homeGoals14[0]['Home Team Goals']);

const awayGoals14 = fifaData.filter((away) => {
    return away.Year === 2014 && away.Stage === 'Final';
});
console.log(awayGoals14[0]['Away Team Goals']);

const winner14 = fifaData.filter((winner) => {
    return winner.Year === 2014 && winner.Stage === 'Final' && winner['Home Team Goals'] > 0 || winner.Year === 2014 && winner.Stage === 'Final' && winner["Away Team Goals"] > 0;
});
console.log(winner14[0]['Home Team Name']);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    return data.filter((final) => final.Stage === 'Final');
};

console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {
    const yearArr = callback.map((game) => game.Year);
    return yearArr;
    
}

console.log(getYears(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {

    const winners = callback.map(gameScore => {
        let homeScore = gameScore["Home Team Goals"]
        let awayScore = gameScore["Away Team Goals"]
        if(homeScore > awayScore){
            return gameScore["Home Team Name"]
        } else {
            return gameScore["Away Team Name"]
        }
    });
    return winners
};

console.log(getWinners(getFinals(fifaData)));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(winners, years) {
    const theWinner = []
    for(let i = 0; i < winners.length; i++) {
        theWinner.push(`In ${years[i]}, ${winners[i]} won the world cup.`);
    }
    return theWinner
}

console.log(getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData))));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {

    const home = data.reduce((a, c) => a += c ['Home Team Goals'], 0) / data.length;
    const away = data.reduce((a, c) => a += c ['Away Team Goals'], 0) / data.length;
}
console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
