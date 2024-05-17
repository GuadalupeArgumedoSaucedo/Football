let vehicles = [ 
    { 
        color: "Silver", 
        type: "Minivan", 
        registrationState: "CA", 
        licenseNo: "ABC-101", 
        registrationExpires: new Date("3-10-2022"), 
        capacity: 7 
    }, 
    { 
        color: "Red", 
        type: "Pickup Truck",
        registrationState: "TX", 
        licenseNo: "A1D-2NC", 
        registrationExpires: new Date("8-31-2023"), 
        capacity: 3 
    }, 
    { 
        color: "White", 
        type: "Pickup Truck", 
        registrationState: "TX", 
        licenseNo: "A22-X00", 
        registrationExpires: new Date("9-31-2023"), 
        capacity: 6 
    }, 
    { 
        color: "Red", 
        type: "Car", 
        registrationState: "CA", 
        licenseNo: "ABC-222", 
        registrationExpires: new Date("12-10-2022"), 
        capacity: 5 
    }, 
    { 
        color: "Black", 
        type: "SUV", 
        registrationState: "CA", 
        licenseNo: "EEE-222", 
        registrationExpires: new Date("12-10-2021"), 
        capacity: 7 
    }, 
    { 
        color: "Red", 
        type: "SUV", 
        registrationState: "TX", 
        licenseNo: "ZZ2-101", 
        registrationExpires: new Date("12-30-2022"), 
        capacity: 5 
    }, 
    { 
        color: "White", 
        type: "Pickup Truck", 
        registrationState: "TX", 
        licenseNo: "CAC-7YT", 
        registrationExpires: new Date("1-31-2023"), 
        capacity: 5 
    }, 
    { 
        color: "White", 
        type: "Pickup Truck", 
        registrationState: "CA", 
        licenseNo: "123-ABC", 
        registrationExpires: new Date("3-31-2025"), //changed year to test #2
        capacity: 5
    }
];

// Which vehicles are RED? 

let redVehicles = vehicles.filter(vehicle => vehicle.color === "Red");

redVehicles.forEach(vehicle => {
    console.log(`${vehicle.type} : ${vehicle.licenseNo}`);
});

console.log(`--------------------`)

// Which vehicles have registrations that are expired? 

let expiredRegistration = vehicles.filter(vehicle => new Date(vehicle.registrationExpires) < new Date());

expiredRegistration.forEach(vehicle => {
    console.log(`${vehicle.type} : ${vehicle.licenseNo}`);
});

console.log(`--------------------`)

// Which vehicles that hold at least 6 people? 

let peopleInVehicles = vehicles.filter(vehicle => vehicle.capacity >= 6);

peopleInVehicles.forEach(vehicle => {
    console.log(`${vehicle.type} : ${vehicle.licenseNo}`);
});

console.log(`--------------------`)

// Which vehicles have license plates that end with "222"? 
let plateEnd222 = vehicles.filter(vehicle => vehicle.licenseNo.endsWith('222'));

plateEnd222.forEach(vehicle => {
    console.log(`${vehicle.type} : ${vehicle.licenseNo}`);
});
