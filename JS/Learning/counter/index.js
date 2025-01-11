
let inc = document.querySelector("#inc");
let dec = document.querySelector("#dec");
let reset = document.querySelector("#reset");
let count = document.querySelector("#count");
let num = 0 ;
count.innerText = num;

inc.addEventListener("click", ()=> {
    num++;
    count.innerText = num ;

})

dec.addEventListener("click", ()=> {
        num--;
    count.innerText = num ;
})

reset.addEventListener("click", ()=> {
    num = 0;
    count.innerText = num ;
})

