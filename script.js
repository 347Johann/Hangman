let words = [
  "apple", "bicycle", "chocolate", "dolphin", "elephant", "forest", "giraffe", "hamburger", 
  "island", "jacket", "kangaroo", "lighthouse", "mountain", "notebook", "octopus", "penguin", 
  "quicksand", "rainbow", "strawberry", "tornado", "umbrella", "volcano", "watermelon", 
  "xylophone", "yogurt", "zebra", "avocado", "backpack", "campfire", "drizzle", "elevator", 
  "fireplace", "glacier", "honeycomb", "iguana", "jigsaw", "keychain", "landscape", "mushroom", 
  "nebula", "oatmeal", "parrot", "quartz", "rooftop", "sailboat", "tulip", "unicorn", "vampire", 
  "wilderness", "zeppelin"
];

let display = document.getElementById("display");
let attemptsDisplay = document.getElementById("Attempts")
let randomWord = words[Math.floor(Math.random() * 50)]
let keys = document.querySelectorAll(".letters")
let resultDisplay = document.getElementById("result")
let displayHolder = []
let attempts = 6;

keys.forEach(function(key) {
  key.addEventListener("click", function() {
    checkLetter(this.textContent.toLowerCase(), this)
  });
});

window.addEventListener("load", function() {
  for (let i = 0; i < randomWord.length; i++){
    displayHolder[i] = "_"
  }
  display.textContent = displayHolder.join("");
});

function checkLetter(letter, button){
  if (randomWord.toLowerCase().includes(letter) && attempts !== 0){
    //Includes letter
    for (let i = 0; i < randomWord.length; i++){
      if (randomWord[i].toLowerCase() === letter){
        displayHolder[i] = letter;
      }
    }
    display.textContent = displayHolder.join("")
    button.style.backgroundColor = "rgb(0, 226, 0)";
    
    if (displayHolder.join("") === randomWord){
      resultDisplay.textContent = `The Word Was: ${randomWord} HOORAY!!`
      resultDisplay.style.color = "lightgreen";
      resultDisplay.style.opacity = "100%"
    }
  }
  else{
    //Does not include letter
    if (attempts === 1){
      attempts = 0
      resultDisplay.textContent = `The Word Was: ${randomWord}`
      resultDisplay.style.color = "white";
      resultDisplay.style.opacity = "100%"
    }
    else if(attempts !== 0){
      attempts--
      attemptsDisplay.textContent = `Attempts:${attempts}`
      button.style.backgroundColor = "red";
    }
  }
}

function reset(){
  attempts = 6;
  attemptsDisplay.textContent = `Attempts: ${attempts}`;
  randomWord = words[Math.floor(Math.random() * 50)];
  displayHolder = [];
  
  for (let i = 0; i < randomWord.length; i++){
    displayHolder[i] = "_";
  }
  
  display.textContent = displayHolder.join("");

  keys.forEach(function(key) {
    key.style.backgroundColor = "rgb(231, 231, 231)";
  });
  
  resultDisplay.textContent = "";
  resultDisplay.style.opacity = "0";
}

