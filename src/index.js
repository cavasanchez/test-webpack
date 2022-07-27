import { sayHi } from "./module1"

function entryPoint () {
    console.log('Entry Point')
    sayHi('madridJS')
    sayHi('Webpack')
}

entryPoint()