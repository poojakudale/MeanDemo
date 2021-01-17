/**
 * 
 */
 
 function Person(name, age) {
	let person={};
	 person.name = name;
	 person.age = age;
	 person.eat = function () {
	   document.write(this.name + "is eating.")
	 }
	 person.sleep = function () {
		 document.write(this.name+" is sleeping.")
	 } 
	 return person;
	}