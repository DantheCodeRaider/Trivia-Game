var userName = '';
var userScore = 0;
var gamesPlayed = 0;

function playGame(){
    userName = window.prompt('Please enter your name:');
    userScore = 0;

    for (let i = 0; i <questions.length; i++){
        let question = questions[i];
        console.log(question);
        
        let userAnswer = window.prompt(question.text);
        userAnswer = userAnswer.toUpperCase();
        console.log(userAnswer);
        
        if (userAnswer == question.correctAnswer) {
            console.log('Correct');
            userScore = userScore + 10;
            console.log(userScore);
        }
        else {
            console.log('Wrong');
        }
    }
    window.alert('Your final score is: ' + userScore);
    gamesPlayed = gamesPlayed + 1;
    let htmlUpdate = document.createElement('p');
    htmlUpdate.textContent = userName + ' your score for game ' + gamesPlayed + ' was ' + userScore + '.';
    document.body.append(htmlUpdate);
    return;
}
let button = document.querySelector('button')
button.addEventListener('click', function(){
    playGame();
});
