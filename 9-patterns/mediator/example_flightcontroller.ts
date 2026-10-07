// Siin asub mediaatori liides, Lennukid teavitavad lennujuhtimistorni, selle asemel
// et suhelda otse üksteisega

interface Lennujuhtija{
    teavita(sender: object, event: string): void;
}

// Lennujuhtimistornis on lennujuhtijad, kes koordineerivad erinevaid lennukeid
class LennujuhtimisTorn implements Lennujuhtija{
    private reisiLennuk: ReisiLennuk;
    private kaubaLennuk: KaubaLennuk;

    constructor(reisiLennuk: ReisiLennuk, kaubaLennuk: KaubaLennuk){
        this.reisiLennuk = reisiLennuk;
        this.reisiLennuk.seaLennujuhtija(this);
        this.kaubaLennuk = kaubaLennuk;
        this.kaubaLennuk.seaLennujuhtija(this);
    }

    public teavita(sender: object, event: string): void{
        if (event === "KÜSIN_LUBA_ÕHKUTÕUSUKS"){
            console.log("Lennujuhtimistorn: Õhkutõusu luba palutud.")
            this.kaubaLennuk.hoiaAsukohta();
            this.reisiLennuk.tõuseÕhku();
        }
        if (event === "KÜSIN_LUBA_MAANDUMISEKS"){
            console.log("Lennujuhtimistorn: Maandumise luba palutud.")
            this.reisiLennuk.eemalduRajalt();
            this.kaubaLennuk.maandu();
        }
    }
}

class Lennuk {
    protected lennutorn!: LennujuhtimisTorn

    public seaLennujuhtija(lennutorn: LennujuhtimisTorn){
        this.lennutorn = lennutorn;   
    }
}

class ReisiLennuk extends Lennuk{
    public küsiÕhkutõusuLuba(): void{
        console.log("Reisilennuk küsib luba õhkutõusuks")
        this.lennutorn.teavita(this, "KÜSIN_LUBA_ÕHKUTÕUSUKS")
    }
    public tõuseÕhku(): void{
        console.log("Reisilennuk tõuseb õhku, nyommm!")
    }
    public eemalduRajalt(): void{
        console.log("Reisilennuk eemaldub õhkutõusurajalt.")
    }
    public küsiMaandumisLuba(): void{
        console.log("Reisilennuk küsib luba maandumiseks")
        this.lennutorn.teavita(this, "KÜSIN_LUBA_MAANDUMISEKS")
    }
    
}

class KaubaLennuk extends Lennuk {
    public küsiMaandumisLuba(): void{
        console.log("Kaubalennuk küsib maandumisluba")
    }
    public maandu(): void{
        console.log("Kaubalennuk maandub.")
    }
    public hoiaAsukohta(): void{
        console.log("Kaubalennuk on paigal.")
    }
}

const reisiLennuk = new ReisiLennuk();
const kaubaLennuk = new KaubaLennuk();

const lennuJuhtimisTorn = new LennujuhtimisTorn(reisiLennuk, kaubaLennuk);

console.log("Reisilennuk tahab õhku tõusta:")
reisiLennuk.küsiÕhkutõusuLuba();
console.log("")
console.log("Kaubalennuk tahab maanduda:")
kaubaLennuk.küsiMaandumisLuba();