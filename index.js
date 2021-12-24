let cards=[{
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHfp7jJyWnJKrh4IGc0NUNRF2xY1eRjTAHvw&usqp=CAU",
    value:1,
    status:"closed"
},{
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHfp7jJyWnJKrh4IGc0NUNRF2xY1eRjTAHvw&usqp=CAU",
    value:1,
    status:"closed"
},{
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOwxvSve1jvNKgXtY40U7wyrTGKuYGUcWCTg&usqp=CAU",
    value:2,
    status:"closed"
},{
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOwxvSve1jvNKgXtY40U7wyrTGKuYGUcWCTg&usqp=CAU",
    value:2,
    status:"closed"
},{
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDvTRMjBEwCoEoFLkKnrJsDYdhzjXCcy7soCfAL3PRz2mbXhiaZQnK3iIkAmlGMaO6z7U&usqp=CAU",
    value:3,
    status:"closed"
},{
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDvTRMjBEwCoEoFLkKnrJsDYdhzjXCcy7soCfAL3PRz2mbXhiaZQnK3iIkAmlGMaO6z7U&usqp=CAU",
    value:3,
    status:"closed"
},{
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR50pJC8W1GNXs-nfULwmcMxSrVRtnOlx6-6Q&usqp=CAU",
    value:4,
    status:"closed"
},{
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR50pJC8W1GNXs-nfULwmcMxSrVRtnOlx6-6Q&usqp=CAU",
    value:4,
    status:"closed"
},{
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGumNc8AamPGE2M-alpgm9z8QDh0dEiXngjA&usqp=CAU",
    value:5,
    status:"closed"
},{
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGumNc8AamPGE2M-alpgm9z8QDh0dEiXngjA&usqp=CAU",
    value:5,
    status:"closed"
}
]
// let cards = [1,2,3,4,5];
//durnsten shuffling algorithm
let temp;
for(let i=cards.length-1; i>=0; i--){
let j=Math.floor(Math.random()*(i+1));
temp = cards[i];
cards[i] = cards[j];
cards[j] = temp;
}
let cardscopy = cards;
function displayCards(data){
let cardsString="";
data.forEach(function(card,index){
    cardsString+=`
        <div class="card" style="background-image:url('${card.image}')">
        
            <div class="overlay ${card.status}"onclick="openCard(${index})">
            </div>
        </div>`
        ;
});
document.getElementById('cards').innerHTML=cardsString;
}
displayCards(cards);
let cardCount=1;
let score=0;
let val1=null,val2=null;
function openCard(index){
cards[index].status="opened";
console.log(index);
if(cardCount===1){
    val1=cards[index].value;
    cardCount++;
}
else if(cardCount===2){
    val2=cards[index].value;
    if(val1===val2){
        score++;
        document.getElementById("score").innerText=score;
        val1=null;
        val2=null;
        cardCount=1;
    }

    else{
        alert("game over\nBetter Luck Next Time!");
        location.reload();
    }
}
displayCards(cards);
}

