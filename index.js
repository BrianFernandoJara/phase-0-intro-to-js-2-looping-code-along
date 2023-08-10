/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    for (let i = 0; i < gifts.length; i++)
    {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}
*/

function writeCards(listOfNames, event){
    const message = [];
    for (let i = 0; i < listOfNames.length; i++){
        message.push(`Thank you, ${listOfNames[i]}, for the wonderful ${event} gift!`);
    }
    return message;
}

function countDown(positiveNumber){
    while(positiveNumber >= 0){
        console.log(positiveNumber)
        positiveNumber --;
    }
}
