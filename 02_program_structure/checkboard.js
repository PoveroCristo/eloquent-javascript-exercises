let sizeString = 8;
let checkboard = "";
for(let i = 0; i <= sizeString; i++) {
    if ( i % 2 == 0) {
        for(let i = 0; i <= sizeString; i++) {
            if ( i % 2 == 0) {
                checkboard += " ";
            } else {
                checkboard += "#";
            }
        }
        checkboard += "\n"
    } else {
        for (let i = 0; i <= sizeString; i++) {
            if ( i % 2 == 0) {
                checkboard += "#";
            } else {
                checkboard += " ";
            }
        }
        checkboard += "\n"
    }
}
console.log(checkboard)