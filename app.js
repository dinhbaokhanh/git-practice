// Fibonacci - edited by main & Đinh Bảo Khánh
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

// Code by Phạm Minh Đức
function toi_yeu_tat_ca_cac_ban() {
  console.log("anh em co gang nheeeee");
}


toi_yeu_tat_ca_cac_ban();

console.log(fibo(10));
console.log(fibo(20));

// Code by Tuan Nguyen Van
function cr7Motivation() {
    console.log("⚽ CR7 thức dậy lúc 5h sáng để tập luyện, còn chúng ta thức dậy lúc 5h để tắt báo thức. 😆");
}

cr7Motivation();

function foo(n) {
    console.log("conflictBranch");
}

foo(40);
