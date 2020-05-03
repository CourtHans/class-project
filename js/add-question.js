var response = prompt('Do you like bad jokes? Please enter "Y" or "N"').toLowerCase ();

if (response == 'y') {
    message = 'I\'m glad to hear you love to laugh!';    
} else if (response == 'n') {
    message ='Wow, too bad you don\'t enjoy a good laugh.';
} else {
    message = 'Really? Not going to participate today?';
}

document.write('<h3>' + message +'</h3>');