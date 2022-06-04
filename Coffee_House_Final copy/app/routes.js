const { url } = require("inspector");

var ObjectId=require('mongodb').ObjectId

module.exports = function (app, passport, db) {
  // normal routes ===============================================================

  // show the home page (will also have our login links)
  app.get("/", function (req, res) {
    res.render("customerorder.ejs");
  });

  

  // PROFILE SECTION =========================
  app.get("/profile", isLoggedIn, function (req, res) {
   
    let usersCollection = [];
    let ordersCollection = [];
    db.collection("orders")
      .find()
      .toArray((err, served) => {
        if (err) {
          return console.log(err);
        }
          for (let i = 0; i < served.length; i++) {
            ordersCollection[i] = served[i].length ;
          }
        db.collection("users")
          .find()
          .toArray((err, result) => {
            if (err) {
              return console.log(err);
            } else {
              for (let i = 0; i < result.length; i++) {
                usersCollection[i] = result[i];
              }
            }
            // console.log(usersCollection)
            // console.log(result)
            res.render("profile.ejs", {
              user: req.user,
              //destructuring syntax
              served: served.filter(({served})=> served=== true),
              pending: served.filter(({served})=> served=== false),
              allUsers: usersCollection,
            });
          });
      });
  });

  // LOGOUT ==============================
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // message board routes ===============================================================
  // drinks: 'black',
  // size: 'Tall',
  // milk: 'whole',
  // toppings: 'cream',
  // syrup: 'cardamon',
  // sugar: 'brown',
  // customerName: 'Liz'

  app.post("/savedToDatabase", (req, res) => {
    // console.log(req.body)
    db.collection("orders").insertOne(
      {
        coffeeChoice: req.body.drinks,
        customerName: req.body.customerName,
        milkChoice: req.body.milk,
        drinkSize: req.body.size,
        // baristaName: req.body.baristaName,
        toppings: req.body.toppings,
        sugar: req.body.sugar,
        syrup:req.body.syrup,
        served: false,
      },

      (err, result) => {
        if (err) return console.log(err);

        console.log("saved to database");
        res.redirect("/");
      }
    );
  });
  app.put("/updateDatabase", (req, res) => {
    console.log({body:req.body, msg: "Body before .findOneAndUpdate"})

    db.collection("orders").findOneAndUpdate(
      //query's for a document 
      {
        //"primary key"
        _id: ObjectId(req.body.id)
      },
      // console.log(_id),
      //do the update according to operations
      {
        $set: {
          served: true,
          baristaName: req.body.baristaName
          // baristaName: req.user.local.email,
        },
      },
      {
        sort: { _id: -1 },
        upsert: false,
      },
      //after done w/ execution, triggers the call back and then redirects 
      (err, result) => {
        if (err) return console.log(err);
        console.log("saved to database");
        res.redirect("/profile");
      }
    );

    // db.collection("users").findOneAndUpdate(
    //   {
    //     "local.email": req.local.user.email,
    //   },
    //   {
    //     $push: {
    //       "local.completedOrders": req.body.orderId,
    //     },
    //   },
    //   {
    //     sort: { _id: -1 },
    //     upsert: false,
    //   },
    //   (err, result) => {
    //     if (err) return console.log(err);
    //     console.log("saved to database");
    //     res.redirect("/profile");
    //   }
    // );
  });

  app.delete("/deleteOrders", (req, res) => {
    console.log(req.body.id)
    db.collection("orders").findOneAndDelete(
      { 
         _id: ObjectId(req.body.id),
          //  id:e.target.id
      },
      (err, result) => {
        if (err) return res.send(500, err);
        res.send("Order deleted!");
      }
    );
  });

  // =============================================================================
  // AUTHENTICATE (FIRST LOGIN) ==================================================
  // =============================================================================

  // locally --------------------------------
  // LOGIN ===============================
  // show the login form
  app.get("/login", function (req, res) {
    res.render("login.ejs", { message: req.flash("loginMessage") });
  });

  // process the login form
  app.post(
    "/login",
    passport.authenticate("local-login", {
      successRedirect: "/profile", // redirect to the secure profile section
      failureRedirect: "/login", // redirect back to the signup page if there is an error
      failureFlash: true, // allow flash messages
    })
  );

  // SIGNUP =================================
  // show the signup form
  app.get("/signup", function (req, res) {
    res.render("signup.ejs", { message: req.flash("signupMessage") });
  });

  // process the signup form
  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/profile", // redirect to the secure profile section
      failureRedirect: "/signup", // redirect back to the signup page if there is an error
      failureFlash: true, // allow flash messages
    })
  );

  // =============================================================================
  // UNLINK ACCOUNTS =============================================================
  // =============================================================================
  // used to unlink accounts. for social accounts, just remove the token
  // for local account, remove email and password
  // user account will stay active in case they want to reconnect in the future

  // local -----------------------------------
  app.get("/unlink/local", isLoggedIn, function (req, res) {
    var user = req.user;
    user.local.email = undefined;
    user.local.password = undefined;
    user.save(function (err) {
      res.redirect("/profile");
    });
  });
};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();

  res.redirect("/");
}
