
function sayIt(thing) {
    console.log('I say: ' + thing);
}

function beWise(phrase, say) {
    say('A wise person once said ' + phrase);
    //sayIt('a wise person once said A penny saved is a penny earned')
}

beWise('A penny saved is still a friggin penny.', sayIt);

/**
 *  Q1: What are the types of beWise params?
 *      - 
 *  Q2: What is the value of 'say' in beWise in this case?
 *      - 
 *  Q3: What's the output?
 *      - 
 */

function getBooks() {
    let request = new XMLHttpRequest();
    request.open('GET', 'http://api.queencityiron.com/books');
    request.addEventListener('load', function() {
        let response = JSON.parse(request.responseText);
        console.log(response);
    });
    request.send();
}

window.addEventListener('load', function() {
    getBooks();
});
