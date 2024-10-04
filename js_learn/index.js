let m=prompt("Enter First value: ")
let n=prompt("Enter Second-value: ")
if(m>n){
    console.log(0);
}
let sum=0;
for(let i=m;i<=n;i++){
    sum+=i*i*i;
}
console.log(sum)