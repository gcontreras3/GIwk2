var tom = 0.0987;
var jerry = 0.45;
var height;
var mass;

// Compare the BMI of Tom & Jerry using the formula
// BMI = mass / height ^ 2 = mass / (height * height)

function BMI(mass, height) {
   return mass / (height * height);
}
var statement = tom > jerry;
console.log(`Is Tom's BMI higher than Jerry's? ${statement}`)
console.log(`Toms BMI ${BMI(8, 9)}`);
console.log(`Jerry's BMI ${BMI(45, 10)}`);