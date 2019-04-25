/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

minimum();

function minimum(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }

}
console.log(minimum(5, 67));
