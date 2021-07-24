module.exports = function greetExerciseFactFunct() {

    //counter and object list
    let counter = 0;
    let namesList = {};
    let theNameObj = [];

    //name variable
    let userName = "";
    let namesL = "";

    //Error message variable
    let error = "Oops, no name entered.";
    let secondGreet = "This person has already been greeted.";
    let noRad = "Oops, no language has been selected.";

    //Success message
    let cleared;

    //languages
    let portGreet = "Olá, ";
    let swedGreet = "Hej, ";
    let japGreet = "こんにちは, ";
    let theGreet = "";
    let theWarn = "";
    
    function radioCheck(theName, radVal) {
        cleared = "";
        userName = theName;
        
        if (userName === "" && radVal === undefined) {
            theWarn = error;
            return theWarn
        } else if (radVal === undefined && userName !== "") {
            theWarn = noRad;
            userName = "";
            return theWarn
        } else {
            userName.trim();
            userName = userName.charAt(0).toUpperCase() + userName.slice(1);
            if (!/^[a-zA-Z]+$/.test(userName)) {    
                theWarn = error;
                theGreet = "";
                userName = "";
            } else if (/^[a-zA-Z]+$/.test(userName)) {
                if (namesList[userName] === undefined) {
                    if (radVal === "portuguese") {
                        counter++;
                        namesList[userName] = 1;
                        theGreet = portGreet + userName + " !";
                        theWarn = "";

                        let element = new constr(userName, namesList[userName]);
                        theNameObj.push(element);

                        return theGreet;
                        // return namesList;
                    } else if (radVal === "swedish") {
                        counter++;
                        namesList[userName] = 1;
                        theGreet = swedGreet + userName + " !";
                        theWarn = "";

                        let element = new constr(userName, namesList[userName]);
                        theNameObj.push(element);

                        return theGreet;
                        // return namesList;
                    } else if (radVal === "japanese") {
                        counter++;
                        namesList[userName] = 1;
                        theGreet = japGreet + userName + " !";
                        theWarn = "";

                        let element = new constr(userName, namesList[userName]);
                        theNameObj.push(element);

                        return theGreet;
                        // return namesList;
                    }

                    theWarn = "";

                } else if (namesList.hasOwnProperty(userName)){
                    theWarn = secondGreet;
                    theGreet = "";
                    namesList[userName] ++;

                    for (let i = 0; i < theNameObj.length; i++) {
                        let itt = theNameObj[i];
                        if (itt.nameGreeted === userName) {
                            itt.count = namesList[userName];
                        }
                    }
                    return namesList;
                }
            }
        }
    }

    function clearingButtonFactFunc() {
        counter = 0;
        namesList = {};
        theNameObj = [];
        theGreet = "";
        theWarn = "";
        cleared = "Greets have been cleared.";
    }

    function clearing() {
        theGreet = "";
        theWarn = "";
        cleared = "";
    };

    function constr(nameGreeted, count) {
        this.nameGreeted = nameGreeted;
        this.count = count;
    }

    function partPerson(nameVal){
        for(let i = 0; i < theNameObj.length; i++){
            let itt = theNameObj[i];

            if (itt.nameGreeted === nameVal) {
                return {
                    theName: itt.nameGreeted,
                    theCount: itt.count
                }
            }
        }
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
            theNameList : namesL,
            dynObj : theNameObj,
            cleared: cleared
        }
    }

    return { radioCheck,
             values,
             clearingButtonFactFunc,
             partPerson,
             clearing
    }
    
}