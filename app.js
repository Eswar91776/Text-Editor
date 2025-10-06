let h1 = document.querySelector("h1");
h1.style.color = 'brown';
let h2 = document.querySelector("h2");

let inp = document.querySelector("input");

inp.addEventListener("input" , function(){
    console.log(this.value)
    h2.innerText = this.value;
    h2.style.color = 'blue'
})