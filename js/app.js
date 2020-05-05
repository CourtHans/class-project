function niceGreeting() {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18) {
        greeting = 'Good evening, ';
    } else if (hourNow > 12) {
        greeting = 'Good afternoon, ';
    } else if (hourNow > 0) {
        greeting = 'Good morning, ';
    } else {
        greeting = 'Welcome ';
    }

    return document.write('<h3>' + greeting + '</h3>');
}

function askName() {
    var userName = prompt('What is your preferred name?');

    return document.write('<h3>' + userName + '!</h3>');
}

function likeJokes() {
    var response = prompt('Do you like bad jokes? Please enter "Y" or "N"').toLowerCase();

    if (response === 'y') {
        message = 'I\'m glad to hear you love to laugh!';
    } else if (response === 'n') {
        message = 'Wow, too bad you don\'t enjoy a good laugh.';
    } else {
        message = 'Really? Not going to participate today?';
    }

    return document.write('<h3>' + message +'</h3>');
}