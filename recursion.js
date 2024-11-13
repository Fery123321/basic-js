function countdown(n) {
    if(n === 0) {
        console.log("countdown finished");
        return;
    }
    console.log(n);
    countdown(n-1);
}

function factorial(n) {
    if(n === 0 || n === 1) {
        console.log("finished");
        return 1;
    }

    console.log(n);
    return n * factorial(n-1);
}

console.log(factorial(5));

