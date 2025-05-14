const createRouter = require("./createRouter");
const { getAllUsers } = require("../controllers/usersController");
router.get("/", getAllUsers);


module.exports = router;