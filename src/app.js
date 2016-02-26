import bootstrap from '../dist/bootstrap';
import tests from '../dist/bootstrap';
import Notepad from '../dist/Notepad';
import Note from '../dist/Note';

tests();
// bootstrap();

var notepad = new Notepad();

var note = new Note();
console.log(note.toString());
