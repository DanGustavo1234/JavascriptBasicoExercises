// program to get a random item from an array

function getRandomItem(arr) {

    const array = ["Piedra","Papel","Tijera"];
    const randomIndex = Math.floor(Math.random() * array.length);

    // get random item
    const item = array[randomIndex];
    if (item===arr){
        console.log("You Win")
    }else{
        console.log("You lose")
    }
    return item;
}



const result = getRandomItem("Piedra");
console.log(result);