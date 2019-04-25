/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/




function range(start, end) {
    var array = [];
    for (var i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
}
console.log(range(1, 10));


function sum(array) {
    var sumOfArray = 0;
    for (var i = 0; i < array.length; i++) {
        sumOfArray = sumOfArray + array[i];
    }
    return sumOfArray;
}
console.log(sum(range(1, 10)));


function rangeStep(start, end, step) {
    var array = []
    if (start < end) {
        for (var i = start; i <= end; i += step) {
            array.push(i);
        }
        return array;
    } else {
        for (var ii = start; ii >= end; ii += step) {
            array.push(ii);
        }
    }
    return array;
}
console.log(rangeStep(10, 1, -1));
