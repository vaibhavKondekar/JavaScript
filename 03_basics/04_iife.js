// Imediately invoked function expression

// function chai(){
//     console.log(`db connected`);
// }
// chai();

(function chai(){
    //named iife
    console.log(`db connected`);
})();  //for writing two iife use semicolon


((name)=> {
    //unnamed iife
    console.log(`db connected by ${name}`);
})("vaibhav")   //passing paramter