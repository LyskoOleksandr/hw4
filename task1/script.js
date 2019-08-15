



function evenNonEven (from, to) {
    if (isNaN(from) && isNaN(to) || to < from) {
        return 'Error!';
    } else if (arguments.length === 0) {
        return 'Add arguments!';
    } else if (arguments.length === 1 || arguments.length >=3) {
        return 'Wrong arguments!';
    } else {
        let evenArray = [];
        let nonEvenArray = [];
        for (let i = from; i < to; i++) {
            if (i % 2 === 0) {
                evenArray.push(i);
            } else {
                nonEvenArray.push(i);
            }
        }
        console.log('Even nums - ' + evenArray.length);
        console.log('Not even nums - ' + nonEvenArray.length);
    }
}

evenNonEven(2,25);