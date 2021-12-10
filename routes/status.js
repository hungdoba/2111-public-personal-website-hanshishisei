const router = require("express").Router();
var fs = require("fs");

router.post("/", async (req, res) => {
    try {
        if (req.query.content) {
            var data = req.query.content;
            fs.writeFile("./data/status.txt", data, (err) => {
                if (err) throw err;
                res.status(200).json("success");
            });
        } else {
            res.status(500).json("No content");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/", async (req, res) => {
    try {
        fs.readFile("./data/status.txt", "utf8", function (err, buf) {
            if (err) throw err;
            res.status(200).json(buf);
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
