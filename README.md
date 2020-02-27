# StarGame
A simple start matching game built with React

## Getting Started
Start by cloning the repository to your local machine

```bash
 - git clone https://github.com/mrkingz/StarMatcher.git

 - cd StarMatcher
```

Next install the package dependencies by running

```bash
 - yarn  install or npm install
```

Start or build the application by running

```bash
 - yarn start:dev or npm run start:dev # For a local development 

 - yarn build or npm run build To bundle the source code
 - yarn server or npm run server # to start up Production server
```

## Running the tests

```bash
 - yarn test or npm run test
```

## How To Play the game
- Step 1: Click on the play button to randomly generate a number of stars from 1 to 9 
```
Note: This will start a count douwn from 30 seconds
```
- Step 2: Click on the number that equals to the number of stars or a combination of numbers whose summation equals    the number of stars displayed to earn points (10 points per clicked number).
on success, that number(s) will be marked as used and exluded from available numbers, and a new random number of stars will be generated and displayed. 
- On failure, if the number or is less than the displayed stars, the clicked number is added to a combination of numbers whose summation must be equal to the number of stars to earn a points. However, if the number or the summations of numbers is greater that the number of stars, the number(s) will be marked as error, allowing you to deselect the click number(s)

- Step 3: Repeat step 2 until all numbers are used while the count down is not yet zero

```
Side Note: The game can be paused at any time while the count down is not yet zero.
```
