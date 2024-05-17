let academyMembers = [ 
    {  
      memID: 101,  
      name: "Bob Brown",  
      films: ["Bob I", "Bob II", "Bob III", "Bob IV"]  
    }, 
    {  
      memID: 142,  
      name: "Sallie Smith",  
      films: ["A Good Day", "A Better Day"]  
    }, 
    {  
      memID: 187,  
      name: "Fred Flanders",  
      films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"] 
    }, 
    {  
      memID: 203,  
      name: "Bobbie Boots",  
      films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"]  
    }, 
]; 

// Who is the Academy Member whose ID is 187? 

let member = academyMembers.find(member => member.memID === 187);

if (member) {
    console.log(member.name);
}

console.log(`--------------------`)

// Who has been in at least 3 films? 

let membersWithThreeOrMoreFilms = academyMembers.filter(member => member.films.length >= 3);

membersWithThreeOrMoreFilms.forEach(member => {
    console.log(member.name);
});

console.log(`--------------------`)

// Who has a name that starts with "Bob"? 

let membersWithNameBob = academyMembers.filter(member => member.name.includes("Bob"));

membersWithNameBob.forEach(member => {
    console.log(member.name);
});

console.log(`--------------------`)

// HARDER: Which Academy Members have been in a film  
// that starts with "A"  

academyMembers.forEach(member => {
    member.films.forEach(film => {
        if (film[0] === "A") {
            console.log(member.name);
            return; // Exit the inner loop
        }
    });
});

