const express = require('express');
const app = express();
const port = 3000; // 3000 for Windows and 5000 for macOS

// Requirements
// On the home page (get "/"), users should see:

// "99 Bottles of beer on the wall"
// a link that says "take one down, pass it around"
// this should link to /98, where the number represents the number of bottles left.
// When a number is given in the url (get "/:number_of_bottles"), users should see:

// The number of bottles of beer on the wall (i.e. 98 Bottles of beer on the wall.)
// a link to "take one down, pass it around", where the href is number of bottles in the parameter minus 1.
// If there are 0 bottles left, do not show a link to "take one down"

// Add a link to start over, which directs the user back to the home page.

//Solution 1
app.get("/", (req, res) => {
    res.send(`<h1>99 Bottles of beer on the wall</h1>
    <a href='http://localhost:3000/98'>Take one down, pass it around</a>`);
  });
  
  // next pages route
  app.get("/:bottlenumber", (req, res) => {
    const nextNumber = req.params.bottlenumber - 1;
    if (nextNumber >= 0) {
      res.send(`<h1>${req.params.bottlenumber} bottle(s) of beer on the wall</h1>
    <a href='http://localhost:3000/${nextNumber}'>Take one down, pass it around</a>
    `);
    } else {
      res.send(`<a href=//localhost:3000>Main Page</a>`)
    }
  });


  //Solution2
app.get("/", (req, res) => {
    res.send(`<h1>99 Bottles of beer on the wall</h1>
    <a href="http://localhost:3000/98">Take one down, pass it around.</a>
    `);
});

app.get("/:number_of_bottles", (req, res) => {
    let bottles = req.params.number_of_bottles;
    let anchor = "";
    bottles != 0
        ? (anchor = `<a href="http://localhost:3000/${bottles - 1}">Take one down, pass it around.</a>`)
        : (anchor = `<a href="http://localhost:3000/">Start over.</a>`);

    res.send(`<h1>${bottles} Bottles of beer on the wall.</h1>
    ${anchor}
    `);
});





app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});