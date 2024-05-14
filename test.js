let ala = [ 
    {name: "Abdi", age: 23, score: 69, hobby: ["designing clothes", "listening to music","playing basketball"]}, 
    {name: "Alfi", age: 25, score: 70, hobby:["sleeping ","playing foodball","swimming"]}, 
    {name: "Lupe", age: 27, score: 74, hobby: ["playing instruments", "reading comics", "collecting pop figures"]}
]
//print a normal array
/*console.log(ala[0].hobby[1]);
console.log(ala[1].hobby[1]);
console.log(ala[2].hobby[1]);*/

for (let i = 0; i < ala.length; i++) {
    console.log(`One of ${ala[i].name}'s hobbies is ${ala[i].hobby[1]}.`)  
}

let numItems = ala.length;
for(let i = 0; i < numItems; i++) {
 if (ala[i].age > 24) {
 console.log(`${ala[i].name} is ${ala[i].age} years old, they are older than 24.`);
 }
 else {
    console.log(`${ala[i].name} is ${ala[i].age} years old, they are 24 or younger.`);
 }
}
