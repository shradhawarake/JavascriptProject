// step 1 definaition of function

// function getUserStatus(){
//     //var status_code = undefined; // due to hoisting, this line is implicitly added at the top of the function

//     console.log(status_code);
//     var status_code = "active";
//     console.log(status_code);
    
// }

// step 2 function calling
// getUserStatus();


//next example
console.log(greeting);   // Output: undefined
var greeting = "Hello!";
console.log(greeting);   // Output: "Hello!"

// Behind the scenes:
// var greeting;              <-- hoisted with undefined
// console.log(greeting);    <-- undefined
// greeting = "Hello!";      <-- assignment stays in place
// console.log(greeting);    <-- "Hello!"