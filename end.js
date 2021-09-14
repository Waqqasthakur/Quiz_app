const saveScore = document.getElementById("saveScore");
const username = document.getElementById("username");
const finalScore = document.getElementById('finalScore');

const mostRecentScore = localStorage.getItem('mostRecentScore');
//username.addEventListener('keyup')
handleOnKeyUp = () =>
{
    saveScore.disabled = !username.value;
}
saveHighScore = (e) => {
    console.log("Save button clicked")
    e.preventDefault();
}

finalScore.innerText = mostRecentScore;