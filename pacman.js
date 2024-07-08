// pacman styling orientation
// right/default - transform: rotate(0deg) scaleX(1);
// down - transform: rotate(90deg) scaleX(1);
// up - transform: rotate(-90deg) scaleX(1);
// left - transform: rotate(0deg) scaleX(-1);

const pacman = document.querySelector("#pacman");
const btnUp = document.querySelector("#up");
const btnDown = document.querySelector("#down");
const btnLeft = document.querySelector("#left");
const btnRight = document.querySelector("#right");

function moveRight() {
  console.log("Right");
  pacman.style.transform = "rotate(0deg) scaleX(1)";
  const currentLeft = parseInt(pacman.style.left || 0);
  const newLeft = currentLeft + 50;
  const gameFieldWidth = document.querySelector("#gameField").offsetWidth;
  const pacmanWidth = pacman.offsetWidth;
  if (newLeft + pacmanWidth <= gameFieldWidth) {
    pacman.style.left = newLeft + "px";
  } else {
    //added checks to ensure that Pacman's new position doesn't
    //exceed the boundaries of the game field.
    //If the new position would move Pacman outside the game field,
    //I set the position to the boundary value instead.
    pacman.style.left = gameFieldWidth - pacmanWidth + "px";
  }
}

function moveLeft() {
  console.log("Left");
  //   assing pacman styling
  pacman.style.transform = "rotate(0deg) scaleX(-1)";
  const currentLeft = parseInt(pacman.style.left || 0);
  const newLeft = currentLeft - 50;
  if (newLeft >= 0) {
    pacman.style.left = newLeft + "px";
  } else {
    pacman.style.left = 0 + "px";
  }
}

function moveUp() {
  console.log("Up");
  //   assing pacman styling
  pacman.style.transform = "rotate(-90deg) scaleX(1)";
  const currentTop = parseInt(pacman.style.top || 0);
  const newTop = currentTop - 50;
  if (newTop >= 0) {
    pacman.style.top = newTop + "px";
  } else {
    pacman.style.top = 0 + "px";
  }
}

function moveDown() {
  console.log("Down");
  pacman.style.transform = "rotate(90deg) scaleX(1)";
  const currentTop = parseInt(pacman.style.top || 0);
  const newTop = currentTop + 50;
  const gameFieldHeight = document.querySelector("#gameField").offsetHeight;
  const pacmanHeight = pacman.offsetHeight;
  if (newTop + pacmanHeight <= gameFieldHeight) {
    pacman.style.top = newTop + "px";
  } else {
    //added checks to ensure that Pacman's new position doesn't
    //exceed the boundaries of the game field.
    //If the new position would move Pacman outside the game field,
    //I set the position to the boundary value instead.
    pacman.style.top = gameFieldHeight - pacmanHeight + "px";
  }
}

// detect keypress
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    moveRight();
  } else if (event.key === "ArrowLeft") {
    moveLeft();
  } else if (event.key === "ArrowUp") {
    moveUp();
  } else if (event.key === "ArrowDown") {
    moveDown();
  }
});

// assign action to the button
btnRight.addEventListener("click", function () {
  moveRight();
});
btnLeft.addEventListener("click", moveLeft);
btnUp.addEventListener("click", moveUp);
btnDown.addEventListener("click", moveDown);
