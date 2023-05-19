import { Product, taxCalculation } from './6-function-destructuring'

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'Iphone',
        price: 250
    }
];

const [total, tax] = taxCalculation({
    tax: 0.15,
    products: shoppingCart
});

console.log('Total', total);
console.log('Tax', tax);



