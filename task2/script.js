function Numbers (x) {
    if (arguments.length === 0) {
        return 'Error!';
    } else if (arguments.length >= 10) {
        let numArray = [];
        let counter = 0;
        for (let i = 0; i < arguments.length ; i++) {
            numArray[counter] = arguments[i];
            counter++;
        }
        return numArray;
    } else {
        let sum = 0;
        for (let i = 0; i < arguments.length; i++){
            sum = +sum + arguments[i];
        }
        return sum;
    }
}

console.log(Numbers(4))