import Assert from '../dist/Assert';
import Notepad from '../dist/Notepad';
import Note from '../dist/Note';

export default class NotepadTest {
  static test_adding_new_note_to_notepad(){
    var notepad = new Notepad();
    var note = new Note();

    notepad.addNote(note);

    var expected = 1;

    var actual = notepad.getNotes().length;

    return Assert.equals(expected, actual);
  }
}
