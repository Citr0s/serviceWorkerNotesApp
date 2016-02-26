import NotepadTest from '../dist/NotepadTest';

export default function tests(){
  var tests = [];
  tests.push(NotepadTest.test_adding_new_note_to_notepad());

  return console.log(tests);
}

export default function bootstrap(){
  // //Make IE play nice with HTML5 elements
  // document.createElement('header');
  // document.createElement('section');
  // document.createElement('article');
  // document.createElement('footer');
}
