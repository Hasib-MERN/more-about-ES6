class Vehicle{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log('Class declared by second parenthesis')
    }
}

class bus extends Vehicle{
    constructor(name, price,seat, ticket){
        super(name,price);
        this.seat = seat;
        this.ticket = ticket;
    }
}

class truck extends Vehicle{
    constructor(name, price, load){
        super(name, price);
        this.load = load;
    }
}