function createcard(tittle, cName, views, months, duration, thumnail) {

    let div = document.createElement('div')
    let v;
    if (views > 1000000) {
        views /= 1000000
        v = views.toString() + 'M'
    } else if (views > 1000) {
        views /= 1000
        v = views.toString() + 'K'
    }
    div.innerHTML = `<div class="video">
    <img src="${thumnail}" alt="thumnail">
    <p>${duration}</p>
</div>
<div class="text">
    <h3 class="tittle">${tittle}</h3>
    <p>${cName}.${v} views.${months} months ago</p>

</div>`
    div.setAttribute("class", "card")
    document.querySelector(".container").append(div)

}
let btn = document.getElementById("createit")
btn.addEventListener('click', (e) => {
    e.stopPropagation()
    createcard("how to code", "codewithHarry", 300000, 3, "30:09", "https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLABJhdIBqlilwXKzJqa6StynbJT4Q,",)
})
let b = document.querySelector(".contains")
b.addEventListener('click', (e) => {
    alert("hello ji")
})
// setInterval(() => {
//     createcard("how to code","codewithHarry",300000,3,"30:09","https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLABJhdIBqlilwXKzJqa6StynbJT4Q,",)

// }, 3000);
// setTimeout(() => {
//     createcard("how to code","codewithHarry",300000,3,"30:09","https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLABJhdIBqlilwXKzJqa6StynbJT4Q,",)

// }, 3000);
// document.querySelector("body").addEventListener('keydown',(e)=>{
//     console.log(e.key)
// })


// let prem1=new Promise((resolve,reject) => {
//     let a=Math.random()
//     if(a<0.5){
//         reject("no random")
//     }
//   setTimeout(() => {
//     console.log('yes I am here');
//     resolve("harry")
//   }, 3000);
// }
// )

// prem1.then((a) => {
//   console.log(a); 
// }).catch((err) => {
//   console.log(err);
// })


async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(444)
        }, 3000);
    }
    )
}

// async function main() {
//   console.log('hello');
//   let data=await getData()
//   // let data= getData()
//   console.log('data :', data)
//   console.log('hello 2');
// }
// main()
//// ex 2 iife
// (async function main(){
//     console.log('hello');
//   let data=await getData()
//   // let data= getData()
//   console.log('data :', data)
//   console.log('hello 2');
// })()


// let a= prompt("enter a number :");
// let c= prompt("enter a number :");

// if(isNaN(a) || isNaN(c)){
//   throw SyntaxError("sorry this is not allowed")
// }
// let sum = parseInt(a)+parseInt(c)
// console.log('sum', sum)

// let obj={
//     a:1,
//     b:"harry"
// }
// let animal={
//     eat:true
// }
// let rabit={
//     jumps:true
// }
// rabit.__proto__=animal; ssetting properties


// class Animal{
//     constructor(naam){
//         this.name=naam;
//         console.log(`kya re ${naam}`);

//     }
//     eats(){
//         console.log('kha rha hu');

//     }
//     jumps(){
//         console.log('kood rha hu');

//     }
// }
// let a= new Animal("bunny")
// console.log(a);
// class Lion extends Animal{
//     constructor(naam){
//         super(naam)
//         this.name=naam;
//         console.log('lion hu');

//     }
//     roar(){
//         super.eats()
//     }
//     get name(){
//         console.log('hello');

//         return this._name;
//     }
//     set name(value){
//         if(value.length<4){
//             alert("name is short")
//             return;
//         }
//         this._name=vlaue;
//     }
// }
// let l = new Lion("jonny")
// console.log(l.name);
// // <obj> insatanceof <class>

// let x,y=[1,2]
// // let [x2,y2]=[1,2]
// console.log('x,y', x,y)
// // destructuring
// let [x2,y2,...rest]=[1,2,7,8]
// console.log('x2,y2', x2,y2,rest)

// let obj={
//     a:1,
//     b:3,
//     c:3,
//     d:40
// }
// let {a,d,...c}=obj
// console.log(a,d,c);
// function sum(a,b,c){
//     return a+b+c;
// }
// let arr= [1,2,3]
// console.log(sum(...arr));
// hosting only happens in var

if (localStorage.getItem("naam")) {
    a = localStorage.getItem("naam")
    document.write(a)
} else {
    let a = prompt("enter your name :")
    localStorage.setItem("naam", a)
    document.write(a)
}
//  we can  store only the string so to store object we can use JSON.strongify(a) and then  save it . to convert string to obj use JSON.parse()