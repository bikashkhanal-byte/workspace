const products = [
    {
        name: "Pen",
        prize: 2000,
        available: true
    },
    {
        name: "Pencil",
        prize: 1000,
        available: true
    },
    {
        name: "Copy",
        prize: 2000,
        available: false
    }
]
// const names = products.map((products)=>{
//     return products.name
// })
// console.log(names)

const filter1 = products.filter(products.name)
console.log(filter1)