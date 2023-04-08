const fibonacci = function(num) {
    let iterations = parseInt(num, 10);
    let n1 = 0;
    let n2 = 1;
    let nextIteration;
    let i = 1;
    if (iterations > 0) {
        do {
            nextIteration = n1 + n2;
            n1 = n2;
            n2 = nextIteration;
            i++;
        } while (i < iterations);
        return nextIteration;
    } else {
        return 'OOPS';
    }
};

// Do not edit below this line
module.exports = fibonacci;

//var text = '42px';
//var integer = parseInt(text, 10);