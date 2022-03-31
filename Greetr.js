// Framework/Library

// global variable - global
// jQuery variable - $

// IIFE 
( function (global, $) {
    'use strict'

    let Greetr = function (firstName, lastName, language) {
            return new Greetr.init( firstName, lastName, language );
    }



    // can be used inside the Greetr.init object due to lexical environment and closures
    // these are not exposed to the outside world, unless someone views the source code 
    // declaring and creating variables to be used in Greetr function
    let supportedLanguages = ['en', 'es'];

    let greetings = {
        en: 'Hello',
        es: 'Hola'
    };

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

        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function() {
            if (supportedLanguages.indexOf(this.language) === -1) {
                throw "Invalid language"
            }
        },

        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!'
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        greet: function(formal) {
            let msg;

            // if undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }
            if (console) {
                console.log(msg);
            }

            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },

        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }

            return this;
        },

        setLang: function(lang) {
            this.language = lang;
            this.validate();
            return this;
        }

    };

    // Greetr Object to be created when run G$ / Greetr;
    Greetr.init = function(firstName, lastName, language) {

        let self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

    }

    // changing the name to use Greetr.prototype for ease of use
    Greetr.init.prototype = Greetr.prototype;

    // Adding the ability to use G$;
    global.Greetr = global.G$ = Greetr;

})(window, jQuery);
