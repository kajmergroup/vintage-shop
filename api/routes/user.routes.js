const router = require("express").Router();
const user = require("../controllers/user.controller");


router.get("/users",user.getAll)

router.get("users/:id",user.getOne)

router.put("/users/:id",user.update)

router.delete("/users/:id",user.delete)

router.post("/address", user.create_address);

router.delete("/address/:id",user.delete_address)

router.update("/address/:id",user.update_address)

module.exports = router;
