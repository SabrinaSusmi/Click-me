const quoteContainer = document.getElementById('quote_container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const socialButton = document.getElementById('social');
const newQuote = document.getElementById('new-quote');
const loader = document.getElementById('loader');
const quoteContainerTxt = document.getElementById('quote_container_txt');
let ind = 0;
const data = ["Hello Seeam!!","Howas your day?", "Wasn't the best I know :(", "But it's gonna be okay", "Bcz you the best and you deserve the best", "You are just passing through the every-fucking-thing-going-wrong phase but it's gonna be over soon bcz it always does", 
"And I know everything will be alright inshallah", "Now close your eyes and take a deep breath", "Play your Blues playlist and feel the calm", "When you need a break from everything, call Susmi, she's always there for you. Also give her the coupon code PENGUIN and you'll get a KitKat!", "Susmi semds love 3000 😘"]


async function getQuoteNext() {
    quoteText.innerText = data[ind];
    ind = ind+1;
    console.log(ind);
    if (ind>10) {
        ind = 0;
        //quoteText.innerText = "Hello Seeam!!";
    }
}


newQuote.addEventListener('click',getQuoteNext);

getQuoteNext();