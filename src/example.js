/**
 * This uses ES6 modules to export the Example class
 * which takes a value for name as a constructor argument.
 * It returns that name with the getName function.
 */
export default class Example {
    constructor(name = "Webpack") {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}