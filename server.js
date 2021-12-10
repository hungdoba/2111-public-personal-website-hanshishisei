const cors = require("cors");
const path = require("path");
const express = require("express");
require("dotenv").config({ path: "./config.env" });

const statusRoute = require("./routes/status");

const app = express();

app.use(cors());

app.use("/status", statusRoute);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client", "build")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    });
} else {
    app.get("/", (req, res) => {
        res.send("Api running");
    });
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});
