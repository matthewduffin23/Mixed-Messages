function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
}

const collectiveFortune = {
    signInfo: ['Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'],
    personalityInfo: ['Independent', 'Compasionate', 'Determined', 'Devoted', 'Intelligent', 'Loyal', 'Humorous', 'Kind', 'Gracious', 'Passionate', 'Generous', 'Disciplined'],
    warning: ['uncompromising', 'Feaful', 'Impulsive', 'Possesive', 'Indecisive', 'Manipulative', 'Lazy', 'Self Doubt', 'Holdes Grudges', 'Jealous', 'False Promises', 'Condescending']
}

let personalFortune = []

for(let prop in collectiveFortune) {
    let optionIdx = generateRandomNumber(collectiveFortune[prop].length)

    switch(prop) {
        case 'signInfo':
            personalFortune.push(`Your Astrological sign right now is a "${collectiveFortune[prop][optionIdx]}".`)
            break
        case 'personalityInfo':
            personalFortune.push(`Your personality strengths are "${collectiveFortune[prop][optionIdx]}".`)
            break
        case 'warning':
            personalFortune.push(`Your personality weaknesses are "${collectiveFortune[prop][optionIdx]}".`)
            break
        default:
            personalFortune.push('There is not enough info.')            
    }
}

function formatFortune(wisdom) {
    const formatted = personalFortune.join('\n')
    console.log(formatted)
}

formatFortune(personalFortune);