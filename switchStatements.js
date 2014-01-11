// this is me practicing the switch statement after some frustrations with if statements.
var question = prompt('who are you? '); 

switch(question){
case 'friend':
    console.log('welcome'); 
    break; 
case 'enemy': 
    console.log('your not welcome here'); 
    break; 
case 'unknown': 
    console.log('unkown person'); 
    break; 
    
    default:
    console.log('I am still waiting for an answer...'); 
    }
