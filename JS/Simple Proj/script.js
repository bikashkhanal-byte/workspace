//i = 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
//product[i]

const products = [
  { name: "Pen", price: 10, discount: 15, tax: 5 },
  { name: "Copy", price: 250, discount: 30, tax: 3 },
  { name: "Pencil", price: 5, discount: 10, tax: 2 },
  { name: "Eraser", price: 8, discount: 5, tax: 1 },
  { name: "Sharpener", price: 12, discount: 10, tax: 2 },
  { name: "Notebook", price: 150, discount: 20, tax: 4 },
  { name: "Ruler", price: 20, discount: 10, tax: 3 },
  { name: "Calculator", price: 500, discount: 25, tax: 8 },
  { name: "Bag", price: 1000, discount: 50, tax: 10 },
  { name: "Marker", price: 15, discount: 5, tax: 2 },
  { name: "Compass", price: 30, discount: 12, tax: 3 },
  { name: "Binder", price: 75, discount: 15, tax: 3 },
  { name: "Folder", price: 20, discount: 8, tax: 2 },
  { name: "Stapler", price: 60, discount: 18, tax: 5 },
  { name: "Highlighter", price: 25, discount: 10, tax: 2 },
];


const calculate_DiscountAmount = (product) => {
  return product.price - (product.discount / 100) * product.price
 }
  
 function calculate_TaxAmount(price, tax){
  return price + (price * (tax / 100));
}


products.forEach((product) => {
  const discountedPrice =  calculate_DiscountAmount(product);
  const TaxedPrice =  calculate_TaxAmount(product.price, product.tax);

  const output = 
  `Product: ${product.name}
   Price After Discount: ${discountedPrice}
   Price After Tax: ${TaxedPrice}
  `
  console.log(output);
})
/*
Array functions
  -forEach
  -map
  -filter
  -find
*/



  
  //  for(let i = 0; i < products.length; i++){
  //    const product = products[i];
  //    const discountedPrice =  calculate_DiscountAmount(product);
  //    const TaxedPrice =  calculate_TaxAmount(product.price, product.tax);
  
  //    const output = 
  //    `Product: ${product.name}
  //     Price After Discount: ${discountedPrice}
  //     Price After Tax: ${TaxedPrice}
  //    `
  //    console.log(output);
  // }
  
  //Normal Function: function (parameters) {<BLock>}
  // Arrow function: const doThis = (parameters) => {<Block>} 
