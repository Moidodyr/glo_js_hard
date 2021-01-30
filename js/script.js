const num = 266219,
    arrayNum = String(num).split('');

let i = 0,
    newNum = 1;

for (i in arrayNum) {
    newNum *= arrayNum[i];
}

console.log(newNum);

let power = newNum ** 3,
    variable = String(power).split('');

console.log(variable[0], variable[1]);
