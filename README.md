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
The user enters player names one at a time and clicks 'Add player' each time. As the players are entered they are listed below prior to sorting. 

When the tenth player is entered, they are randomly sorted into two teams and listed to the left and right of the football pitch (wider screens) or screen (narrow screens).

Clicking 'Reset teams' removes all the players from the lists.
A minimalistic approach was taken to the user interface, avoiding, for example a rather redundant 'Generate teams' button, so as to avoid visual clutter.

## Technology

The app was built using React and Redux as it was thought that React would be ideally suited for an instantly updating user interface of this sort.


### Packages installed:
- redux
- react-redux


### Data handling

User-inputted players' names are added to an array named playersList in state. 


## Future development

In its current form the app is rather simple; it has no features other than those described above. For future versions, features which could be added include player skill levels, colour of team kits, and a listing of previous games. More ambitious would be a backend connection to an API using Laravel so that games can be accessed and saved across devices. 

In view of the time limit, and due to my relative lack of experience with React, I decided to aim for the current product as an MVP rather than trying to build something more ambitious which might not work. In future, as I increase my familiarity with React and Redux I am sure building more complex apps will not be difficult.

