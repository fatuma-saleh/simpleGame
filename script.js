let character = document.getElementById("character");
let block = document.getElementById("block");
const jump = function () {
  if (character.classList !== "animate") {
    character.classList.add("animate");
  }
  setTimeout(function () {
    character.classList.remove("animate");
  }, 500);
};

let checkDead = setInterval(function () {
  let charTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );

  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );

  if (blockLeft < 20 && blockLeft > 0 && charTop >= 130) {
    block.style.animation = "none";
    block.style.display = "none";
    alert("You Lose");
  }
}, 10);
