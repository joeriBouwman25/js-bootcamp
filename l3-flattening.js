/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var arrays = [[1, 2, 3], [4, 5], [6]];

var newArray = function (a, b) {
    return a.concat(b);
}

console.log(arrays.reduce(newArray));
