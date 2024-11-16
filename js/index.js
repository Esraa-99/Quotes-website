let qoutes=[{
    "text" : "Be yourself; everyone else is already taken.",
    "author" :"Oscar Wilde"
},
{
    "text" : "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    "author" :"Marilyn Monroe"
},
{
    "text" : "So many books, so little time.",
    "author" :"Frank Zappa"
},
{
    "text" : "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "author" :"Albert Einstein"
},
{
    "text" : "A room without books is like a body without a soul.",
    "author" :"Marcus Tullius Cicero"
},
{
    "text" : "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    "author" :"Bernard M. Baruch"
},
{
    "text" : "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    "author" :"Dr. Seuss"
},
{
    "text" : "You only live once, but if you do it right, once is enough.",
    "author" :"Mae West"
},
{
    "text" : "Be the change that you wish to see in the world.",
    "author" :"Mahatma Gandhi"
},
{
    "text" : "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    "author" :"J.K. Rowling"
},
{
    "text" : "If you tell the truth, you don't have to remember anything.",
    "author" :"Mark Twain"
},
{
    "text" : "Friendship ... is born at the moment when one man says to another, What! You too? I thought that no one but myself . . ",
    "author" :"C.S. Lewis"
},
{
    "text" : "A friend is someone who knows all about you and still loves you.",
    "author" :"Elbert Hubbard"
},
{
    "text" : "We accept the love we think we deserve.",
    "author" :"Stephen Chbosky"
}
]

let lastNumber =null;


function getRandomNumber(max){
let randomNumber;
do {
    randomNumber = Math.floor(Math.random() * max);
} while (randomNumber === lastNumber); 

lastNumber = randomNumber; 
return randomNumber;
}

function getQuote(arr,Num){
var choice = arr[Num];
return choice;
}
function display(arr){
var qoute= getQuote(arr,getRandomNumber(arr.length));
document.getElementById("txt").innerHTML= `“`+ qoute.text+ `”`;
document.getElementById("auth").innerHTML= qoute.author;
}

function call(){
    display(qoutes)  
}





 
