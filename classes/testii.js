class Person {
    constructor (name,age){
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        console.log( 'Name: $ {this.name}, Age: $ {this.age} ');
    }
}
//Creating an instance of the person class
const person1= new person('John Doe',30);
person1.displayInfo();//Output: Name: John Doe ,Age: 30