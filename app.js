// I M P O R T S

// Express server
const express = require("express");
// Parse req bodies
const bodyParser = require("body-parser");
// Create and parse cookies
const cookieParser = require("cookie-parser");
// Morgan to log any requests on REST
const logger = require("morgan");
// EJS for generating templates
const ejs = require("ejs");
// DB connection
const db = require("./db");
// Helper DB funcs
const dbHelpers = require("./models")(db);
// Helper field funcs
const tblHelpers = require("./helpers/tblFields");
// Local contact info
const localContacts = require("./data/contact_information.json");

// I N I T   E X P R E S S
const app = express();

// E X P R E S S   A R G S

// EJS engine for views and logic
app.set("view engine", "ejs");
// Public mapping of /img for images
app.use(express.static("public"));
// Parse cookies
app.use(cookieParser());
// Parse req bodies
app.use(bodyParser.urlencoded({ extended: true, limit: "500mb" }));
// Logger dev
app.use(logger("dev"));

// R O U T E S // M A N A G E   E X P R E S S   R O U T I N G

// L O G I N

// GET
app.get("/login", (req, res, next) => {
  res.render("login");
});

// POST
app.post("/login", (req, res) => {
  dbHelpers.getUsername(req.body.username).then((userObj) => {
    console.log(userObj);
    console.log(req.body);
    if (Number(req.body.pin) === userObj[0].user_pin) {
      res.cookie("analyst_id", userObj[0].user_name);
      res.redirect("main");
    } else {
      res.render("login", { error: "Invalid Credentials" });
    }
  });
});

// A C C E S S   C O N T R O L // L I M I T   A C C E S S

// G E T   U S E R
app.use((req, res, next) => {
  if (typeof req.cookies.analyst_id !== "undefined") {
    res.locals.analyst_id = req.cookies.analyst_id;
    next();
  } else {
    res.render("login");
  }
});

// L O G O U T

app.get("/logout", (req, res) => {
  res.clearCookie("analyst_id");
  res.redirect("login");
});

// M A I N
app.get("/main", (req, res) => {
  // Add userReports to render...
  const allReportsPromise = Promise.resolve(dbHelpers.getAllReports());
  const userReportsPromise = Promise.resolve(
    dbHelpers.getTargetField("analyst_id", req.cookies.username)
  );
  Promise.all([allReportsPromise, userReportsPromise]).then((values) => {
    res.render("main", {
      reports: values[0].length,
      myReports: values[1].length,
      localContacts,
    });
  });
});

// A D D   R E P O R T

// GET
app.get("/reports/add", (req, res) => {
  dbHelpers.getUnique().then((unique) =>
    res.render(`${req.baseUrl}add_report`, {
      unique,
      fieldNames: tblHelpers(),
    })
  );
});

// POST
app.post("/reports/add", (req, res) => {
  // Set empty vals to 'None'
  Object.keys(req.body).forEach(
    (field) => (req.body[field] = req.body[field] || "None")
  );
  const addSingleReport = Promise.resolve(
    dbHelpers.addSingleReport([
      "Manual Input",
      req.cookies.analyst_id,
      ...Object.values(req.body),
    ])
  );
  const allReportsPromise = Promise.resolve(dbHelpers.getAllReports());
  const userReportsPromise = Promise.resolve(
    dbHelpers.getTargetField("analyst_id", req.cookies.analyst_id)
  );
  Promise.all([allReportsPromise, userReportsPromise, addSingleReport]).then(
    (values) => {
      res.render("main", {
        reports: values[0].length,
        myReports: values[1].length,
        localContacts,
        message: { style: "primary", msg: "Added report successfully!" },
      });
    }
  );
});

// V I E W   R E P O R T S

app.get("/reports", (req, res) => {
  dbHelpers.getAllReports().then((records) => {
    res.render("view_reports", {
      records,
      fieldNames: tblHelpers(),
    });
  });
});

app.get("/api/reports", (req, res) => {
  dbHelpers.getAllReports().then((data) => {
    data = { data: data.map((record) => Object.values(record).flat()) };
    res.send({ data: data.data });
  });
});

// V I E W   R E P O R T

app.get("/reports/:id", (req, res) => {
  dbHelpers.getSpecificReports(req.body.id).then((report) => {
    res.render(
      "view_report",
      { report_id: req.paramas.id },
      { fieldNames: tblHelpers() }
    );
  });
});

// G E O S P A T I A L   V I E W

// GET
app.get("/geo", (req, res) => {
  res.render("geo");
});

// POST
app.post("/geo", (req, res) => {
  const reports = req.body.report_ids;
  dbHelpers.getSpecificReports(reports).then((records) => {
    res.render("geo", { records, fieldNames: tblHelpers() });
  });
});

// S E T T I N G S

app.get("/settings", (req, res) => {
  res.render("settings");
});

// P R O F I L E

app.get("/profile", (req, res) => {
  res.render("profile");
});

// D A T  A   A Q U I S I T I O N

// F I L E S

app.get("/import", (req, res) => {
  res.render("import", { tableCols: tblHelpers() });
});

app.post("/import/add", (req, res) => {
  console.log(req.body);
});

// A P I ' S

// GET api(s)
app.get("/api", (req, res) => {
  res.render("api");
});

// POST new api
app.post("/api", (req, res) => {
  res.render("api", { response: res });
});

// R O O T // C A T C H   A L L   O T H E R    R E Q U E S T S //

app.get("/", (req, res) => {
  res.redirect("/main");
});

// S T A R T   T H E    S E R V E R

const server = app.listen(3005, () => {
  console.log(`Express is running on port ${server.address().port}`);
});
