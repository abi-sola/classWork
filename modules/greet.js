//Default export of a function 
export default function greet (name) {
    return 'Hello, ${name}';
}

//Importing the default export
import greet from './greet.js';

console.log(greet('Alice')); //Output:Hello,Alice!