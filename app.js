// Fibonacci - edited by main
function fibonacchi(n) {
    if (n <= 1) return n;
    
    let prev2 = 0;
    let prev1 = 1;
    let current = 0;
    
    for (let i = 2; i <= n; i++) {
        current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    
    return current;
}

console.log(fibo(10));
console.log(fibo(20));