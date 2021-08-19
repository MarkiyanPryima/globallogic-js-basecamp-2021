import getFibonacci from "./fibonacci.mjs";

const microTasks = (array, elementIndex) => {

    getFibonacci(array, elementIndex).then((res) => {
        res.forEach((number, index) => {
            console.log(`fib ${index + 1}: ${number}`);
        })
    });
}

let array = [1, 1];
microTasks(array, 13);