class Car {
    constructor(brand, model) {
        this._brand = brand;
        this._model=  model;
    }

    //Getter method
    get brand() {
        return this._brand;
    }

    //Setter method 
    set brand(newBrand) {
        this._brand = newBrand;
    }

    displayCarInfo() {
        console.log('Car: ${his._brand} $ {this._model} ');

    }
}

const myCar = new Car('Toyota','Corolla');
myCar.displayCarInfo(); //Output:Car: Toyota Corolla
myCar.brand = 'Honda'; //Using setter to change the brand
myCar.displayCarInfo(); //Output: Car: Honda Corolla