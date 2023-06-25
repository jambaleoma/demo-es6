import { a } from "./constant.js";
import { add as addPlusTwo } from "./constant.js";
import { add } from "./operation.js";
import { divide } from "./operation.js";
import names, { addName, clearNames } from "./name.js";
import { p1, p2, p3 } from "./promise.js";

console.log(a); // 1

console.log(add(1, 2)); // 3

console.log(addPlusTwo(3, 2)); // 5

console.log(divide(4, 2)); // 2

// start();

function start() {
    setInterval(() => {
        addName("Enzo");
        console.log(names);
    }, 1000);

    setInterval(() => {
        console.log('clearing names');
        clearNames();
        console.log(names);
    }, 5000);
}

p1;
p2;
p3;
