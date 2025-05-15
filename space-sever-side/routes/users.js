const createRouter = require("./createRouter");
const { getAllUsers } = require("../controllers/usersController");

module.exports = createRouter(getAllUsers);