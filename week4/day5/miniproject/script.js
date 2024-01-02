function playTheGame () {
    let conf = confirm('do you want to play the game?')
    if (conf == true) {
        let prop = prompt('pick a number 0-10')
        if (!(isNaN(prop))) {
            if (prop >=0 && prop <= 10) {
                let computerNumber = Math.floor(Math.random() * 10)
            } else {
                alert('sorry, number not in range')
            }
        } else {
            alert('sorry, not a number')
        }
    } else {
        alert('ok TY, bye!')
    }
}

function compareNumbers (userNumber, computerNumber) {
    if (userNumber == computerNumber) {
        alert('WINNER!!!!')
    } 
    if (computerNumber > userNumber) {
        alert('computer number is bigger')
    }

}