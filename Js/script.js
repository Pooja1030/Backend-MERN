// Fundamentals of JavaScript:
// arrays and objects
// functions return
// async js coding


// arrays 
// foreach map filter find indexOf


// var arr = [1,2,3,4,"hey",{}, true, function(){}, {}]
var arr = [1,2,3,4];
arr.forEach(function(val){
    console.log(val + " hello")
})

 
//map - when we want to create another array from the same arr
let arr = [1,4,2,7]
let ans = arr.map(function(val){
    // return 13;
    // return val;
    return val*3;
})
console.log(ans);


// filter
var ans1 = arr.filter(function(val){
    if(val > 3) { return true; }
    else return false;
})
console.log(ans1);

// find
var ans2 = arr.find(function(val){
    if(val == 2) return val;
})
console.log(ans2);

// indexOf -- to find any member in the arr



//  Objects  anything on leftside colon and right side anything
// key - value pairs
var obj = {
    name : "Pooja",
    age : 21
}

Object.freeze(obj);
obj.age = 24;


// Functions and return
// Functions are obj in js
function abcd(){
    // return 12;
    return "hello world";
}

var ans3 = abcd();



// Asynchronous -- code is in async nature it is send in side stack and the code in sync nature is processed first
// non-blocking in nature
async function pqrs(){
    var blob = await fetch(`https://randomuser.me/api/`);
    var ans = blob.json();
    
    console.log(ans.results[0].name);
}

pqrs();