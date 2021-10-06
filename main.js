const prompt = require('prompt-sync')({ sigint: true });

let tasks = [];
let Create = 1;
let Complete = 2;
let Delete = 3;
let Uncomplete = 4;
let toDo = true;


console.log('The Task Master');

while(toDo){
    if(tasks.length === 0){
        console.log('What would you like to conquer today?');
    }else if(tasks.length > 0){
        console.log('You have ',tasks.length,' tasks to do.');
        for ( let i = 0; i < tasks.length; i++){
            const completed = tasks[i].completed ? 'complete' : 'incomplete';  
            console.log(i + 1 + '.  ['+ completed + '] ' + tasks[i].todo);
        }
    }
    
    console.log();
    console.log('What tasks would you like to master today?');
    console.log('[1] Create a task');
    console.log('[2] Complete a task');
    console.log('[3] Delete a tasks');
    console.log('[4] Uncomplete a task')
    let answer = Number(prompt(''));
    
    if (answer === Create) {
        console.log('Create a task');
        console.log('What is this task called?');
        createToDo = prompt(''); 
        let newTodo = {'todo': createToDo, 'complete' : false}; 
        tasks.push(newTodo); 
    }else if(answer === Complete){
        console.log('Complete a task');
        console.log('What tasks did you complete?');
        let done = Number(prompt(''));
        tasks[done - 1].completed = true; 
    }else if(answer === Delete){
        console.log('Delete a task');
        console.log('What tasks did you master?');
        let done = Number(prompt(''));
        tasks.splice(done - 1, 1);     
    }else if(answer === Uncomplete){
        console.log('What tasks did you not complete');
        console.log('Which tasks would you like to Uncomplete?');
        let done = Number(prompt(''));
        tasks[done - 1].completed = false;
    }
}