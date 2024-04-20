// let age = 30

// if(age < 18){
//     console.log("you are too young");
// }else if(age <= 18){
//     console.log("welcome to adult world")
// }else if(age > 18 && age < 30){
//     console.log("tui bedaaa")
// }else{
//     console.log("you are dude")
// }

// const cars = ["BMW", "MERCIDES", "SUPRA", "TOYOTA", "AUDI"]
// for(let i = 0; i < cars.length; i++){
//     console.log(i)
// }


// function broo(a,b){
//     console.log(a + b)
// }
// broo(20,30);
// console.log("broo uthse")


// console.log(age);

// let a = 2
// let b = 3
// let c = a + b
// console.log(c)


// let input = document.querySelector(".age")
// let btn = document.querySelector(".btn")
// let rslt = document.querySelector(".result")
// let greatting = document.querySelector(".fff")
// let imgg = document.querySelector(".img")


// btn.addEventListener("click", function(){
//     if(input.value >= 18){
//         rslt.innerHTML = "you can vote"
//         greatting.innerHTML = "Your Vote Was Count"
//         imgg.src = "images/pic.bulbon.gif"
//         if(input.value > 90){
//             rslt.innerHTML = "ar koto vote diba?"
//         }else{
//             rslt.innerHTML = "you can vote"
//             greatting.innerHTML = "Your Vote Was Count"
//             imgg.src = "images/pic.bulbon.gif"
//         }
//     }else{
//         rslt.innerHTML = "you are under aged"
//         imgg.src = "images/ggg.jpg"
//         greatting.innerHTML = "vag picchi"
//     }
// })

let textin = document.querySelector(".text_input")
let upper = document.querySelector(".upper_btn")
let lower = document.querySelector(".lower_btn")
let repet = document.querySelector(".textt_repet")
let outt = document.querySelector(".output")

upper.addEventListener("click", function(){
    outt.innerHTML = textin.value.toUpperCase();
})

lower.addEventListener("click", function(){
    outt.innerHTML = textin.value.toLowerCase();
})

repet.addEventListener("click", function(){
    outt.innerHTML = textin.value.repeat(40);
})