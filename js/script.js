const notes = ['JS is cool', 'create a constant with const', 'use the src attribute on the script tag to load a js file'];
    
console.log(notes);

notes.push('copilot is a great help!'); // Adds an item to the end of an array

console.log(notes);

notes.unshift('CSS is crazy!'); //adds an item to the beginning of an arrow

notes.pop(); //pop removes the last item of an array

console.log(notes); 

notes.shift(); //removes the first item of the array

console.log(notes);

const notes2 = notes;
 // remove an item at a certain index
 //you pass in the index of where you want to start deleting items and then the amount of items you want to move
 notes.splice(1,1);
    console.log(notes2);