function car(brand, model, color){
  this.brand = brand
  this.model = model
  this.color = color
}

let car1= new car('BNW','X5','Pink');

car1.brand= 'jaguar'
console.log(car1);