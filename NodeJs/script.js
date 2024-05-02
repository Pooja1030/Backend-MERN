// Node.js Basics
// Introduction to Node.js
// Installing Node.js and npm
// Working with modules
// File system operations
// Understanding HTTP modules


//  It is not a programming language , it is js runtime environment
// js was not able to create a Backend as it didn't had the functionality but then ryan dahl thought that it should create it then
// he did some changes in the google chrome v8 as it is open source and then he thought that we had to code in js as chrome engine v8 is made in c++
// He added a wrapper on c++ code which was in js that is we write js code which is received to the js layer and then that code will create a server with a c++ modules
// THe whole thing js wrapper + c++ modules == Node.js

// npm -- store which has packages
// working with node and npm -- npm init

// writefile,appendfile,copyfile,rename,unlink
const fs = require('fs');
fs.writeFile("hey.txt", "hey Hello", function(err){
    if(err) console.error(err);
    else console.log("done");
})
fs.appendFile("hey.txt", "main achi hun", function(err){
    if(err) console.error(err);
    else console.log("done");
})
fs.rename("hey.txt", "hello.txt", function(err){
    if(err) console.error(err);
    else console.log("done");
})
fs.copyFile("hello.txt", "./copy/copied.txt", function(err){
    if(err) console.error(err);
    else console.log("done");
})
fs.unlink("hello.txt", function(err){
    if(err) console.error(err);
    else console.log("removed");
})

// rmdir -- 
fs.rmdir("./copy", {recursive: true}, function(err){
    if(err) console.error(err);
    else console.log("removed");
})
fs.rm("./copy", {recursive: true}, function(err){
    if(err) console.error(err);
    else console.log("removed");
})

// How to create a folder, read a file, create a file

// IMPPPP
// HTTP Module 
// protocol -- rules  -- ON the internet there are rules those are created y owners and these rules followed mandatory and
// this rules should e follow for that they are already in the os y software pre installed in it 
// http protocol -- yahi protocol/rule jisko follow kare ina aap internet pe nahi kuch hej sakte ho nhi kuch manga sakte ho

const http = require('http');

const server = http.createServer(function(req, res){
    res.end("hello world");
})

server.listen(3000);


// NPM understanding
// installing and uninstalling anything 
// Understanding node_modules
// dependencies
// devdependencies
// scripts - understanding default scripts PATH and custom scripts

// npm - node package manager
// The things installed in node js core are called module and the things we download from npm are package

// install - npm i packagename / npm install packagename 
// uninstall -- npm uninstall packagename
// version install -- npm i packagename@version
// dependencies -- packages and packages ki dependencies
// devdependencies -- packages that are used only for development and when we deploy it there is no use of them (--dev in syntax)



// scripts -- 
// start and test are 2 scripts then in our path this two words are already there 
// we use run so that it runs cmds that we created (eg --npm run chacha)
// package chalk
//  concurrency package to use 2 servers at the same time