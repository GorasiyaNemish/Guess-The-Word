let words = [
    "Abjure",	"Future"	,"Picnic",
    "Agonistic",	"Garland",	"Protect",
    "Airline"	,"Gigantic",	"Publish",
    "Bandit",	"Goofy"	,"Quadrangle",
    "Banquet",	"Government"	,"Recount",
    "Binoculars",	"Grandnieces",	"Redoubtable",
    "Biologist",	"Handbook",	"Reflection",
    "Blackboard",	"Himself"	,"Reporter",
    "Board"	,"Indulge",	"Ring",
    "Bookworm",	"Inflatable",	"Salesclerk",
    "Butterscotch",	"Inimical"	,"Snapshot",
    "Camera","Interim",	"Shellfish",
    "Campus"	,"Invest",	"Ship",
    "Catfish",	"Jackpot"	,"Significance",
    "Carsick",	"Kitchenette"	,"Sometimes",
    "Celebrate"	,"Law"	,"Sublime",
    "Celery"	,"Life"	,"Tabletop",
    "Citizen",	"Lifeline"	,"Teamwork",
    "Coloring",	"Love"	,"Tennis",
    "Compact"	,"Magnificent"	,"Timesaving",
    "Dark"	,"Malevolence",	"Tree",
    "Damage",	"Man"	,"Termination",
    "Dangerous",	"Mascot"	,"Underestimate",
    "Decorum",	"Marshmallow",	"Vineyard",
    "Endorse"	,"Mine",	"War",
    "Engender"	,"Moonwalk",	"Way",
    "Erratic"	,"Near",	"Wealth",
    "Envelope",	"Nephogram"	,"Wednesday",
    "Etymology"	,"Newborn",	"World",
    "Eyewitness"	,"Noisome",	"Xerox",
    "Eulogy",	"Owl"	,"You",
    "Fish"	,"Parenthesis"	,"Zestful",
    "Food",	"Perpetrator"	,
    "Foreclose",	"Phone"
];

let wordToGuess = words[Math.floor(Math.random() * 100)].toLowerCase();
console.log(wordToGuess);
let wordLength = wordToGuess.length;
console.log(wordLength);
let actualAnswer = wordToGuess;
let guessedWordDiv = document.getElementById("guessedWord");
let alphabetDiv = document.getElementById("alphabet");
let remaingLives = document.getElementById("remaingLives");
let count = 0;
let lives = 8;
remaingLives.innerHTML = lives;

let emptySpanString = "";
for(let i=0;i<wordToGuess.length;i++){
    emptySpanString += "<span></span>";
}
guessedWordDiv.innerHTML = emptySpanString;

let guessedWordSpans = document.querySelectorAll("#guessedWord span");

let alphabetsSpanString = "";
for (i = 97; i <= 122; i++) {
    alphabetsSpanString += `<span onclick="alphabetClick('${String.fromCharCode(i)}')">${String.fromCharCode(i)}</span>`;
}
alphabetDiv.innerHTML = alphabetsSpanString;


const alphabetClick = (x) => {
    console.log(x);
    let idx = wordToGuess.indexOf(x);
    if (idx !== -1) {
        do {
            guessedWordSpans[idx].innerHTML = x;
            wordToGuess = wordToGuess.substring(0, idx) + '_' + wordToGuess.substring(idx+1);
            idx = wordToGuess.indexOf(x);
            count++;
        } while (idx != -1);
        event.target.style.background = "green";
        event.target.style.cursor = "not-allowed";
    }else{
        lives--;
        remaingLives.innerHTML = lives;
        event.target.style.background = "red";
    }
    event.target.style.cursor = "not-allowed";
    event.target.removeAttribute("onclick");
    // console.log(wordToGuess);
    setTimeout(()=>{
        if (count == wordLength) {
            alert("won");
            location.reload();
        }else if(lives == 0){
            alert("lose\nAnswer is "+actualAnswer);
            location.reload();
        }
    },100)
}