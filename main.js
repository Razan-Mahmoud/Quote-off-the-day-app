
function display(){
    let arr = [
            {quote: '“Be yourself; everyone else is already taken.”',
             author: '― Oscar Wilde' },
             {quote: '"Do not pity the dead, Harry. Pity the living, and, above all, those who live without love."',
             author: '-Albus Dumbledore'},
             {quote: '“Two things are infinite: the universe and human stupidity; and I am not sure about the universe.”',
             author: '― Albert Einstein'},
             {quote: '"If you want to know what a man is like, take a good look at how he treats his inferiors, not his equals."',
             author: '-Sirius Black'},
             {quote: '“A room without books is like a body without a soul.”',
            author: '― Marcus Tullius Cicero'},
            {quote: '"I have learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”',
            author: '― Maya Angelou'},
            {quote: '“Be who you are and say what you feel, because those who mind do not matter, and those who matter do not mind.”',
            author: '― Bernard M. Baruch'},
            {quote: '"The purpose of our lives is to be happy."',
            author:'— Dalai Lama'},
            {quote: '"Not how long, but how well you have lived is the main thing.”',
            author:'— Seneca'},
            {quote: '“And if you’re going to blame your parents for the bad stuff, you also have to give them credit for the good stuff.”',
            author:'— Matthew Perry'},
            {quote: '“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”',
            author:'― Martin Luther King Jr.'},
            {quote: '“I am so clever that sometimes I don\'t understand a single word of what I am saying.”',
            author:'― Oscar Wilde'}
        ];
let arrayIndex = Math.floor(Math.random() * arr.length);
document.getElementById("quoteHere").innerHTML = arr[arrayIndex].quote;
document.getElementById("authorHere").innerHTML = arr[arrayIndex].author;

}
