// Framework/Library

// global variable - global
// jQuery variable - $

// IIFE 
// add semicolon to make sure your code will still run, even if a preceding library is missing a semicolon somewhere
;( function (global, $) {
    'use strict'

    // 'new' object
    let Greetr = function (firstName, lastName, language) {
            return new Greetr.init( firstName, lastName, language );
    }



    // can be used inside the Greetr.init object due to lexical environment and closures
    // these are not exposed to the outside world, unless someone views the source code 
    // declaring and creating variables to be used in Greetr function
    let supportedLanguages = ['en', 'es'];

    // informal greetings
    let greetings = {
        en: 'Hello',
        es: 'Hola'
    };


    // formal greeting
    let formalGreetings = {
        en: 'Greetings',
        es: 'Saludas'
    };

    // logging to console
    let logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion'
    };





    // Greetr method library
    // adding functionality to objects created
    Greetr.prototype = {
        //full name method
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        // validate that a 'supported language' is chosen
        validate: function() {
            if (supportedLanguages.indexOf(this.language) === -1) {
                throw "Invalid language"
            }
        },

        // informal greeting, that produces result based on langauge chosen
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!'
        },

        // formal greeting, that produces result based on langauge chosen
        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        // function that takes boolean to choose informal or formal greeting
        // thrue - produces formal greeting message
        greet: function(formal) {
            let msg;

            // if undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }
            // console logs the msg
            if (console) {
                console.log(msg);
            }

            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },

        // console logs the logMessages function above, with the fullName  
        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }

            return this;
        },

        // if you want to change the language on the fly - sets the new language and validates that it's a supported language
        setLang: function(lang) {
            this.language = lang;
            this.validate();
            return this;
        },

        // addes jQuery functionality to insert msg using jQuery selector
        HTMLGreeting: function( selector, formal ) {
            // if there is no $ throw error
            if(!$) {
                throw 'jQuery not loaded';
            }
            // if there is no selector throw error
            if (!selector) {
                throw 'Missing jQuery selector';
            }

            let msg;
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }
            
            $(selector).html(msg);

            return this;
        }

    };

    // Greetr Object to be created when run G$ / Greetr;
    Greetr.init = function(firstName, lastName, language) {

        let self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

        self.validate();

    }

    // trick borrowed from jQuery so we don't have to use the 'new' key work=d
    Greetr.init.prototype = Greetr.prototype;

    // Adding the ability to use G$, and attaching it to the global object
    global.Greetr = global.G$ = Greetr;

})(window, jQuery);
