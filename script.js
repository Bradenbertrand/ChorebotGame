let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton = document.getElementById('start');
let currentlyPlaying = true;
const closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
let numClosedDoors = 3;

let openDoor1;
let openDoor2;
let openDoor3;

const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';

const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';

const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';

doorImage1.onclick = () => {
    if (!isClicked(doorImage1) && currentlyPlaying) {
        doorImage1.src = openDoor1;
        playDoor(door1);
    }
}

doorImage2.onclick = () => {
    if (!isClicked(doorImage2) && currentlyPlaying) {
        doorImage2.src = openDoor2;
        playDoor(door2);
    }
}

doorImage3.onclick = () => {
    if (!isClicked(doorImage3) && currentlyPlaying) {
        doorImage3.src = openDoor3;
        playDoor(door3);
    }
}

startButton.onclick = () => {
    if (currentlyPlaying === true) {

    } else {
        startRound()
    }

}

// Resets round variables
const startRound = () => {
    doorImage1.src = closedDoorPath
    doorImage2.src = closedDoorPath
    doorImage3.src = closedDoorPath
    numClosedDoors = 3
    startButton.innerHTML = 'Good Luck!'
    currentlyPlaying = true;
    randomChoreDoorGenerator()
}

// Generates numbers 0-2 to assign values to doors
const randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors);
    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if (choreDoor === 1) {
        openDoor1 = spaceDoorPath;
        openDoor2 = botDoorPath;
        openDoor3 = beachDoorPath;
    } else if (choreDoor === 2) {
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
        openDoor3 = botDoorPath;
    } else {

    }
}

// returns true or false depending on if the door contained the bot
const isBot = (door) => {
    if (door.src === botDoorPath) {
        gameOver('lose')
    }
}

// checks to see if door has already been clicked
const isClicked = (door) => {
    if (door.src != closedDoorPath) {
        return true;
    } else if (door.src === closedDoorPath) {
        return false;
    }
}

// logic once door is clicked
const playDoor = (door) => {
    numClosedDoors -= 1;
    if (numClosedDoors === 0) {
        gameOver('win');
    } else if (isBot(door)) {
        gameOver('lose')
    }
}

// logic once game has ended
const gameOver = (status) => {
    if (status === 'win') {
        startButton.innerHTML = ('You win! Play again?');
        currentlyPlaying = false;
    } else {
        startButton.innerHTML = ('Game over! Play again?')
        currentlyPlaying = false;
    }
}

startRound()