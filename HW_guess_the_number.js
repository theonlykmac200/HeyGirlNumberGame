const game = {
    title: "Guess the Number!",
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],
    getGuess: function () {
        let playerGuess = parseInt(prompt(`Hey Girl! Enter a guess between ${this.smallestNum} and ${this.biggestNum} you've already guessed ${this.prevGuesses}`));    
        this.prevGuesses.push(playerGuess)

        //alert user if guess is out of range
        if (playerGuess > this.biggestNum || playerGuess < this.smallestNum) {
            alert(`${playerGuess} is not within the guessing range`)
        }

        return playerGuess
             
    },
    play: function () {
        this.secretNum =
          Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) +
          this.smallestNum
          let playerGuess 
          while (playerGuess != this.secretNum) {
            playerGuess= this.getGuess();  ///break the loop before the alert can trigger. 
              this.render(playerGuess)

              //break the loop and close window if user hits cancel
              if (!playerGuess) break
          }
      },
    render: function (playerGuess) {
        if (playerGuess > this.secretNum) {
            alert(`Hey Girl, You're super smart but your guess is too high`)
        }else if (playerGuess < this.secretNum) {
            alert(`Hey Girl, You're amazing in every way, but your guess is too low `)  
        }else if (playerGuess === this.secretNum) {
            alert(`Hey Girl! I never doubted you! You Guessed the Number in ${this.prevGuesses.length} guesses!`)
        }
    
    }    
 
}
game.play();
