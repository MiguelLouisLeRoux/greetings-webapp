const assert = require('assert');

const greet = require('../factory-logic');

describe ("The Greeting Function", function(){
    describe ("Should be able to get and return names", function(){
        it('Should return Pete', function(){

            var greetTest = greetExerciseFactFunct();

            greetTest.getName("Pete");

            assert.equal('Pete',greetTest.values().theName);
        })

        it('Should return Gertrude', function(){

            var greetTest = greetExerciseFactFunct();

            greetTest.getName("Gertrude");

            assert.equal('Gertrude',greetTest.values().theName);
        })
    })

    describe ("Should be able to return greeting in optional language", function(){
        it('Should return greeting in Portuguese', function(){
            var greetTest = greetExerciseFactFunct();
            assert.equal("Olá, ",greetTest.values().gPort);
        })

        it('Should return greeting in Swedish', function(){
            var greetTest = greetExerciseFactFunct();
            assert.equal('Hej, ',greetTest.values().gSwed);
        })

        it('Should return greeting in Japanese', function(){
            var greetTest = greetExerciseFactFunct();
            assert.equal('こんにちは, ',greetTest.values().gJap);
        })
    })

    describe ("Should be able increment count when necessary", function(){
        it('Should not increment count when greeting no name', function(){
            var greetTest = greetExerciseFactFunct();

            // greetTest.greetCounts("");
            greetTest.getName("");
            greetTest.radioCheck("portuguese");

            assert.equal(0,greetTest.values().counting);
        })

        it('Should increment count when greeting name', function(){
            var greetTest = greetExerciseFactFunct();

            greetTest.getName("John");
            greetTest.radioCheck("portuguese");
            greetTest.getName("Keith");
            greetTest.radioCheck("portuguese");
            greetTest.getName("Amber");
            greetTest.radioCheck("portuguese");

            assert.equal(3,greetTest.values().counting);
        })

        it('Should not increment count when greeting the same name', function(){
            var greetTest = greetExerciseFactFunct();

            greetTest.getName("John");
            greetTest.radioCheck("portuguese");
            greetTest.getName("Keith");
            greetTest.radioCheck("portuguese");
            greetTest.getName("Amber");
            greetTest.radioCheck("portuguese");
            greetTest.getName("Amber");

            assert.equal(3,greetTest.values().counting);
        })
    })

    describe ("Should be able to return error messages when necessary", function(){
        
        it('Should return error message when name has been entered more than once', function(){
            var greetTest = greetExerciseFactFunct();

            greetTest.getName("Miguel");
            greetTest.radioCheck("portuguese");
            greetTest.getName("Miguel");
            greetTest.radioCheck("portuguese");

            assert.equal("You have already been greeted.", greetTest.values().theError);
        })

        it('Should return error message when no name has been entered', function(){
            var greetTest = greetExerciseFactFunct();

            greetTest.getName("");
            greetTest.radioCheck("portuguese");

            assert.equal('Oops, no name entered.', greetTest.values().theError);
        })

        it('Should return error message when no language option has been selected', function(){
            var greetTest = greetExerciseFactFunct();

            greetTest.getName("Miguel");
            greetTest.noRadioButton();
            
            assert.equal("Oops, you have not selected a language.", greetTest.values().theError);
        })

        it('Should return error message when numbers and symbols are entered', function(){
            var greetTest = greetExerciseFactFunct();

            greetTest.getName("!!@#444");
            greetTest.radioCheck("portuguese");
            
            assert.equal("Oops, no name entered.", greetTest.values().theError);
        })
    })

    describe ("Clearing counter", function(){
        it('Should be able reset counter to 0', function(){
            var greetTest = greetExerciseFactFunct();

            greetTest.getName("John");
            greetTest.radioCheck("portuguese");
            greetTest.getName("Keith");
            greetTest.radioCheck("portuguese");
            greetTest.getName("Amber");
            greetTest.radioCheck("portuguese");

            greetTest.clearingButtonFactFunc()

            assert.equal(0,greetTest.values().counting);
        })

        it('Should be able to empty list of names', function(){
            var greetTest = greetExerciseFactFunct();

            greetTest.getName("John");
            greetTest.radioCheck("portuguese");
            greetTest.getName("Keith");
            greetTest.radioCheck("portuguese");
            greetTest.getName("Amber");
            greetTest.radioCheck("portuguese"); 

            greetTest.clearingButtonFactFunc()

            assert.deepEqual({},greetTest.values().objNames);
        })
    }) 
})