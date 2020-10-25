// I M P O R T S
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const ejs = require('ejs');

// I N I T   E X P R E S S
const app = express();

// E X P R E S S   A R G S

// EJS engine for views and logic
app.set('view engine', 'ejs');
// Public mapping of /img for images
app.use(express.static('public'));
// Parse cookies
app.use(cookieParser());
// Parse req bodies
app.use(bodyParser.urlencoded({ extended: true }));
// Logger dev
app.use(logger('dev'));

// T E S T   D A T A

const sigactData = require("./data/IraqSigactSmall.json")

// R O U T E S /////////////////////////////////////////////////

// L O G I N

// GET
app.get("/login", (req, res, next) => {
  res.render("login")
});

// POST
app.post("/login", (req, res, next) => {
  const reqVars = req.body;
  if (reqVars.username === "admin" && reqVars.pin === "1234") {
    res.cookie('username', reqVars.username)
    res.redirect("main")
  } else {
    res.render("login", { title: "Login", error: "INVALID CREDENTIALS"})
  }
});

// A C C E S S   C O N T R O L 

// G E T   U S E R 
app.use((req, res, next) => {
  if (typeof req.cookies.username !== "undefined") {
  res.locals.user = req.cookies.username;
  res.locals.aid = "aid-1"
  next();
  } else {
    res.render("login")
  }
})

// L O G O U T

app.get("/logout", (req, res) => {
  res.clearCookie("username");
  res.redirect("login")
})



// M A I N
app.get("/main", (req, res) => {
  res.render("main")
})

// A D D   R E P O R T

app.get("/reports/add", (req, res, next) => {
  console.log(req.cookies)
  res.render(req.baseUrl + "add_report", { title: "Add Report" });
});

// V I E W   R E P O R T S 

app.get("/reports", (req, res, next) => {
  res.render("view_reports", { title: "View Reports" , reports: sigactData });
});

// V I E W   R E P O R T

app.post("/reports/:id", (req, res, next) => {
  res.render("report", { report_id: req.paramas.id })
})

// G E O S P A T I A L   V I E W

app.get("/geo", (req, res, next) => {
  res.render("geo", { title: "Geo" });
});

// S E T T I N G S

app.get("/settings", (req, res, next) => {
  res.render("settings", { title: "Settings" });
});

// P R O F I L E

app.get("/profile", (req, res, next) => {
  res.render("profile", { title: "Profile" });
});

// R O O T

app.get("/", (req, res) => {
  res.redirect('/main');
});

// S T A R T   T H E    S E R V E R

const server = app.listen(3005, () => {
  console.log(`Express is running on port ${server.address().port}`);
});
