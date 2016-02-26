export default class Note {
  constructor(name, content){
    this.name = this.setDefault(name, 'New Note');
    this.content = this.setDefault(content, 'Hello World');
    this.lastModified = new Date();
  }
  setName(name){
    this.name = name;
    this.lastModified = new Date();
  }
  setName(content){
    this.content = content;
    this.lastModified = new Date();
  }
  toString(){
    return 'Name: ' + this.name + ', Content: ' + this.content + ', Last Modified: ' + this.lastModified + '.';
  }
  setDefault(content, filler){
    return content == undefined ? filler : content;
  }
}
