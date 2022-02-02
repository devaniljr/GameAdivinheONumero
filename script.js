'use strict';

// Generating the number
let number = Math.trunc(Math.random() * 99)+1
let score = 20;
let highScore = 0;

// Giving action to the button
document.querySelector('.check').addEventListener('click', function() {
    let guess = Number(document.querySelector('.guess').value)
    let messageDom = document.querySelector('.message')


    function highOrLow(message) {
        if (score > 1) {
            messageDom.textContent = `${message}`
            score--
            document.querySelector('.score').textContent = score    
        } else {
            messageDom.textContent = '🔥 GAME OVER'
            document.querySelector('.score').textContent = 0    
        }
    }


    if (!guess) {
        messageDom.textContent = '❌ Insira um número'
    } else if (guess === number) {
        messageDom.textContent = '✅ Parabéns, você acertou!'
        document.querySelector('.number').textContent = number
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'

        if (score > highScore){
            highScore = score
            document.querySelector('.highscore').textContent = highScore
        }

    } else if (guess > 99) {
        messageDom.textContent = '❌ O número precisa ser entre 1 e 99'
    }  else if (guess > number) {
        highOrLow('📈 Seu número está alto')
    } else if (guess < number) {
        highOrLow('📉 Seu número está baixo')
    } 
})

// Reseting the game

document.querySelector('.again').addEventListener('click', function() {
    score = 20
    number = Math.trunc(Math.random() * 99)+1
    document.querySelector('.guess').value = ''
    document.querySelector('.number').textContent = '?'
    document.querySelector('.message').textContent = 'Tente descobrir...'
    document.querySelector('.score').textContent = score
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
})