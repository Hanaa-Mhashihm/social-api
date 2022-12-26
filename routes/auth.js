const router = require("express").Router();
const User = require("../models/User");

/* Register */
router.get("/register", async(req, res) => {
    const user = await new User({
        userName: "Hanaa",
        email: "hanaa@gmail.com",
        password: "123456789"
    })

    await user.save();
    res.send("OKkkkkkkkkkk");
});

module.exports = router;