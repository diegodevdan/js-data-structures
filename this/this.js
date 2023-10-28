
//Function constructor
function User(firstName, lastName, gender, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
}


const user1 = new User('Diego', 'Herrera', 'M', 30);
const user200 = new User('John', 'Doe', 'M', 55);


console.log(user1);
console.log(user200);
console.log(user200 instanceof User)
console.log(user200 instanceof Object)
console.log(user200.emailDomain) //Not defined yet

//Prototype
User.prototype.emailDomain = '@facebook.com'
console.log(User.prototype)
console.log(user200.emailDomain)

User.prototype.getEmailAddress = function (){
    return this.firstName+this.lastName+this.emailDomain;
}
console.log(user1.getEmailAddress())
console.log(user200.getEmailAddress())

//Prototype inheritance

//This explanation
//https://www.youtube.com/watch?v=riDVvXZ_Kb4&list=PLyuRouwmQCjlqxnQMkjqn3NJWlYNZYj8s&index=4
