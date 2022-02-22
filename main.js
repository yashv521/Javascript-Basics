//constructor function

//class
class Person{
constructor(firstName,lastName,dob) {
    this.firstName= firstName;
    this.lastName=lastName;
    this.dob= new Date(dob);
}

getBirthYear() {
    return this.dob.getFullYear();
}
getFullName() {
     return `${this.firstName} ${this.lastName}`;
}

}


//instantiate object
const person1 = new Person('Yash','Verma','5-02-2001');
const person2 = new Person('Yatharth','paliwal','5-03-2001');

console.log(person2.getBirthYear());
console.log(person1);



