//Make IE play nice with HTML5 elements
document.createElement('header');
document.createElement('section');
document.createElement('article');
document.createElement('footer');

var notepad = {
	notes:[]
};

var currentNoteKey,
	viewEdit,
	viewList,
	noteTitleElement,
	noteContentElement;


function createNote(){
	//Create a blank new note
	var newNote = {
		'name':'New Note',
		'content':'Hello World',
		'last-modified':+new Date()
	}

	//Add the note to the array, and keep track of it's key
	var newNoteKey = 0;
	while(typeof notepad.notes[newNoteKey] !== 'undefined'){
		newNoteKey++;
	}
	currentNoteKey = newNoteKey;
	notepad.notes[newNoteKey] = newNote;

	//Redraw the list of notes, and show the edit view
	drawNotesList();
	changeView();
}

function drawNotesList(){
	//Sort the notes by most recently modified first
	notepad.notes.sort(function(a,b){
		if(a['last-modified'] < b['last-modified']){
			return 1;
		}else if(a['last-modified'] > b['last-modified']){
			return -1;
		}else{
			return 0;
		}
	});

	//Generate & Apply the HTML
	var notesList = '';
	for(key in notepad.notes){
		var thisNote = notepad.notes[key];
		notesList += '<li><a href="#" data-key="' + key + '" onclick="noteListClick(this)">' + thisNote.name + '</a></li>';
	}
	if(notesList == ''){
		notesList = '<li class="info">No notes yet</li>';
	}
	document.getElementById('notes-list').innerHTML = notesList;

}

function noteListClick(link){
	currentNoteKey = link.getAttribute('data-key');
	changeView();
}

function changeView(){
	//Used to change between note list and note edit views
	if(viewEdit.className === 'visible'){
		//Transitioning to the Notes List view
		viewEdit.className = '';
		viewList.className = 'visible';
		currentNoteKey = null;
		drawNotesList();
	}else{
		//Transitioning to the Note Edit view
		if(populateEditView()){
			viewEdit.className = 'visible';
			viewList.className = '';
		}
	}
}

function saveNote(){
	notepad.notes[currentNoteKey].content = noteContentElement.value;
	notepad.notes[currentNoteKey]['last-modified'] = +new Date();
}

function populateEditView(){
	if(typeof currentNoteKey === 'undefined' || typeof notepad.notes[currentNoteKey] === 'undefined'){
		alert("Oops, can't find that note!");
		return false;
	}

	noteTitleElement.innerHTML = notepad.notes[currentNoteKey].name;
	noteContentElement.value = notepad.notes[currentNoteKey].content;

	return true;

}

function renameNote(){
	var newName = prompt("New note name:", notepad.notes[currentNoteKey].name);
	notepad.notes[currentNoteKey].name = newName;
	notepad.notes[currentNoteKey]['last-modified'] = +new Date();
	noteTitleElement.innerHTML = newName;

}

function deleteNote(){
	if(typeof currentNoteKey !== 'undefined' && typeof notepad.notes[currentNoteKey] !== 'undefined' && confirm("Are you sure?")){
		delete notepad.notes[currentNoteKey];
		changeView();
	}
}

window.onload = function(){
	//Grab references to DOM elements
	viewEdit = document.getElementById('view-edit');
	viewList = document.getElementById('view-list');
	noteTitleElement = document.getElementById('note-title');
	noteContentElement = document.getElementById('note-content');

	//Set up events
	document.getElementById('btn-new').onclick = createNote;
	document.getElementById('btn-back').onclick = changeView;
	document.getElementById('btn-rename').onclick = renameNote;
	document.getElementById('btn-delete').onclick = deleteNote;
	document.getElementById('note-content').onkeyup = saveNote;

}
