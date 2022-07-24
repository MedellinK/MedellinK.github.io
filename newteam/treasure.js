







var bomb = Math.floor(Math.random()*8)
var randomTreasure = Math.floor(Math.random()*8)
if(randomTreasure===bomb){
    randomTreasure=Math.floor(Math.random()*8)
}
console.log(bomb, randomTreasure)

const treasure = (location) => {
    if (bomb === location){
        alert("YOU LOOSE!")
        document.getElementById(location).innerHTML = "💣"
    }else if (randomTreasure === location){
        alert("YOU WIN!")
        document.getElementById(location).innerHTML = "💰"
    }else {
        document.getElementById(location).innerHTML = "🌈"
    }

}