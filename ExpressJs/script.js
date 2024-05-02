// Express.js Framework
// Introduction to Express.js
// Setting up a Basic Express application
// Routing
// Middleware
// Request and response handling
// Error handling


// Express.js -- it is npm package
// THis is a framework that is it gives a flow about how the things work
// manages everything from receiving the request and giving the response


// Setting up
// const express = require('express')
// const app = express()

// app.use(function(req, res, next){
//     console.log('middleware works');
//     next();
// });
// // Express handler website
// // routes create karna
// // app.get(route, requestHandler)    requestHandler is a middleware and it is function
// // app.get  matlab that wahi chalo and app.use matlab that bar bar chalo
// app.get('/', function (req, res) {
//   res.send('Hello World coach!!');
// })
// app.get('/profile', function (req, res) {
//   res.send('Hello World Champs');
// })
// app.get('/home', function (req, res,next) {
//   return next(new Error("SOmething went wrong!"))
// })

// app.use((err, req,res,next) => {
//     console.error(err.stack)
//     res.status(500).send("Something is not okay!")
// })
// app.listen(3000)


// Middleware - whenever server accepts request from there till it reaches route if the request is stopped in middle and something is performed on it then it is called middleware in most cases

// Error Handling



// form handling and working with the forms
// handle backend process of forms and making sure that the data coming from any frontend lib,
// fw, templating engines, we still handle it at the backend process

// session and cookie --- we can keep any data of frontend on browser and we can request anything on backend then the saved data will automatically go to the backend
// data saved on frontend - cookie and the string through which the server is connected to the frontend that is session
// for eg - login in web, authentication
// blob ---  in a  binary data -- it is used to explain in yt vdo
// we had send plain text to the server it received a blog which is not directly readalee so to handle this we have to make blob again readable

const express = require('express')
const app = express()

app.use(express.json());   // makes json readable
app.use(express.urlencoded({ extended: true }));


app.get('/', function (req, res) {
  res.send('Hello World coach!!');
})
app.get('/profile', function (req, res) {
  res.send('Hello World Champs');
})
app.get('/home', function (req, res,next) {
  return next(new Error("SOmething went wrong!"))
})

app.use((err, req,res,next) => {
    console.error(err.stack)
    res.status(500).send("Something is not okay!")
})
app.listen(3000)

