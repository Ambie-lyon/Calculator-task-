const integer1 = parseFloat(prompt('Enter number'));
const operator = prompt('Select operator (+, -, /, *)');
const integer2 = parseFloat(prompt('Enter second number'));

let total;
if (integer1 && integer2 < 0) {
alert ('Input a valid number and try again');
} 
else if (operator =='+') {
total= integer1 + integer2;
} 
else if (operator =='-') {
total= integer1 - integer2;
}
else if (operator =='/') {
total= integer1 / integer2;
} 
else if (operator =='*') {
total= integer1 * integer2;
}
alert (integer1 + operator + integer2 + '=' + total);
}
