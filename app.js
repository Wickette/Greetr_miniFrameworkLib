// this will use the Greetr Framework/Library

// variable to get a new object (person first and last name)
let g = G$('Steph', 'Clark');

// vaiable to get the login button 
let submitBtn = $('#login');

// variable to get the greeting testarea
let displayGreeting = $('#greeting')

// creating an on click event for the login button
submitBtn.on('click', function() {

    // hide the dropdown and button upon click
    $('#logindiv').hide();

    // set language to the greetr object by grabbing the value of the option, chaining HTMLGreeting that takes the selector- greeting textarea and boolean for formal or informal, and also logs to the console using log()
    g.setLang($('#lang').val()).HTMLGreeting(displayGreeting, true).log()
});





