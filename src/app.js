import bootstrap from '../dist/bootstrap';
import Notepad from '../dist/Notepad';
import Note from '../dist/Note';

bootstrap.bootstrap();

var notepad = new Notepad();
var note = new Note();

console.log(note.toString());
