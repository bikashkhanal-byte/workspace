
// Shopping Cart Simulator 

let ShoppingCart = []

function addItem( item , price) {
    ShoppingCart.push({item , price});
    alert(`${item} item has been added to Cart`);
}

function DisplayItem(){
    console.log("Items in your cart:");
    ShoppingCart.forEach((product , index ) =>{
        console.log(`${index + 1}, ${product.item} : ${product.price}`); 
    }
)
}
 function TotalPrice(){
    let total = 0
    ShoppingCart.forEach(product  => {
        total += product.price
    });
    console.log(`The total Price of the Item added to your Cart is : ${total}`)
 }

// addItem("pen", 30)
// addItem("COPY", 10)
// addItem("PENCIL", 20)
// addItem("GEOMETRY", 50)
// addItem("SCALE", 70)
// addItem("BOOKS", 300)

DisplayItem()
TotalPrice()

// count the number
let count = document.getElementById("count");
let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");
let reset= document.getElementById("reset");

var num = 0;

count.innerText = num ; 

increment.addEventListener("click", () => {
    num++;
    console.log(count);
    count.innerText = num ;

})

decrement.addEventListener("click", () => {
        num--;
        count.innerText = num ;
})

reset.addEventListener("click", () => {
    num = 0;
    count.innerText = num ;
})
