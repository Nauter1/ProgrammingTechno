// komponendi liides defineerib ära tegevused mida dekoraatorid muuta saavad

interface AndmeAllikas{
    kirjutaAndmed(data: string): void;
    loeAndmed(): string;
}

// Kindlad komponendid annavad vaikeimplementatsioonid nende tegevuste jaoks.
// Võibolla mitmeid variatsioone nendest classidest ühes programmis
class FailiAndmeAllikas implements AndmeAllikas{
    public kirjutaAndmed(data: string): void {
        
    }
    public loeAndmed(): string{
        return "siin on andmed:"
    }
}

class ZipFail implements AndmeAllikas{
    wräptiav: AndmeAllikas

    constructor(allikas: AndmeAllikas){
        this.wräptiav = allikas
    }
    kirjutaAndmed(data: string): void{
        console.log(`Kirjutasin andmed ${data}sse`)
        console.log(`${this.wräptiav.kirjutaAndmed("abc")}`)
    }

    loeAndmed(): string {
        this.wräptiav.loeAndmed()
        return "Lugesin andmeid aga mitte midagi aru ei saanud, vist on zip pomm"
    }
}

// Kindlad dekoraatorid peavad kutsuma meetodeid wräpitud objektilt, aga võivad lisada
// midagi omalt poolt tulemusele, dekoraatorid saavad käivitada lisandkäitumist kas
// enne või pärast kutset wräpitud objektil olevale meetodile.
class KrüpteerimisDekoraator extends FailiAndmeAllikas{
    public kirjutaAndmed(data: string): void {
        console.log("Kirjutasin krüpteeritud andmed, süsteem valmis")
    }
    public loeAndmed(): string{
        return "Loetud on krüpteeritud andmed"
    }
}

function klientKood9(){
    let source = new FailiAndmeAllikas()
    source.kirjutaAndmed("mingifail.dat");
    source.loeAndmed();

    source = new KrüpteerimisDekoraator()
    source.kirjutaAndmed("Krüpteeritudandmed.bat");

    source = new ZipFail(source)
    source.kirjutaAndmed("Pakitudandmed.cab")
    source.loeAndmed();
}

klientKood9()