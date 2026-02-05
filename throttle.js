function trail(fn, delay) {
    let timerId;
    let lastargs;
    return function (...args) {
        lastargs = args;
        if (!timerId) {
            timerId = setTimeout(() => {
                fn.apply(this, lastargs)
                timerId = null;
            }, delay)
        }
    }
}
function lead(fn, delay) {
    let timerId = null;
    return function (...args) {
        if (!timerId) {
            fn.apply(this, args)
            timerId = setTimeout(() => {
                timerId = null;
            }, delay)
        }
    }
}
 
function A(a, b) {
    console.log(a, b);
}
let x = trail(A, 100);
let y = lead(A, 100);
 
let button = document.getElementById("button").addEventListener("click", () => x(10, 20));
let button1 = document.getElementById("button1").addEventListener("click", () => y(10, 20));