// let a=10
// let b=3.44
// let c="hello world"
// const d=undefined
// let e=null

// console.log(a,b,c,d,e)
// console.log(typeof a,typeof b,typeof c,typeof d,typeof e)

// let obj={
//     harry: "coder",
//     "salery kitni hai":"500 cr"
// }
// console.log(obj)
// obj.age=25
// console.log(obj)

// for (let i = 0; i < 10; i++) {
//     console.log(i)   
// }

// for (const key in obj) {
   
//         const element = obj[key];
//         console.log(key,element);
        
// }
// for (const iterator of "object") {
//     console.log(iterator);
// }

// function add(a,b,c=3) {
//     console.log(a+b+c);
// }
// add(1,2)
// add(1,2,4)

// const print=(a)=>{
//     console.log(a);
// }
// print("hello")
// while(true){
// let a=prompt("enter the numbers :")
// let b=prompt("enter the numbers :")
// let c=prompt("enter the operation :")

// let z=Math.random()
// let obj={
//     "+":"-",
//     "-":"/",
//     "/":"**",
//     "*":"+"
// }
// if(z<0.1){
//    alert(`result : ${eval(`${a} ${c} ${b}`)}`)
// }else{
//     c=obj[c];
//     alert(`result : ${eval(`${a} ${c} ${b}`)}`)
// }

// }

// let h="Harry f "
// console.log(h[0]);
// console.log(h.toUpperCase())
// console.log(h.toLowerCase())
// console.log(h.slice(1,3));
// console.log(h.concat(" hello" , " kya bat  hai"));
// console.log(h.trim());

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function name1(i){
//     switch (i) {
//         case 1:
//             return "Crazy"
        
//         case 2:
            
//             return "Amazing"
//         case 3:
            
//             return "Fire"
    
//         default:
//             break;
//     }
// }
// function name2(i){
//     switch (i) {
//         case 1:
//             return "Engine"
        
//         case 2:
            
//             return "Foods"
//         case 3:
            
//             return "Garments"
    
//         default:
//             break;
//     }
// }
// function name3(i){
//     switch (i) {
//         case 1:
//             return "Bros"
        
//         case 2:
            
//             return "Limited"
//         case 3:
            
//             return "Hub"
    
//         default:
//             break;
//     }
// }

// let a=name1(getRandomInt(1,3))+" "+name2(getRandomInt(1,3))+" "+name3(getRandomInt(1,3))
// console.log(a);


// let a=[1,2,3,4]
// console.log(a.length);
// // removing and adding elem form back
// console.log(a.push(5));
// console.log(a.pop());
// console.log(a);
// //  removing and adding elem from front
// console.log(a.unshift(0));
// console.log(a.shift());
// console.log(a);
// console.log(a.concat([1,2,3],[1,2,3]));
// // delete a[2]
// // console.log(a);

// // console.log(a.splice(1,2)); // remove 2 elem from index 1
// console.log(a.splice(1,2,55,55)); // remove 2 elem from index 1 and replace them

// let sq=a.map(e=>{
//     return e**2
// })
// console.log(sq);

// const greatThan3=(a)=>{
//     if(a>3){
//         return true
//     }
//     return false
// }
// const add=(a,b)=>{
//     return a*b
// }


// console.log(a.filter(greatThan3));
// console.log(a.reduce(add));


// let a= prompt("enter a number :")
// let aws=1
// for (let i = 2; i <= a; i++) {
//     aws*=i;
    
// }
// alert(`factorial is ${aws}`)


let div =document.createElement('div')
div.innerHTML=`<div class="box">1</div><div class="box">2</div><div class="box">3</div><div class="box">4</div><div class="box">5</div>`
div.setAttribute("class","contains")
// document.querySelector("form").after(div)
document.querySelector("form").insertAdjacentElement("afterend",div)
function color(dom,i){
    if(i==1){
        dom.style.backgroundColor='red'
    }else if(i==2){
        dom.style.backgroundColor='yellow'
        
    }else if(i==3){
            dom.style.backgroundColor='blue'
    
        }else if(i==4){
        dom.style.backgroundColor='green'

    }else{
            dom.style.backgroundColor='orange'
    
        }
}
for (let i = 0; i < 5; i++) {
    color(document.body.children[1].children[i],getRandomInt(1,5))
    
}

