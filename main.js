// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heartBtns = document.querySelectorAll('.like-glyph')

// heartBtns.forEach(btn => btn.addEventListener('click', clickAlert))
heartBtns.forEach(btn => btn.addEventListener('click', handleClick))

function handleClick(e){
  let heartStatus = checkHeartStatus(e.target)
  mimicServerCall()
  .then(resp => heartStatus === 'empty' ? handleEmptyHeart(e.target) : handleFullHeart(e.target))
  .catch((error) => handleError(error))
}

function handleEmptyHeart(heart){
//otherwise change heart to full
heart.innerText = FULL_HEART
//add the .activated-heart class to make red
heart.classList.add('activated-heart')
}

function handleFullHeart(heart){
//change heart to empty
heart.innerText = EMPTY_HEART
//remove .activated-heart class
heart.classList.remove('activated-heart')
}


//when user clicks on an empty heart: 
//create click event to call mimicServerCall fxn
//create .catch() block after then() to catch & handle errors
//otherwise change hear to full
//add the .activated-heart class to make red

//checks if heart is empty or full
function checkHeartStatus(btn){
  if(btn.innerText === EMPTY_HEART){
    return 'empty'
  }else{ return 'full'}
}

function handleError(error){
 //remove hidden class code
  console.log(error)
  document.querySelector('#modal').removeAttribute('class');
 //display server error msg in modal
  document.querySelector('#modal-message').textContent = error;
//use setTimeout to hide error modal after 3 seconds
setTimeout(() => document.querySelector('#modal').classList.add('hidden'), 3000)
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
