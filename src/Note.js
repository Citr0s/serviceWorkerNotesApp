export default class Note {
  constructor(name){
    this.name = 'New Note';
    this.content = 'Hello World';
    this.lastModified = new Date();
  }
  getGreeting() {
    return 'Name: ' + this.name + ', Content: ' + this.content + ', Last Modified: ' + this.lastModified + '.';
  }
}
