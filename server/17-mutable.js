/*
CREAR UN NUEVO ARRAY en myProducts, quitando el elemento del
array original products
*/

//array principal desde donde se obtendra un elemento
const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

//array donde se agregará un elemento de products
const myProducts = [];

//Estado actual de los arrays
console.log('Products: ', products);
console.log('My Products: ', myProducts);
console.log('-'.repeat(10));
/*
Products:  [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' }
]
My Products:  []
----------
*/

//encontrando el indice con findIndex
const productIndex = products.findIndex(i => i.id === '🍔');

if(productIndex !== -1){
    //PUSH es un metodo mutable
    //agrega un producto a myProducts
    myProducts.push(products[productIndex]);

    //SPLICE es un método mutable
    //quita el producto de products, según el index
    products.splice(productIndex, 1);
}

//Estado de los arrays luego de la modificación
console.log('Products: ', products);
console.log('My Products: ', myProducts);
console.log('-'.repeat(10)); //separador en console
/*
Products:  [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Hot cakes', price: 121, id: '🥞' }
]
My Products:  [ { title: 'Burger', price: 121, id: '🍔' } ]
----------
*/

/*
Actualizar un producto dentro de un array de productos
*/
//Array en el cual se quiere actualizar un elemento
const prods = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
];

//array conteniendo la actualización
const update = {
    id: "🥞",
    changes: {
        price: 200,
        description: 'delicioso'
    }
}

//Primero encontramos el index con el id del elemento a actualizar
const index = prods.findIndex(i => i.id = update.id);

//haciendo el cambio en el array
prods[index] = {
    ...prods[index], //se le pasa el mismo objeto del index
    ...update.changes //actualiza agregando changes
}

//Estado final del array actualizado
console.log(prods);
/*
[
  { title: 'Pizza', price: 200, id: '🥞', description: 'delicioso' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' }
]
*/

//RETO PROBLEMA 1 SIN MUTAR ARRAY ORIGINAL
//productos en la tienda
const productos = [
    { title: "Pizza", price: 34, id: "🍕" },
    { title: "Burger", price: 12, id: "🍔" },
    { title: "Hot cakes", price: 20, id: "🥞" },
];

const id = '🍔';
//mis compras
const myFood = productos.filter(e => e.id === id);

//productos finales en tienda
const remainProducts = productos.filter(e => e.id !== id);

console.log(myFood);//[ { title: 'Burger', price: 12, id: '🍔' } ]
console.log(remainProducts);
/*
[
  { title: 'Pizza', price: 34, id: '🍕' },
  { title: 'Hot cakes', price: 20, id: '🥞' }
]
*/

//RETO 2: Actualizar un array sin modificar array original
const items = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
];

//array conteniendo la actualización
const change = {
    id: "🥞",
    changes: {
        price: 200,
        description: 'delicioso'
    }
}

const i = items.findIndex(e => e.id === change.id);

const itemsUpdated = [...items];

itemsUpdated[i] = {
    ...itemsUpdated[i],
    ...change.changes
}

console.log(itemsUpdated);
/*
[
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    {
        title: 'Hot cakes',
        price: 200,
        id: '🥞',
        description: 'delicioso'
    }
]
*/