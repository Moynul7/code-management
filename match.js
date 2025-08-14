
const products = [
    {Name: 'Nokia Phone', Price: 1500},
    {Name: 'Nokia', Price: 1500},
    {Name: 'Vivo Phone', Price: 1500},
    {Name: 'Samsung phone', Price: 1500},
    {Name: 'Walton Phone', Price: 1500}
]

function matchProduct(products, search) {
    let match = [];
    for(const product of products){
        if(product.Name.toLowerCase().includes(search.toLowerCase())){
            match.push(product);
        }
    }
    return match;
}

const result = matchProduct(products, 'phone');
console.log(result);
