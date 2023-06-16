const renatoRoute = (req, res) => {
  res.send("Renato Damas");
};

const vitoriaRoute = (req, res) => {
  res.send("Vitória Damas");
};

const samadRoute = (req, res) => {
  res.send("Samad Damas");
};

module.exports = {
  renatoRoute,
  vitoriaRoute,
  samadRoute
}