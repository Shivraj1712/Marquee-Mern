class Reverser{
    reverse(str){
        return str.split("").reverse().join("")
    }
}

const reverser = new Reverser()
console.log(reverser.reverse("Hello World"))
console.log(reverser.reverse.__proto__  === Reverser.__proto__)

const ob = {
    "name" : "Raj",
    "age" : 20 ,
    "eligibleForVote" : true
}

console.log(ob.__proto__)