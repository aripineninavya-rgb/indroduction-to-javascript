





function generateRandomArray(length){
let number = [];
for (let i = 0; i <= length; i++){
    
    number.push(Math.floor(Math.random()*100 + 1));

}
return number;
}
let array = generateRandomArray(15);
console.log(array);




    
