const routes = require("express").Router();
const lesson1Controller = require("../controllers/lesson1");

routes.get('/', lesson1Controller.renatoRoute);
routes.get('/vitoria', lesson1Controller.vitoriaRoute);
routes.get('/samad', lesson1Controller.samadRoute);

module.exports = routes;