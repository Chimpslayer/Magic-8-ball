const userName = 'Wally'
if (userName) {
    console.log(`Hello, ${userName}!`)
}
else if (!userName) {
    console.log('Hello!')
}

const userQuestion = 'Am I the strongest?';
if (userName) {
    console.log(`${userName} asked "${userQuestion}"`)
}
else if (!userName) {
    console.log(`You asked "${userQuestion}"`)
}


var randomNumber = Math.floor(Math.random() * 8);
var eightBall = ' ';

switch (randomNumber) {
    case 0:
        eightBall = ('It is certain.')
        break;
    case 1:
        eightBall = ('It is decidedly so.')
        break;
    case 2:
        eightBall = ('Reply hazy, try again.')
        break;
    case 3:
        eightBall = ('Cannot predict now.')
        break;
    case 4:
        eightBall = ('Do not count on it.')
        break;
    case 5:
        eightBall = ('My sources say no.')
        break;
    case 6:
        eightBall = ('Outlook not so good.')
        break;
    case 7:
        eightBall = ('Signs point to yes.')
        break;  
}
console.log(eightBall)
