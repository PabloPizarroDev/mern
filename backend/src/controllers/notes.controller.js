const notesCtrl = {};

const Note = require("../models/Note");

notesCtrl.getNotes = async (req, res) => {
  //find estoy diciendo que haga una busqueda en toda la base de datos
  //es asincrona puedo manejar con callback o promesas o await
  //me vuelve un arreglo [{},{},{}]
  const notes = await Note.find();
  res.json(notes);
};

notesCtrl.createNotes = async (req, res) => {
  //pido contenidos del autor
  const { title, content, date, author } = req.body;
  const newNote = new Note({
    title: title,
    content: content,
    date: date,
    author: author,
  });
  //para guardar la nota
  await newNote.save();
  res.json({ message: "Notas guardadas" });
};

notesCtrl.getNote = async (req, res) => {
  const note = await Note.findById(req.params.id);
  res.json(note);
};

notesCtrl.updateNotes = async (req, res) => {
  const { title, content, author } = req.body;
  await Note.findOneAndUpdate(
    { _id: req.params.id },
    {
      // title: title,
      // author: author,
      // content: content,
      title,
      author,
      content,
    }
  );
  res.json({ message: "Notas actualizada" });
};

notesCtrl.deleteNote = async (req, res) => {
  await Note.findOneAndDelete({ _id: req.params.id });
  res.json({ message: "Nota eliminada" });
};

module.exports = notesCtrl;
