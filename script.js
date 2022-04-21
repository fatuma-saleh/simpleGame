let character = document.getElementById("characters");
let block = document.getElementById("block")
const jump = function(){
  if(character.classList!="animate"){
  character.classList.add("animate")
  }
  setTimeout(function() {

   character.classList.remove("animate");} ,500)

  let checkDead = setInterval(function(){
   let charTop = parseInt( window.getComputedStyle(character).getPropertyValue("top"))
  },10)
}