// Hetkel abstraktne tehase liides, ütleb et on järgnevad meetodid mis tagastavad erinevaid abstraktseid tooteid Neid nimetatkse perekonnaks ja nad sarnenvad
// Üksteisega kõrgetasemelise kontseptsiooni abil, mõlemad on mingisugused sõidukid.
// ühe perekonna tooted tavaliselt on koostöövõimelised. ühel tooteperekonnal võib
// olla mitu erinevat varianti, aga ühe variandi tooted ei ole teise variandiga
// ühilduvad

interface VehicleFactory{
    createACar(): VehicleProductA;
    createATram(): VehicleProductB;
}

// Kindlad tehased toodavad perekonnatooteid mis kuuluvad ühe variandi juurde.
// Tehas garanteerib et valminud tooted on ühilduvad. Meetodite signatuurid
// Tagastavad abstraktse toote "VehicleProductA/B" aga meetod ise paneb paika selle täpse toote

class CarFactory implements VehicleFactory{
    public createACar() : VehicleProductA
    {
        return new CarProduct();
    }
    public createATram() : VehicleProductB
    {
        return new TramProduct();
    }
}

// igal tehasel on vastavad tootevariandid, olgu nad siis meetodiga väljakutsutud
// tootetegemised, või null

class TramFactory implements VehicleFactory{
    public createACar() : VehicleProductA
    {
        return new CarProduct();
    }
    public createATram() : VehicleProductB
    {
        return new TramProduct();
    }
}

interface VehicleProductA {
    whatIsThis(): string;

}

interface VehicleProductB {
    whatIsThis(): string;

}
class CarProduct implements VehicleProductA {
    public whatIsThis(){
        return "This is a volvo";
    }
}

class CarProduct2 implements VehicleProductA {
    public whatIsThis(){
        return "This is a bmw";
    }
}

class TramProduct implements VehicleProductB {
    public whatIsThis(){
        return "This is a skoda tram!!";
    }
}

class TramProduct2 implements VehicleProductB {
    public whatIsThis(){
        return "This is a skoda tram!!";
    }
}