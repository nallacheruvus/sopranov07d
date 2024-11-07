/**
 * Exporting a class from a file
 */
class Cars {
    constructor(name, brand) {
        this.name = name;
        this.brand = brand;
    }
}
module.exports.Cars = Cars;
