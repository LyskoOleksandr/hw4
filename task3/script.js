function factorial (x) {
    if (arguments.length === 0 || arguments.length >= 2) {
        return 'Error!';
    } else {
        return (x != 1) ? x * factorial (x - 1) : 1;
    }
}

console.log(factorial(7));