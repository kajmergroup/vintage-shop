const router = require("express").Router();
const user = require("../controllers/user.controller");


router.get("/",user.getAll)

router.get("/:id",user.getOne)

router.put("/:id",user.update)

router.delete("/:id",user.delete)

router.post("/address", user.create_address);

router.delete("/address/:id",user.delete_address)

router.put("/address/:id",user.update_address)

module.exports = router;
