function sum(a, b) {
    return a + b;
}
function multiple(a, b) {
    return a * b;
}
function minus(a, b) {
    return a - b;
}
function compare(a, b) {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
}
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}