/*

Mediaatori liides deklareerib ära meetodi mida komponendid kasutavad mediaatorile
teavituste saatmiseks kui juhtub mingisugune asi. Mediaator võib reageerida
nendele juhtumitele ja anda edasi töö teisele komponendile

*/

interface Mediaator {
    teadvusta(sender: object, event: string): void;
}

// Kindlad mediaatorid implementeerivad koostöölise käitumise kordineerides erinevaid
// komponente

class KindelMediaator implements Mediaator {
    private komponent1: Komponent1;
    private komponent2: Komponent2;

    constructor(c1: Komponent1, c2: Komponent2){
        this.komponent1 = c1;
        this.komponent1.seaMediaator(this);
        this.komponent2 = c2;
        this.komponent2.seaMediaator(this);
    }

    public teadvusta(sender: object, event: string): void {
        if (event === 'A'){
            console.log('Mediaator Reageerib juhtumile A ja teostab järgnevad tegevused:')
            this.komponent2.teeTegevusC();
        }
        if (event === 'D'){
            console.log('Mediaator Reageerib juhtumile D ja teostab järgnevad tegevused:')
            this.komponent1.teeTegevusB();
            this.komponent2.teeTegevusC();
        }
    }
}

// Baaskomponent annab põhilise funktsionaalsuse mediaatori instantsi komponendi
// objektide sees hoidmiseks
class Baaskomponent {
    protected mediaator: Mediaator;
    constructor(mediaator?: Mediaator){
        this.mediaator = mediaator!;
    }
    public seaMediaator(mediaator: Mediaator): void{
        this.mediaator = mediaator;
    }
}

class Komponent1 extends Baaskomponent{
    public teeTegevusA(): void {
        console.log('Komponent 1 teostab tegevus A')
        this.mediaator.teadvusta(this, 'A')
    }
    public teeTegevusB(): void {
        console.log('Komponent 1 teostab tegevus B')
        this.mediaator.teadvusta(this, 'B')
    }
}

class Komponent2 extends Baaskomponent{
    public teeTegevusC(): void {
        console.log('Komponent 2 teostab tegevus C')
        this.mediaator.teadvusta(this, 'C')
    }
    public teeTegevusD(): void {
        console.log('Komponent 2 teostab tegevus D')
        this.mediaator.teadvusta(this, 'D')
    }
}

// kliendikood
const k1 = new Komponent1();
const k2 = new Komponent2();
const mediaator = new KindelMediaator(k1, k2);
console.log("Klient kutsub esile tegevuse A")
k1.teeTegevusA();
console.log('')
console.log("Klient kutsub esile tegevuse B")
k1.teeTegevusB();
console.log('')
console.log("Klient kutsub esile tegevuse C")
k2.teeTegevusC();
console.log('')
console.log("Klient kutsub esile tegevuse D")
k2.teeTegevusD();
console.log('')