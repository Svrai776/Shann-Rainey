# Rock, Paper, Scissors

## Game Rules
* Rock beats scissors
* Scissors beats paper
* Paper beats rock

## Acceptance Criteria 
1. After the user selects an option, the bot then makes a random selection
2. After each round:
    - Update and display in the html elements with the id of humanScore && computerScore
    - In the html element with the id status, show the game status: `"You played {userSelection}. The bot played {botSelection}. You {win! :) || lose! :(}"`;
    - Make sure the userSelection and botSelection is bold and underlined

## Select a random number formula
```Math.floor(Math.random() * maxNumber)```