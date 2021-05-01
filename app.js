
const form = document.querySelector('.quiz-form')
const finalScoreContainer = document.querySelector('.final-score-container')

const correctAnswers = ['B' , 'D', 'C', 'A']

let points = 0

const getUserAnswers = () => correctAnswers.map((_, index ) => 
         form[`inputQuestion${index + 1}`].value)
    

const calculateUserScore = userAnswers => {

    userAnswers.forEach((userAnswer,index) => {
        const isCorrectAnswers = userAnswer === correctAnswers[index]
        if(isCorrectAnswers){
            points += 25
        }
    })
}

const showFinalScore = () => {
    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
    finalScoreContainer.classList.remove('d-none')
}

const animateFinalResult = () => {
    let counter = 0
  
    const timer = setInterval(() => {
        if(counter === points) {
            clearInterval(timer)
        }

        finalScoreContainer.querySelector('span').textContent = `${counter++}%`
    },10)
}

const resetUserScore = () => {
    points = 0
}

form.addEventListener('submit', event => {
    event.preventDefault() 
    resetUserScore()
    
    const userAnswers = getUserAnswers()
    
    calculateUserScore(userAnswers)
    showFinalScore()
    animateFinalResult()
})


