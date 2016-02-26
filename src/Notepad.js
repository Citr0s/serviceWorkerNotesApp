export default class Notepad {
  constructor(){
    this.notes = [];
  }
  addNote(note){
    this.notes.push(note);
  }
  getNotes() {
    return this.notes;
  }
}
