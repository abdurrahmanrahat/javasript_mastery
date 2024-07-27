//------------ Loop -------- //

//---- Activity 01: for loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    console.log(`5 * ${i} = ${5 * i}`);
}

//---- Activity 02: while loop
let result = 0;

let x = 1;
while (x <= 10) {
    result = result + x;
    x++;
}
console.log(result);

let y = 10;
while (y >= 1) {
    console.log(y);
    y--;
}

//---- Activity 04: nested loops 
for (let i = 1; i < 2; i++) {
    console.log("*");
    for (let i = 1; i < 2; i++) {
        console.log("**");
        for (let i = 1; i < 2; i++) {
            console.log("***");
            for (let i = 1; i < 2; i++) {
                console.log("****");
            }
        }
    }
}

//---- Activity 04: loop control statement
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}