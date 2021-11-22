/*function voteFunc() {
  var upvoteBtn = document.querySelector('.upvote');
  var upvote = document.querySelector('.input1');
  var downvoteBtn = document.querySelector('.downvote');
  var downvote = document.querySelector('.input2');

  upvoteBtn.addEventListener('click', () => {
    console.log(upvote.value);
    upvote.value = parseInt(upvote.value) + 1;
    upvote.style.color = '#12ff00';
  });

  downvoteBtn.addEventListener('click', () => {
    downvote.value = parseInt(downvote.value) + 1;
    downvote.style.color = '#ff0000';
  });
}*/

function upvoteFunc() {
  var upvote = document.querySelector('.input1');
  upvote.value = parseInt(upvote.value) + 1;
  upvote.style.color = '#12ff00';
}

function downvoteFunc() {
  var downvote = document.querySelector('.input2');
  downvote.value = parseInt(downvote.value) + 1;
  downvote.style.color = '#ff0000';
}
