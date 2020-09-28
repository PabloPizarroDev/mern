const mongoose = require("mongoose");

//process es obj global tiene acceso a tu sistema ?=if :=else
const URI = process.env.MONGODB_URI
  ? process.env.MONGODB_URI
  : "mongodb://localhost/databasetest";
//conectar base de dato
mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("DB is connected");
});
