import { Router } from 'express';
import { celebrate } from 'celebrate';
import {
  getAllNotes,
  getNoteById,
  createNote,
  deleteNote,
  updateNote,
} from '../controllers/notesController.js';
import {
  createNoteSchema,
  getAllNotesSchema,
  noteIdSchema,
  updateNoteSchema,
} from '../validations/notesValidation.js';

const router = Router();

// GET
router.get('/notes', celebrate(getAllNotesSchema), getAllNotes);
router.get('/notes/:noteId', celebrate(noteIdSchema), getNoteById);
// POST
router.post('/notes', celebrate(createNoteSchema), createNote);
// DELETE
router.delete('/notes/:noteId', celebrate(noteIdSchema), deleteNote);
// PATCH/PUT
router.patch('/notes/:noteId', celebrate(updateNoteSchema), updateNote);

export default router;
