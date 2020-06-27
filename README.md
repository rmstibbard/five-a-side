# Five-a-Side Footy Fun

## Final Technical Challenge for DevelopMe_ Coding Fellowship

The brief was to create a tool which randomly picks 5-a-side football teams from a list of 10 names.

A working version can be seen online on Github Pages at [https://rmstibbard.github.io/five-a-side](https://rmstibbard.github.io/five-a-side).


## Setup

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

You will need to have NPM installed in order to set the application up.

## Installation

### Clone the git repository and run NPM install:
- `git clone https://github.com/rmstibbard/five-a-side`
- Change directory (`cd`) into the five-a-side directory.
- Install the necessary packages by running: `npm install`
- When all the packages have been installed, start the app by running: `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Planning

A full report of the planning for the project, including images of the wireframes, etc., can be seen [here](https://docs.google.com/document/d/1lzfwRFs5MXWS-Y8PDQ5FBzZX5ZbTG7KgMR05OzZmsmA/edit?usp=sharing).


### Responsive styling
A mobile-first approach was taken to the design of the layout. Wireframes for the responsive design were created before developing the app. The input field and buttons are large enough to be easily used on a mobile and are designed to give a modern look. On all device sizes, a large background image of a football arena under lights is used to give a dramatic appearance. On wider screens an image of a football pitch also appears to give more visual interest, and it is on this background that the player sorting functionality takes place. 


### Functionality
The user enters player names one at a time and clicks 'Add player' each time. As the players are entered they are listed below prior to sorting. A countdown tells the user how many more players must be entered.

When the tenth player is entered, they are automatically randomly sorted into two teams and listed to the left and right of the football pitch (wider screens) or screen (narrow screens). There is no 'Generate teams' button as this was felt to be superfluous.

Clicking 'Reset teams' removes all the players from the lists.
A minimalistic approach was taken to the user interface, avoiding, for example a rather redundant 'Generate teams' button, so as to avoid visual clutter.

## Technology

The app was built using React and Redux as it was thought that React would be ideally suited for an instantly updating user interface of this sort.


### Packages installed:
- redux
- react-redux


### Data handling

User-inputted players' names are added to an array in state, initially empty, named 'playersList'. 

In 'reducer.js' there are three functions, 'addPlayer', 'shufflePlayers', and 'createTeams': 

- 'addPlayer' returns a copy of state and appends the user-inputted player name to the 'playersList' array
 in state.

 - 'shufflePlayers' uses a simple sorting function `playersList.sort(() => Math.random() - 0.5)` to sort the players into random order. This function would not be sufficient for serious random sorting or for shuffling large arrays but for the purposes of this app, which has a maximum of 10 items in the array to be sorted, it is adequate. The shuffled list of players is saved to state as 'shuffledList'.

 - 'createTeams' 
  -- if the number of players entered is greater than or equal to 10, arrays 'teamA' and 'teamB' are created by running the ES6 iterator method `filter` on 'shuffledList', returning only those values in the array which are divisible exactly by 2 (for 'teamA') or which are not divisible exactly by 2 (for 'teamB'). In this way, two teams are randomly created. The state value 'numbersReached' is set to 'false'.
  -- if the number of players entered is not greater than or equal to 10, then a copy of state is returned and the state value 'numbersReached' is set to 'true'.

As the user adds players using the form in the 'AddPlayer' component, each player is added to 'playersList' as an array item. 'addPlayer' also calls 'shufflePlayers' and 'createTeams' every time it is run, so the players appear in shuffled order on the waiting list, the order of which changes every time the 'Add Player' button is clicked. 

Once 10 players have been entered, the state value 'numbersReached' is set to 'true'. This is passed to the AddPlayer component and is used to disable the input field and the 'Add Player' button so that no more players can be entered.

In the 'NumbersReached' component, a countdown has been implemented to tell the user how many more players to enter. This is achieved by passing in the values of 'playersList' and 'numbersReached'. If 'numbersReached' is 'false', the second half of a ternary statement displays a message telling the use how many more players to add. Once 10 players have been entered, 'numbersReached' is 'true', and the first half of the ternary displays 'Teams Complete' below the input form. 


## Future development

In its current form the app is rather simple; it has no features other than those described above. For future versions, features which could be added include player skill levels, colour of team kits, and a listing of previous games. More ambitious would be a backend connection to an API using Laravel so that games can be accessed and saved across devices. 

In view of the time constraints for this challenge, and due to my relative lack of experience with React, I decided to aim for the current product as an MVP rather than trying to build something more ambitious which might not work. In future, as I increase my familiarity with React and Redux I am sure building more complex apps will not be difficult.

