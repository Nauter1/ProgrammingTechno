// Baasklass komponent deklareerib ära ühised operatsioonid nii lihtsale kui
// Keerulisele objektile, kompositsioonis

abstract class Komponent{
    protected parent!: Komponent | null;

    // Valikuliselt saab komponent deklareerida ka liidese ülemelemendi leidmiseks
    // Mingisuguses puustruktuuris. See saab anda ka mingisuguse väikeimplementatsiooni 
    // Neile meetoditele
    public setParent(ülemelement: Komponent | null){
        this.parent = ülemelement;
    }

    public getParent(): Komponent | null{
        return this.parent
    }

    // Mõningatel juhtudel on kasulik kui defineeritakse ära ka alamobjektidega seotud haldusoperatsioonid kohe siinsamas alusklassis komponent. niimoodi ei pea paljastama mingeid konkreetseid komponentklasse kliendikoodile, isegi kui seda puud
    // parasjagu kokku pannakse. Selle halb külg on see, et need meetodid jäävad vähimatel elementidel (alamelemente enam ei ole) tühjaks.
    public add(komponent: Komponent): void{

    }
    public remove(komponent: Komponent): void{
        
    }
    // saab anda ka meetodi mis laseb klientkoodil aru saada kas sellel komponendil saab olla alamelemente
    public KasOnKomposiitObjekt(): boolean{
        return false;
    }

    public abstract tegevus(): string;


}

class Leht extends Komponent{
    public tegevus(): string{
        return "olen leheke c:";
    }
}

class Komposiit extends Komponent{
    protected alamelemendid: Komponent[] = []
    public add(komponent: Komponent): void {
        this.alamelemendid.push(komponent);
        komponent.setParent(this)
    }
    public remove(komponent: Komponent): void{
        const komponendiIndex = this.alamelemendid.indexOf(komponent);
        this.alamelemendid.splice(komponendiIndex, 1)
        komponent.setParent(null)
    }
    public onKomposiit(): boolean{
        return true;
    }
    public tegevus(): string{
        const results = [];
        for (const alamelement of this.alamelemendid){
           // results.push(alamelement.tegevus()) EI TEA MIKS EI TÖÖTA AAAAAAA
        }
        return `Branch (${results.join('+')})`
    }
}

function kliendiKood7(komponent: Komponent){
    console.log(`Result ${komponent.tegevus()}`)
}
const lihtne = new Leht();
console.log("On olemas lihtne komponent")
kliendiKood7(lihtne);

const puu = new Komposiit();
const oks1 = new Komposiit();
oks1.add(new Leht())
oks1.add(new Leht())
const oks2 = new Komposiit();
oks2.add(new Leht())
puu.add(oks1)
puu.add(oks2)
console.log("Nüüd on olemas ka keeruline objekt")
kliendiKood7(puu)
console.log("")

function kliendiKood8(komponent1: Komponent, komponent2: Komponent){
    if (komponent1.KasOnKomposiitObjekt()){
        komponent1.add(komponent2)
    }
}

console.log(`ei ole vaja kontrollida komponentide klasse isegi kui on tegemist puu haldamisega`)
kliendiKood8(puu, lihtne)