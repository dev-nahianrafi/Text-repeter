
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