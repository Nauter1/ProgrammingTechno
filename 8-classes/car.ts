class Car{
    kilometerage: number;
    weight: number;
    bodytype: string;
    chairs: number;
    color: string;
    space: number;
    hydraulics: string;
    breaktype: string;
    year: number;

    constructor(kilometerage: number,
        weight: number,
        bodytype: string,
        chairs: number,
        color: string,
        space: number,
        hydraulics: string,
        breaktype: string,
        year: number,
    ){
        this.kilometerage = kilometerage;
        this.weight = weight;
        this.bodytype = bodytype;
        this.chairs = chairs;
        this.color = color;
        this.space = space;
        this.hydraulics = hydraulics;
        this.breaktype = breaktype;
        this.year = year;

    }

    value_info(): void {
        console.log("kilometerage: " + this.kilometerage + " Break type: " + this.breaktype + " Year: " + this.year + " Hydraulics: " + this.hydraulics)
    }
    
    comfy_info(): void {
        console.log("Color: " + this.color + " Space: " + this.space + " Year: " + this.year + " Body: " + this.bodytype + " Seats: " + this.chairs)
    }

    kilometerage_increase(addedKm: number): void {
        this.kilometerage = this.kilometerage+=addedKm
    }

    kilometerage_reading(): void {
        console.log("This car has driven " + this.kilometerage + "km")
    }
}

let toyota = new Car(52,350,"Truck",6,"Blue",35,"Piston","DefinitelyBreaksImSure",2006)

toyota.value_info();
toyota.comfy_info();
toyota.kilometerage_reading();
toyota.kilometerage_increase(70);
toyota.kilometerage_reading();
toyota.kilometerage_increase(-890);
toyota.kilometerage_reading();