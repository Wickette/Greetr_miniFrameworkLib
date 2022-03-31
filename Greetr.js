// Framework/Library

// global variable
// jQuery variable
( function (global, $) {
    'use strict'

    let Greetr = function (firstName, lastName, language) {
            return new Greetr.init( firstName, lastName, language );
    }

    Greetr.prototype = {



    };

    Greetr.init = function(firstName, lastName, language) {

        let self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

    }

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;

})(window, jQuery);
