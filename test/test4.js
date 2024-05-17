let kids = [
    { first : "Natalie", last : "Plyers" }, // Object
     { first: "Brittany", last: "Ray" }, // Object
     { first: "Zachary", last: "Westly" } // Object
    ];
    //Array of objects = a list of object 
    // Parameter will pass in 1 object at a time kids.forEach(passInTheFirstObjectOfTheArrayOfObjects)
    //arrayname.forEach(functioname) When you call a forEach function, it should always have a parametername that represents 1 object
    kids.forEach(displayFirstAndLastname)
  
    function displayFirstAndLastname(_akid) {
      console.log(`the kids names are ${_akid.first} ${_akid.last}`)
    }

    console.log(`--------------------`)

  function fullname(_firstname, _lastname) {
    return _firstname + " " + _lastname;
  }

 let fullnamestored = fullname("Lupe","Argumedo");
console.log(fullnamestored);
console.log(fullname("Remsey","Mailjard"))

console.log(`--------------------`)

/*
    function buildFullName(arrayElement) { 
        return arrayElement.first + " " + arrayElement.last; 
        } 
        let namesList = kids.map(buildFullName); 
        let numElements = namesList.length; 
        for (let i = 0; i < numElements; i++) { 
        console.log(namesList[i]); 
        // output matches image above 
        }
*/

//Create a function that will return only the fistname. Use map to store it in a new array for example let Firstnames. 
//function displayName to display all the firstnames
/*
function displayName(firstName){
    return firstName.first;

let firstNameList = kids.map(displayName);
firstNameList.forEach(firstNameList)

}
*/


function displayName(arrayElement) { 
    console.log(arrayElement); 
    } 

function buildFullName(arrayElement) {
    return arrayElement.first;
   }
  let namesList = kids.map(buildFullName);
  namesList.forEach(displayName);



/*
let kids = [
    { first : "Natalie", last : "Plyers" }, // Object
     { first: "Brittany", last: "Ray" }, // Object
     { first: "Zachary", last: "Westly" } // Object
    ];
    //Array of objects = a list of object 
    // Parameter will pass in 1 object at a time kids.forEach(passInTheFirstObjectOfTheArrayOfObjects)
    //arrayname.forEach(functioname) When you call a forEach function, it should always have a parametername that represents 1 object
    kids.forEach(displayFirstAndLastname)
  
  
    function buildFullName(arrayElement) {
      return arrayElement.first + " " + arrayElement.last;
     }
    let namesList = kids.map(buildFullName);
    namesList.forEach(displayName);
    */