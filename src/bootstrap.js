import NotepadTest from '../dist/NotepadTest';

export default class bootstrap {
  static tests(){
    var tests = [];
    var testsPassed = 0;
    var testsFailed = 0;

    // add tests here
    tests.push(NotepadTest.test_adding_new_note_to_notepad());

    var totalTests = tests.length;

    for(var i = 0; i < totalTests; i++){
		    if(tests[i] === true){
			    testsPassed++;
		    }else{
          testsFailed++;
        }
	  }

    console.log(testsPassed + " out of " + totalTests + " tests passed.");

  	if(testsPassed === totalTests){
  		console.log("All tests passed! ✅");
  	}else{
      console.log(testsFailed + " tests failed! ❌");
    }
  }
  static bootstrap(){
    // Make IE play nice with HTML5 elements
    document.createElement('header');
    document.createElement('section');
    document.createElement('article');
    document.createElement('footer');
  }
}
