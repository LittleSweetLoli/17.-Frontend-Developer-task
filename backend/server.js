const server = require("express")();
const port = 3000;

process.env.BASEDIR = process.cwd();

server.use("/api", require("./routes"));

server.listen(port, () => {
  console.log(`Server listening at http://127.0.0.1:${port}`);
});
