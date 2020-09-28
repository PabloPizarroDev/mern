//Schema: como quiero guardar los datos si quiero q sean unicos, string, numeros, fecha, etc
//model: una ves que tenemos el Schema definido podemos crear un modelo de datos
const { Schema, model } = require("mongoose");
const noteSchema = new Schema(
  {
    //puedo poner cualquier nombre y el tipo
    title: String,
    //puedo requerir
    content: {
      type: String,
      required: true,
    },
    author: String,
    date: {
      type: Date,
      default: Date.now,
    },
    // fecha de creacion
  },
  {
    timestamps: true,
  }
);
//cada ves que creamos una nota la base de dato va a saber cuando vamos a necesitar guardar actualizar eliminar datos con las notas
//en mongoDb crea una coleccion llamada notes
module.exports = model("Note", noteSchema);
