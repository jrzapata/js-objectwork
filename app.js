// console.log("hello");
//OBJECT CREATION//
/////Constructor
function Person(name, age, job){
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function(){
    alert(this.name);
  };
}

var person1 = new Person("Jordan", 22, "Software Engineer");
var person2 = new Person("Sasha", 25, "Banker");

console.log(person1);
console.log(person2);
//Have the same constructor property therefore true
console.log(person1.constructor == Person);
console.log(person2.constructor == Person);


//Prototype Pattern
function Person(){

}

Person.prototype.name = "Jordan";
Person.prototype.age = 22;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
  alert(this.name);
};

var person1 = new Person();
person1.sayName();

var person2 = new Person();
person2.sayName();
