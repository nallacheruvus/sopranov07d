/**
 * exporting a constructor function
 * @param {name} name 
 * @param {email} email 
 */
function Person(name, email) {
    this.name = name;
    this.email = email;
}
module.exports.Person = Person;