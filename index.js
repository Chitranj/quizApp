// creating data set

let readlineSync = require("readline-sync");
let kuler = require("kuler");

let score = 0;

let userName = readlineSync.question("What is your name ?");

console.log(kuler(`Hello ${userName}, Welcome to Quizapp`, "#84cc16"));
const database = {
    data : [
        {
            question : `let a = {}, b = {} console.log(a === b) console.log(a === b)`,
            option: {
                a : "false, false",
                b : "false, true",
                c : "true, false",
                d : "true, true",
            },
            correctOption : "a"
        },
        {
            question : `Object.assign(target, source) create which types of copy ?`,
            option: {
                a : "Deep Copy",
                b : "Shadow Copy",
                c : "Nested Copy",
                d : "Create a new reference",
            },
            correctOption : "b"
        },
        {
            question : `Is method chaning is possible with forEach ?`,
            option: {
                a : "Yes",
                b : "No"
            },
            correctOption : "b"
        }
    ]
}

function showQuestionAndOption() {
    for(let i = 0; i < database.data.length; i++) {
        console.log(`Q ${i+1}. ${database.data[i].question}`);
        console.log(`Option :`);
        for(let key in database.data[i].option) {
            console.log(`${key} : ${database.data[i].option[key]}`);
        }

        let userAnswer = readlineSync.question("\n Enter your answer - (a/b/c/d) - ");
        playGame(userAnswer, database.data[i].correctOption);
    }
}

const leaderBoard = {
    data : [
        {
            name: 'Ashish',
            score : 1
        },
        {
            name: 'Riya',
            score : 1
        },
        {
            name: 'Jay',
            score : 2.5
        }
    ]
};

function highScorer(leaderBoard) {
    leaderBoard.data.push({name:userName, score:score});

    let sortedScoreList = leaderBoard.data.sort((a, b) => b.score - a.score);

    for(let leader of sortedScoreList) {
        console.log(`\n ${leader.name} - Score ${leader.score}`);
    }
    // console.log(sortedScoreList);
}

function playGame(userAnswer, correctAnswer) {
    if(userAnswer === correctAnswer) {
        score++;
        console.log("\n Your answer is correct ");
    }
    else {
        console.log("\n Your answer is not correct ");
        console.log(`\n Correct answer is ${correctAnswer}`);
    }
}



showQuestionAndOption();
console.log(`\n Your Score is ${score}`);
highScorer(leaderBoard);