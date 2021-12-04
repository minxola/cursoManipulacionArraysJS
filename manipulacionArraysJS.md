# Curso de Manipulación de Arrays

## forEach

Sirve para recorrer cada uno de los elementos de un **Array**.

```js
const letters = ['a', 'b', 'c', 'd'];
letters.forEach(element => console.log(element));
```

Esta recorrido por cada uno de los elementos también se puede lograr con un  **for loop**.

```js
for(let index = 0; index < letters.length; index++){
    const element = letters[index];
    console.log(element);
}
```



