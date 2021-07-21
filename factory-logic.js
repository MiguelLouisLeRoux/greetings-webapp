module.exports = function greetExerciseFactFunct() {

    //counter and object list
    let counter = 0;
    let namesList = {};

    //name variable
    let userName = "";
    let namesL = "";

    //Error message variable
    let error = "Oops, no name entered.";
    let secondGreet = "This name has already been greeted.";
    let noRad = "Oops, no language has been selected a language.";

    //languages
    // var eng = "Hello, ";
    let portGreet = "Olá, ";
    let swedGreet = "Hej, ";
    let japGreet = "こんにちは, ";
    let theGreet = "";
    let theWarn = "";
    
    function getName(nameInput) {
        userName = nameInput.theName;
        userName.trim();
        userName = userName.charAt(0).toUpperCase() + userName.slice(1);
        return userName;
    }

    function noRadioButton() {
        if (userName === "" || !/^[a-zA-Z]+$/.test(userName)) {
            theGreet = "";
            theWarn = error;
        } else { 
            theWarn = noRad;
            theGreet = "";
        }
    }
    
    function radioCheck(radVal) {
        if (userName === "" || !/^[a-zA-Z]+$/.test(userName)) {
            
            theWarn = error;
            theGreet = "";
            return theWarn;
        } else {
            // namesList = name1;
        
            if (/^[a-zA-Z]+$/.test(userName)) {
                if (namesList[userName] === undefined) {
                    if (radVal === "portuguese") {
                        counter++;
                        namesList[userName] = 1;
                        theGreet = portGreet + userName + " !";
                        theWarn = "";
                        return theGreet;
                        // return namesList;
                    } else if (radVal === "swedish") {
                        counter++;
                        namesList[userName] = 1;
                        theGreet = swedGreet + userName + " !";
                        theWarn = "";
                        return theGreet;
                        // return namesList;
                    } else if (radVal === "japanese") {
                        counter++;
                        namesList[userName] = 1;
                        theGreet = japGreet + userName + " !";
                        theWarn = "";
                        return theGreet;
                        // return namesList;
                    }

                    theWarn = "";

                } else if (namesList.hasOwnProperty(userName)){
                    theWarn = secondGreet;
                    theGreet = "";
                    namesList[userName] ++;
                    return namesList;
                }
            }
        }
    }

    function clearingButtonFactFunc() {
        counter = 0;
        namesList = {};
        theGreet = "";
    }
    
    function values() {
        return {
            counting : counter,
            theName : userName,
            errorMes : error,
            sGreet : secondGreet,
            theGreeting : theGreet,
            gPort : portGreet,
            gSwed : swedGreet,
            gJap : japGreet,
            objNames : namesList,
            theError : theWarn,
            theNameList : namesL
        }
    }

    return { getName,
             radioCheck,
             values,
             noRadioButton,
             clearingButtonFactFunc
    }
    
}