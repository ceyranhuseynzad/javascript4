
function calcula(array, number) {
    for (let element of array) {
        if (element === number) {
            console.log(`${number} have in array!`);
            return true;
        }
    }
    console.log(`${number} don't have in array!`);
    return false;
}

console.log(calculate([1,2,3,4,5,6,7,8,9,10],11));
