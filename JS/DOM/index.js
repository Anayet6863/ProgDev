// const call = document.getElementById('date');
// console.log(call);
// call.onclick = function call(){
//     // console.log(new Date());
//     const print = document.getElementById('print');
// print.innerText= new Date();
// }
// document.getElementById('date').addEventListener('click',function hi(){
//     const print = document.getElementById('print');
//    print.innerHTML ="Enjoy your journey." +new Date();
// })
const load2 = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    console.log(data);
document.getElementById('show').innerText = `User Name:${data.title} \n User Id: ${data.id}` ;
}