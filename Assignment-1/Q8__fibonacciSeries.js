/** Write a javascript function to print the Fibonacci series of n times. */
let n = 10, n1 = 0, n2 = 1, next;

for(let i=1;i<=n;i++) {
    document.write(n1+" ");
    next = n1 + n2;
    n1 = n2;
    n2 = next;
}