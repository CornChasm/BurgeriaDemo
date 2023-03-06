const shelf = [
  document.getElementById("hamburger"),
  document.getElementById("bottomBun"),
  document.getElementById("onion"),
  document.getElementById("lettuce"),
  document.getElementById("pickle"),
  document.getElementById("tomato"),
  document.getElementById("cheese"),
  document.getElementById("topBun"),
];
const movingDiv = document.getElementById("placingIngredient");
const arrow = document.getElementById("arrow");
const floating = document.getElementById("floating");
const trayPlace = document.getElementById("trayPlace");
const tray = document.getElementById("tray");

let trayMid = tray.offsetLeft;
let trayEdgeRight = trayMid + tray.offsetWidth / 2;
let trayEdgeLeft = trayMid - tray.offsetWidth / 2;
let trayPlaceTop = trayPlace.offsetTop + tray.offsetTop;
let trayPlaceBottom = 64;

onmousemove = function mouseX(event) {
  let mousePos = event.clientX;
  if (mousePos >= trayEdgeLeft && mousePos <= trayEdgeRight) {
    movingDiv.style.left = `${mousePos}px`;
  }
};
let previousOffset = 0;
function ingredientFunctions() {
  let clickedIngredient = 0;
  let didClickHappen = 0;
  let moveBackground = -216;
  function ingredientClick() {
    function oldOutline() {
      shelf[clickedIngredient].style.outlineColor = `white`;
      shelf[clickedIngredient].style.outlineWidth = `${1}px`;
    }
    function newOutline() {
      shelf[clickedIngredient].style.outlineColor = `lime`;
      shelf[clickedIngredient].style.outlineWidth = `${4}px`;
    }
    shelf[0].onclick = () => {
      didClickHappen = 1;
      oldOutline();
      clickedIngredient = 0;
      newOutline();
      floating.style.backgroundImage = `url(../assets/ingredients.png)`;
      floating.style.backgroundPositionX = `${
        moveBackground * clickedIngredient
      }px`;
    };
    shelf[1].onclick = () => {
      didClickHappen = 1;
      oldOutline();
      clickedIngredient = 1;
      newOutline();
      floating.style.backgroundImage = `url(../assets/ingredients.png)`;
      floating.style.backgroundPositionX = `${
        moveBackground * clickedIngredient
      }px`;
    };
    shelf[2].onclick = () => {
      didClickHappen = 1;
      oldOutline();
      clickedIngredient = 2;
      newOutline();
      floating.style.backgroundImage = `url(../assets/ingredients.png)`;
      floating.style.backgroundPositionX = `${
        moveBackground * clickedIngredient
      }px`;
    };
    shelf[3].onclick = () => {
      didClickHappen = 1;
      oldOutline();
      clickedIngredient = 3;
      newOutline();
      floating.style.backgroundImage = `url(../assets/ingredients.png)`;
      floating.style.backgroundPositionX = `${
        moveBackground * clickedIngredient
      }px`;
    };
    shelf[4].onclick = () => {
      didClickHappen = 1;
      oldOutline();
      clickedIngredient = 4;
      newOutline();
      floating.style.backgroundImage = `url(../assets/ingredients.png)`;
      floating.style.backgroundPositionX = `${
        moveBackground * clickedIngredient
      }px`;
    };
    shelf[5].onclick = () => {
      didClickHappen = 1;
      oldOutline();
      clickedIngredient = 5;
      newOutline();
      floating.style.backgroundImage = `url(../assets/ingredients.png)`;
      floating.style.backgroundPositionX = `${
        moveBackground * clickedIngredient
      }px`;
    };
    shelf[6].onclick = () => {
      didClickHappen = 1;
      oldOutline();
      clickedIngredient = 6;
      newOutline();
      floating.style.backgroundImage = `url(../assets/ingredients.png)`;
      floating.style.backgroundPositionX = `${
        moveBackground * clickedIngredient
      }px`;
    };
    shelf[7].onclick = () => {
      didClickHappen = 1;
      oldOutline();
      clickedIngredient = 7;
      newOutline();
      floating.style.backgroundImage = `url(../assets/ingredients.png)`;
      floating.style.backgroundPositionX = `${
        moveBackground * clickedIngredient
      }px`;
    };
  }
  ingredientClick();
  onclick = function fall(event) {
    let mousePos = event.clientX;
    // trayPlaceBottom += 32;
    // trayPlace.style.bottom = `${trayPlaceBottom}px`;
    // trayPlaceTop = trayPlace.offsetTop + tray.offsetTop;
    // console.log(trayPlaceTop);
    if (
      mousePos >= trayEdgeLeft &&
      mousePos <= trayEdgeRight &&
      didClickHappen == 1
    ) {
      let placed = document.createElement("div");
      function placedDiv() {
        placed.style.position = `absolute`;
        placed.style.width = `216px`;
        placed.style.height = `120px`;
        placed.style.top = `${
          trayPlaceTop - 120 - ingredients[clickedIngredient].displacement * 2
        }px`;
        placed.style.outline = `red 1px solid`;
        placed.style.left = `${mousePos}px`;
        placed.style.transform = `translate(-50%)`;
        placed.style.backgroundRepeat = `no-repeat`;
        placed.style.backgroundImage = `url(../assets/ingredients.png)`;
        placed.style.backgroundSize = `1728px 120px`;
        placed.style.imageRendering = `pixelated`;
        placed.style.backgroundPositionX = `${
          moveBackground * clickedIngredient
        }px`;
      }
      function ingredientPlacing() {
        trayPlaceBottom += ingredients[clickedIngredient].displacement * 2;
        trayPlaceTop = trayPlace.offsetTop + tray.offsetTop;
        this.document.body.appendChild(placed);
        placedDiv();
        trayPlaceBottom += ingredients[clickedIngredient].addedHeight * 2;
        trayPlace.style.bottom = `${trayPlaceBottom}px`;
        // console.log(previousOffset);
        // console.log(placed.offsetLeft);
        // previousOffset = placed.offsetLeft;
        // offsetDifference =
        // if(clickedIngredient == 6){
        //   placed.style.backgroundImage = `url(../assets/cheese.png)`;
        //   placed.style.backgroundSize = `2486px 132px`;
        //   switch(offsetDifference)
        // }
      }
      switch (clickedIngredient) {
        case 0:
          ingredientPlacing();
          break;
        case 1:
          ingredientPlacing();
          break;
        case 2:
          ingredientPlacing();
          break;
        case 3:
          ingredientPlacing();
          break;
        case 4:
          ingredientPlacing();
          break;
        case 5:
          ingredientPlacing();
          break;
        case 6:
          ingredientPlacing();
          break;
        case 7:
          ingredientPlacing();
          break;
        default:
          break;
      }
    }
  };
}
ingredientFunctions();
