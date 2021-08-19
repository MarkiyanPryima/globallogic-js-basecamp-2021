const getFibonacci = (array, elementIndex) => {

    return new Promise((resolve) => {

        if (elementIndex <= 1) resolve([1]);

        let next = array[array.length - 1] + array[array.length - 2];

        if (array.length >= elementIndex) resolve(array);

        else {
            array.push(next);
            resolve(getFibonacci(array, elementIndex))
        }
    });
}

export default getFibonacci;



