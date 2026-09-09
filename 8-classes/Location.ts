/*

kirjuta klass asukoha jaoks, kus on kirjas lat, lon, aadress, postiindeks, elamu tüüp (enumina), maja värv, korruste arv, katusematerjal

*/

class HouseLocation
{
    lat: number;
    lon: number;
    address: string;
    postindex: number;
    type: string;
    color: string;
    stories: number;
    roofmat: string;

    constructor(lat: number,
        lon: number,
        address: string,
        postindex: number,
        type: string,
        color: string,
        stories: number,
        roofmat: string, ){
        this.lat = lat;
        this.lon = lon;
        this.address = address;
        this.postindex = postindex;
        this.type = type;
        this.color = color;
        this.stories = stories;
        this.roofmat = roofmat;

    }

    get_location(): void{
        console.log("Address: " + this.address + " Latitude: "+ this.lat + " Longitude: "+ this.lon + " Post Index: " + this.postindex)
    }

    navy_seal_locate(): void{
        console.log("Latitude: "+ this.lat + " Longitude: "+ this.lon)
    }

    color_display(): void{
        console.log("Color: "+ this.color)
    }

    color_change(newColor: string): void{
        this.color = newColor;
    }


}

let house = new HouseLocation(5,6,"308 Negra Arroyo Lane", 87104, "House", "Beige", 1, "Aluminum");

house.get_location();
house.navy_seal_locate();
house.color_display();
house.color_change("Pink"); // Walter Pink :O
house.color_display();

/* cant use these :(
enum Types{
    House, Apartment, Cardboard
}
enum Roofs{
    Aluminum, Brick, Asbestos, Gingerbread
}
*/