window.addEventListener('load',init);
//Globals Variabels


//avilabel levels
const levels ={
    easy: 10,
    medium: 7,
    hard: 3
}
//to change lavel
 const currentLevel = levels.easy;
let time = currentLevel;
let score =0;
let isPlaying;

//Dom Element

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
  ];

  function init(){
      //show seconds according to level
      seconds.innerHTML = currentLevel;
      //load word from array
      showWord(words);
      //match input word
      wordInput.addEventListener('input',startMatch);
      //call countdown every second
      setInterval(countDown, 1000);
      //check game status
      setInterval(checkStatus, 50);
  }
  //start match
  function startMatch(){
      if(wordMatch()){
         isPlaying = true;
         time = currentLevel + 1;
         showWord(words);
         wordInput.value = '';
         score++;         
      }
      if(score === -1){
        scoreDisplay.innerHTML = 0;
      }else{
        scoreDisplay.innerHTML = score;
      }

  }
  function wordMatch(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'Correct!!';
        return true;
    }else{
        message.innerHTML = '';
        return false;
    }
  }
  //Show word function
  function showWord(words){
        //generate Random Words
        const randIndex = Math.floor(Math.random() * words.length);
        
        //Show output
        currentWord.innerHTML = words[randIndex];        
  }

  //countdown timer

  function countDown(){
    // make sure time dose not  runout
    if(time > 0){
        //Decremet timer
        time--;
    }else if(time === 0){
        isPlaying = false;
    }
    //show timer
    timeDisplay.innerHTML = time;
  }

  //Check status of game
  function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = 'Game is over!';
        score = -1;
    }
  }