/* Mixed Messages Project for codeacademy.
Premise: Randomly generate a disease, its symptoms, and a cure.  The disease will be randomly generated from three smaller strings.
*/



//i want to include three symptoms per run of the program
var symptoms = [
    "See far objects",
    "Have slightly blurry vision after rubbing your eyes",
    "Tear up a little from yawning",
    "Get dizzy from standing up too quickly",
    "Find it tough to get out of bed",
    "Urinates regularly"
];


//One cure per run of the program
var cures = [
    "Essential oils.  Any combination should work.",
    "More astrology is recommended",
    "Cliff jumping with no paraschute should cure the issue.  And the symptoms!",
    "Watch a few episodes of Goop should do it."
];



//Components for the disease
var sylOne = [
    "Di", "Bi", "Oxy", "Gyno", "Articu"
];

var sylTwo = [
    "thoro", "rene", "oraxi", "ortho", "clenbu", "weren", "profil", "bes"
];

var sylThree = [
    "azine", "araxi", "plasia", "praxis", "thraxi", "itis", "laxin", "ois"
];



//disease generating function.
function generateDisease() {
    let firstS = sylOne[Math.floor(Math.random() * sylOne.length)];
    let secondS = sylTwo[Math.floor(Math.random() * sylTwo.length)];
    let thirdS = sylThree[Math.floor(Math.random() * sylThree.length)];
    return firstS + secondS + thirdS;
};
//console.log(generateDisease()); //test

//generate symptoms, pick three and but make sure they are all different
function generateSymptoms() {
    sympArr = [];
    let i = 0;
    let theSymptom;
    do {
        theSymptom = symptoms[Math.floor(Math.random() * symptoms.length)];
        if (!sympArr.includes(theSymptom) || (i === 0)) {
            i+=1;
            sympArr.push(theSymptom);
        };
    } while (sympArr.length < 3);
    //console.log(sympArr.includes(sympArr[i]))
    return sympArr;
};

/* test code
let testArr = generateSymptoms();
console.log(testArr[0], testArr[1], testArr[2])
*/


//generate a cure string
function generateCures() {
    let thisCure = cures[Math.floor(Math.random() * cures.length)];
    return thisCure;
};

console.log(`Based on an advanced AI calculus, your disease could be: ${generateDisease()}`);
console.log("Symptoms include:");
let sympArrFinal = generateSymptoms();
console.log(`1. ${sympArrFinal[0]}`);
console.log(`2. ${sympArrFinal[1]}`);
console.log(`3. ${sympArrFinal[2]}`);
console.log("Possible cures:");
console.log(generateCures());