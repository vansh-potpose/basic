// function double(arr){
//     let a=[]
//     for (let i = 0; i < arr.length-1; i++) {
//         if(arr[i]==arr[i+1]){
//             a.push(arr[i])
//             a.push(arr[i])
//             a.push(arr[i])
//             i++;
//         }else{
//             a.push(arr[i])
//             a.push(arr[i])
//         }
        
//     }
//     if(arr[arr.length-1]==arr[arr.length-2]){
//         a.push(arr[arr.length-1])
//     }else{
//         a.push(arr[arr.length-1])
//         a.push(arr[arr.length-1])
//     }
//     console.log(a);
    
// }

// double([1,2,3,4,4,5,5,3])
function password(pass){
    if(pass.length>=8 && /[A-Z]/.test(pass) && /[a-z]/.test(pass) && /\d/.test(pass)){
        console.log('pass',pass);
        
    }else{
        console.log('fail', pass)
    }
}
password("raju")
password("R5aju3adad")
password("Raju")