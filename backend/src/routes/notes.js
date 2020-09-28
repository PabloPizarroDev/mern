const { Router } = require("express");
const router = Router();

const {
  getNotes,
  createNotes,
  getNote,
  updateNotes,
  deleteNote,
} = require("../controllers/notes.controller");
// ('/')cada ves que visites api/notes quiero q hagas algo
router
  .route("/")
  .get(getNotes)
  //cuando queremos guardar datos
  .post(createNotes);
router
  .route("/:id")
  .get(getNote)
  //cuando queremos actualizar un dato
  .put(updateNotes)
  //eliminar
  .delete(deleteNote);

module.exports = router;
