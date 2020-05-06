function askName() {
    var userName = prompt('What is your preferred name?');

    return document.write('<h3> Hello ' + userName + ',</h3>');
}

function niceGreeting() {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18) {
        greeting = 'good evening!';
    } else if (hourNow > 12) {
        greeting = 'good afternoon!';
    } else if (hourNow > 0) {
        greeting = 'top o\' the morning!';
    } else {
        greeting = 'welcome to my joke site!';
    }

    return document.write('<h3>' + greeting + '</h3>');
}

function likeJokes() {
    var response = prompt('Do you like bad jokes? Please enter "Y" or "N"').toLowerCase();
    
    while (response !== 'n' && response !=='y') {
        response = prompt ('C\'mon - simple question, simple answer: Y or N?');
    }
    if (response === 'y') {
        message = 'I\'m glad to hear you love to laugh!';
    } else if (response === 'n') {
        message = 'Wow, too bad you don\'t enjoy a good laugh.';
    }

    return document.write('<h3>' + message + '</h3>');
}
//user MUST enter a number between 1-5 or will be prompted to try again
function getRating () {
    var count = prompt('On a scale of 1-5, how many stars would you give dad jokes?');

    while (isNaN(count) || count === '' || count <= 0 || count > 5) {
        count = prompt('Please enter a number from 1 to 5...');
    }

    return count;
}
//combines answer from get(Rating) with saved star image to return number of stars user rated, inline-block display
function showRating (){
    var result = '';
    var star = '<img src ="images/star.png">';
    var total = getRating();

    for (var i=0; i < total; i++) {
        var realCount = i + 1;
        result = result + '<p style="width: 75px; display: inline-block;">' + star + '</p>'
    }

    return document.write('<h3> Your dad joke rating...' + result + '</h3>');
   
}
