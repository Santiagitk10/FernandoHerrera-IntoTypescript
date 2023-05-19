export interface Product {
    description: string,
    price: number
}

interface TaxCalculationOptions {
    tax: number,
    products: Product[]
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}


const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}

//Si se devuelven dos valores es mejor dejarlo en específico en el tipo de retorno
export function taxCalculation(options: TaxCalculationOptions): [number, number]{

    const {tax, products} = options;

    let total = 0;

    products.forEach( ({price}) => {
        total += price;
    });

    return [total, total * tax]
}



const shoppingCart = [phone,tablet];
const tax = 0.15;


const result = taxCalculation({
    tax, 
    products: shoppingCart
});


const [total, taxAmount ] = result;


console.log('Total: ', total);
console.log('Tax Amount : ', taxAmount);


