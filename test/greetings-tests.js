const assert = require('assert');

const theGreet = require('../factory-logic');

describe ("The Greeting Function", function(){
    describe ("Should be able to get and return names", function(){
        const greet = theGreet();
        it('Should return Pete', function(){
            greet.radioCheck('Pete', 'swedish');
            assert.equal('Pete', greet.values().theName);
        })

        it('Should return Gertrude', function(){
            greet.radioCheck('Gertrude', 'swedish');
            assert.equal('Gertrude', greet.values().theName);   
        })
    })

    describe ("Should be able to return greeting in optional language", function(){
        const greet = theGreet();
        it('Should return greeting in Portuguese', function(){
            assert.equal("Olá, ",greet.values().gPort);
        })
        it('Should return greeting in Swedish', function(){
            assert.equal('Hej, ',greet.values().gSwed);
        })

        it('Should return greeting in Japanese', function(){
            assert.equal('こんにちは, ',greet.values().gJap);
        })
    })

    describe ("Should be able to greet name in optional language", function(){
        const greet = theGreet();
        it('Should greet Pete in Portuguese', function(){
            assert.equal("Olá, Pete !", greet.radioCheck('Pete', 'portuguese'));
        })
        it('Should greet Jack in Swedish', function(){
            assert.equal('Hej, Jack !',greet.radioCheck('Jack', 'swedish'));
        })

        it('Should greet Steve in Japanese', function(){
            assert.equal('こんにちは, Steve !', greet.radioCheck('Steve', 'japanese'));
        })
    })

    describe ("Should be able increment count when necessary", function(){
        const greet = theGreet();
        it('Should not increment count when greeting no name', function(){
            greet.radioCheck("", 'swedish')
            assert.equal(0, greet.values().counting);
        })

        it('Should increment count when greeting name', function(){
            greet.radioCheck("John", "portuguese");
            greet.radioCheck("Keith", "portuguese");
            greet.radioCheck("Amber", "portuguese");

            assert.equal(3, greet.values().counting);
        })

        it('Should not increment count when greeting the same name', function(){
            greet.radioCheck("John", "portuguese");
            greet.radioCheck("Keith", "portuguese");
            greet.radioCheck("Amber", "portuguese");
            greet.radioCheck("Amber", "portuguese");

            assert.equal(3, greet.values().counting);
        })
    })

    describe ("Should be able to return error messages when necessary", function(){
        const greet = theGreet();
        
        it('Should return error message when name has been entered more than once', function(){

            greet.radioCheck("Miguel","portuguese");
            greet.radioCheck("Miguel","portuguese");

            assert.equal("This person has already been greeted.", greet.values().theError);
        })

        it('Should return error message when no name has been entered', function(){
            greet.radioCheck("","portuguese");
            assert.equal('Oops, no name entered.', greet.values().theError);
        })

        it('Should return error message when no language option has been selected', function(){
            
            greet.radioCheck("Pete", undefined);
            
            assert.equal("Oops, no language has been selected.", greet.values().theError);
        })

        it('Should return error message when numbers and symbols are entered', function(){
            greet.radioCheck("!!@#444", "portuguese");

            assert.equal("Oops, no name entered.", greet.values().theError);
        })
    })

    describe ("Clearing counter", function(){
        const greet = theGreet();
        it('Should be able reset counter to 0', function(){

            greet.radioCheck("John", "portuguese");
            greet.radioCheck("Keith", "portuguese");
            greet.radioCheck("Amber", "portuguese");

            greet.clearingButtonFactFunc();

            assert.equal(0, greet.values().counting);
        })

        it('Should be able to empty list of names', function(){

            greet.radioCheck("John", "portuguese");
            greet.radioCheck("Keith", "portuguese");
            greet.radioCheck("Amber", "portuguese"); 

            greet.clearingButtonFactFunc();

            assert.deepEqual({},greet.values().objNames);
        })
    }) 
})