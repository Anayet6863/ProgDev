// var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,7];
// let sum = 0,c=0;
// for (let i = 0; i < a.length; i++) {
//     if (a[i] % 2 != 0) {
//         sum = a[i] + sum;

//         c++;
//     }
// }
// console.log(sum/c);

// for (var i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 100);
// }

// const mx=Math.max(1,5,50,600,200,-200);
// const mn = Math.min(1,5,50,600,200,-200);
// console.log(mx+" "+mn);
// console.log(typeof(null));

function calcMoney(number){
    if(number<0)
    {
        return "Please Give a positive numbr.";
    }else
    {
        var totalsell= number*120;
        var cost = 500+8*50;
        const rem=totalsell-cost;
        return rem;

    }
}

const remMoney=calcMoney(-10);
console.log(remMoney);
