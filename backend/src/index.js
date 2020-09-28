require("dotenv").config();

const app = require("./app");
require("./database");

//debo hacer una funcion asyncrona
async function main() {
  //iniciar el servidor
  await app.listen(app.get("port"));
  console.log("Server on port", app.get("port"));
}

main();
