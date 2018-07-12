const alphabet = "abcdefghijklmnopqrstuvwxyz";
const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];
const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];

console.log(students[0][1]);

function randomNumber() {
    const ranNum = Math.random();
    const newRange = ranNum * 20;
    const rounded = Math.ceil(newRange);
    return rounded;
}
//take alphabet as a parameter, 
function randomLetter() {
    const ranLetter = Math.random();
    const newRange = ranLetter * 27;
    const rounded = Math.floor(newRange);
    console.log(rounded);
    const selectedLetter = alphabet[rounded];
    return selectedLetter;
}

function randomFood() {
    const ranIndex = Math.random();
    const newRange = ranIndex * (foods.length + 1);
    const rounded = Math.floor(newRange);
    
   
    const ranFoodSelected = foods[rounded];
    return ranFoodSelected;

}

function randomStudent() {
    const ranIndex = Math.random();
    const newRange = ranIndex * (students.length + 1);
    const rounded = Math.floor(newRange);
    
   
    const ranStudentSelected = students[rounded];
    return ranStudentSelected;

}

function threeRandomStudent() {
    randomStudent();
    randomStudent();
    randomStudent();
}

console.log(randomNumber());
console.log(randomLetter());
console.log(randomFood());
console.log(randomStudent());
console.log(threeRandomStudent());


// function randomFood() {
//     const ranIndex = Math.random();
//     const newRange = ranIndex * (foods.length + 1);
//     const rounded = Math.floor(newRange);
    
//     const ranFood = Math.random();
//     const newFoodRange = ranFood * (foods[rounded].length + 1);
//     const roundedRanFood = Math.floor(newFoodRange);

//     const RanFoodSelected = foods[rounded][roundedRanFood];
//     return RanFoodSelected;

// }