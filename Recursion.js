// Recursion can be used in JSON
let res = 1;
function show(){
    console.log("Hi", res);
    res++;
    if(res<=10)
        show();
}

show();

// Solve problem with the help of recursion
function fact(n){
    if(n==0)
        return 1;
    else
        return n * fact(n-1);
}

let num = 4;
let result = fact(num);
console.log(result);