let objMethodOne = {
    property: "Method One",
};
console.log(objMethodOne.property); // "Method One"

let objMethodTwo = new Object();

objMethodTwo.property = "Method Two";

console.log(objMethodTwo.property); // "Method Two"

function Construct() {
    this.property = "Method Three";
}
let objMethodThree = new Construct();
console.log(objMethodThree.property); // "Method Three"

function forceConstruct() {
    if(!new.target) return new forceConstruct;
    this.property = "Method Four";
}
let objMethodFour = forceConstruct();
console.log(objMethodFour.property); // "Method Four"