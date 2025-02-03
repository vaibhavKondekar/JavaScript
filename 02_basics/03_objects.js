//singleton
//object.create

//object literals

const mysym = Symbol("key")
const jsUser={
    name:"vaibhav",
    // mysym : "mykey",  //this will be treated as string
    [mysym]:"mykey",
    "Full Name" :"vaibhav kondekar",
    age:18,
    location:"sangli",
    isLosggedIn: true,
}


//two methods to access the values in objects
console.log(jsUser.age) 
console.log(jsUser["Full Name"]) //if we have key in "" then prefer this 
console.log(jsUser[mysym])  //correct way to access symbol

// Object.freeze(jsUser);
jsUser["Full Name"]="Vaibhav Dattatray Kondekar"
console.log(jsUser);

jsUser.greeting1 =function(){
    console.log("Hello ");
    
}

jsUser.greeting2 =function(){
    console.log(`hello js user ${this.name}`);
    
}
console.log(jsUser.greeting2());
