const express = require("express");
const app = express();
const PORT = 8000;

// View engine setup
app.set("view engine", "ejs");

// Homepage Route
app.get("/", (req, res) => res.render("home"));

// Html Route
app.get("/html", (req, res) => res.render("index"));

// Members API Routes
app.use("/json", require("./routes/routerJson"));
app.use("/status", require("./routes/routerStatus"));
app.use("/uuid", require("./routes/routerUuid"));
app.use("/delay", require("./routes/routerDelay"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
