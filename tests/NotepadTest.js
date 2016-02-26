import Assert from '../dist/Assert';
import Notepad from '../dist/Notepad';
import Note from '../dist/Note';

export default class NotepadTest {
  static test_adding_new_note_to_notepad(){
    var notepad = new Notepad();
    var note = new Note();

    var expected = [
      {
        'name': 'New Note',
        'content': 'Hello World',
        'lastModified': new Date(),
      }
    ];

    notepad.addNote(note);

    var actual = notepad.getNotes();

    return Assert.equals(expected, actual);
  }
}
