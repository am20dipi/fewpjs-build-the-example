// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!



likeGlyph = document.querySelectorAll(".like-glyph");
activatedHeart = document.querySelectorAll(".activated-heart")
//likeClass = document.querySelector(".like")

document.getElementsByClassName("like-glyph").addEventListener("click", handleClick);

function handleClick(e) {
  const heart = e.target;
  mimicServerCall("http://mimicServer.example.com")
  .then(function(response) {
    heart.innerText = activatedHeart.innerText;
    heart.style.color = "red";
  })
  .catch(function(error) {
    const modal = document.getElementById('hidden')
    // declaring and assigning a variable "modal"
    // querying the document to select all elements with an id of "hidden"
    modal.className = "";
    // resetting className of Modal to be empty string
    modal.innerText = "Error!";
    // changing innerText of modal to be "Error!"
    setTimeout(() => modal.className = "hidden", 5000);
    // setting Timeout so error does not occur immediately, changing className to "hidden"
  });
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
