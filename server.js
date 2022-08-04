const express = require ("express");

const path = require ("path");
const app =  express ();

// midellwares 
app.use(express.static ("public"));


// custom midellwares 

  function checkTime(res, res, next) {
    console.log("middleware is activated");
    let hours = new Date().getHours();
    let days = new Date().getDay();
    if (hours >= 9 && hours <= 17 && days == 0 && days == 6) {
      res.render("home");
      next();
    } else {
      res.render("closed");
    }
  }
  // template engine 

app.set ("view engine", "pug");

// app.get (les méthodes)

app.get("/services", checkTime, (req, res) => {
  res.render(" <h1> Our Services </h1>");
 });

 app.get('/', checkTime, (req, res) => {
    res.render('index', { title: 'Home', message: 'Welcome to my Web site'});
  });
  

app.get("/contact",checkTime, (req, res) => {
    res.render("<h1> Contact us </h1>");
})

app.all("*", (req, res)=> {
    res.render("Pade not found");
});

app.listen(5000, (err) => {
    if (err) throw err;
    console.log(`Server is running on http://localhost:5000/`);
});


