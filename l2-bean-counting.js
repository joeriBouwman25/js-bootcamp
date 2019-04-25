/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

countBs('BEanSb');

function countBs(string) {
    var uppercase = 0;
    for (var i in string) {
        if (string[i] === string[i].toUpperCase()) {
            uppercase++;
        }
    }
    console.log(uppercase);
}


countChar('beansb', 'b');

function countChar(string, letter) {
    var uppercase = 0;
    for (var i in string) {
        if (string[i] == letter) {
            uppercase++;
        }
    }
    console.log(uppercase);
}
