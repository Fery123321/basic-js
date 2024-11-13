const itemJSON = `{
    "type": "food",
    "edible": true,
    "quantity": 2
}`                

const item = JSON.parse(itemJSON);
console.log(item.type);
console.log(item.quantity)

console.log("============================")
console.log(typeof item);
console.log(item);

console.log("============================");
console.log(typeof itemJSON);
console.log(itemJSON);
