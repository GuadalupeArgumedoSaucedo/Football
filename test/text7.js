let ticketPackage  = [ 
    {ticketType: "Senior", price: 49.99, numTickets: 1, discount:5}, 
    {ticketType: "Adult", price: 79.99, numTickets: 2, discount:3}, 
    {ticketType: "Child", price: 29.99, numTickets: 3, discount:10} 
    ]; 

    function getTotalCost(currentTotal, ticket) { 
    return currentTotal + ((ticket).price - ticket.discount) * ticket.numTickets;
    } 
    
    let sum = ticketPackage.reduce(getTotalCost, 0); 
    // sum contains 299.94 
    console.log(sum)

    //shorter way to write using =>
    let sum2 = ticketPackage.reduce((currentTotal, currentValue) => {
        return currentTotal + (currentValue.price - currentValue.discount) * currentValue.numTickets;
      }, 0);
      
      console.log(sum2);