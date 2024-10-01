console.log("Food_MENU :")
console.log("1. Pizza - Rs.200")
console.log("2. Burger - Rs.300")
console.log("3. Chicken_Biriyani - Rs.250")
console.log("4. Apple_juice - Rs.50")
console.log("5. Idly - Rs.80")
var tot=0;
do{
    let ch=prompt("Enter ur choice: ")
    switch(ch){
        case '1':
            let qty1=prompt("enter Quantity: ");    
            tot+=qty1*200;
            break;
        case '2':
            let qty2=prompt("enter Quantity: ");
            tot+=qty2*300;
            break;
        case '3':
            let qty3=prompt("enter Quantity: ");
            tot+=qty3*250;
            break;
        case '4':
            let qty4=prompt("enter Quantity: ");
            tot+=qty4*50;
            break;
        case'5':
            let qty5=prompt("enter Quantity: ");
            tot+=qty5*80;
            break;
        default:
            alert("Enter Valid Choice: ")
    }
    var ch1=prompt("Do you want to continue ? press y else press n")
}while(ch1==='y')
if(tot>500){
    var dis=tot*0.1;
    tot=tot-dis;
}
console.log("Total Amount: ",tot);