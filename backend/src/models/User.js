const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      //trim: limpia los espacios de los nombres ej ' pablo   pizarro  '/ 'pablo pizarro'
      trim: true,
      //que no se debe de repetir el usuario
      unique: true,
    },
  },
  {
    //fecha de creacion
    timestamps: true,
  }
);
module.exports = model("User", userSchema);
