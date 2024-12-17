// dynamic routing
//  -- dynamic routing  and how to get data coming from frontend and ackend route

// setting up parsers for form
// setting up ejs for ejs pages
// setting up public static files

// get method -- browser to frontend
// post method -- frontend to backend


// dynamic
const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());                            //parser
app.use(express.urlencoded({extended: true}));      //parser
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", 'ejs');

app.get("/", function(req, res){
    // res.send("It is working !!");
    res.render("index");
});

app.get("/profile/:username", function(req, res){
    // res.send("It is working !!");
    res.send(`welcome, ${req.params.username}`);
});
app.get("/author/:username/:age", function(req, res){
    res.send("It is working !!");
    res.send(`welcome, ${req.params.username} of age ${req.params.age}`);
});

app.listen(3000, function(){
    console.log("It is running");
});


// setting up ejs
// install ejs from npm
// setup ejs as a view engine



// dynamic routing -- firstly go to the browser then write the url that you want and click enter 
// after that create that rojute and send res anything
// Now if you want to make it dynamic then we need to find the dynamic part and add : after that

