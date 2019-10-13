const router = require("express").Router();
const UserController = require("./controllers/UserController");

router.get("/users", UserController.index);
router.get("/users/:id", UserController.show);
router.post("/users", UserController.store);
router.put("/users/:id", UserController.update);
router.delete("/users/:id", UserController.destroy);

module.exports = router;
