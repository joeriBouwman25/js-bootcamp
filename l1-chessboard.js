/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


var size = 8;

var tile = "";

for (var i = 0; i < size; i++) {
    for (var ii = 0; ii < size; ii++) {
        if ((i + ii) % 2 == 0) {
            tile += " ";
        } else {
            tile += "#";
        }
    }
    tile += "\n";
}

console.log(tile);
