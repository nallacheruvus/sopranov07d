function ffa() {
    console.log("Iam an external function");
}

function ffb() {
    console.log("Jack and jill!");
}
/**
 * Exporting multiple functions from a single file
 */
module.exports.modg = function () {
    this.funa = function () {
        console.log("First function");
    },
        this.ffa = ffa;
    this.ffb = ffb;
    this.funb = () => {
        console.log("Second function");
    },
        this.Books = function (name, author) {
            this.name = name;
            this.author = author;
        },
        this.Library = class {
            constructor(name, loc) {
                this.name = name;
                this.loc = loc;
            }
        },
        this.calcHypo = (a, b) => Math.hypot(a, b);
    this.dline = () => console.log("*".repeat(50));
}