/* Mixed Messages Project for codeacademy.
Premise: Randomly generate a disease, its symptoms, and a cure.  The disease will be randomly generated from three smaller strings.
*/



//i want to include three symptoms run of the program
var symptoms = [
    "see far objects",
    "have slightly blurry vision after rubbing your eyes",
    "tear up a little from yawning",
    "get dizzy from standing up too quickly",
    "find it tough to get out of bed"
];


//One cure per run of the program
var cures = [
    "Essential oils.  Any combination should work.",
    "More astrology is recommended",
    "Cliff jumping with no paraschute should cure the issue.  And the symptoms!"
];



//Components for the disease
var sylOne = [
    "Di", "Bi", "Oxy", "Gyno", "Articu"
];

var sylTwo = [
    "thoro", "rene", "oraxi", "ortho", "clenbu", "weren"
];

var sylThree = [
    "azine", "araxi", "plasia", "praxis", "thraxi"
];



//disease generating function.