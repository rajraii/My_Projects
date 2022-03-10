class Person{
  constructor(name, age){
    this.name = name
    this.age  = age
  }

  showDetails(){
    return this.name
  }


}

class personChild extends Person{
  constructor(){
    super('Steve')
  }
}

let person1 = new personChild
console.log(person1.showDetails());