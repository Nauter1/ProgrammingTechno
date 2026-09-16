// Target määrab ära domeenispetsiifilise liidese mida kliendi kood kasutab
class Target {
    public request(): string{
        return "Target: Tavaline target sai pihta";
    }
}
// adapteeritav sisaldab mingit kasulikku funktsiooni või omadust, aga selle liides ei ole ühilduv eksisteeriva kliendi koodiga. Adapteeritav vajab adapteerimist enne kui kliendi kood saab seda kasutada
class Adapteeritav{
    public specificRequest(): string {
        return ".eetpadA eht fo roivaheb laicepS"
    }
}

class Adapter extends Target{
    private adapteeritav: Adapteeritav;


    constructor(adapteeritav: Adapteeritav){
        super();
        this.adapteeritav = adapteeritav;
    }

    public request(): string{
        const tulemus = this.adapteeritav.specificRequest().split('').reverse().join('');
        return `Adapter: (Muundatud arusaadavaks: ${tulemus} `
    }
}

function klientKood5(target: Target){
    console.log(target.request())
}
console.log("Klient: Saan töötada Target-tüüpi objektidega!")
const target = new Target();
klientKood5(target);
console.log('')
const adapteeritav = new Adapteeritav();
console.log("Adapteeritaval on imelik liides, ei saa aru!")
console.log(`Adapteeritava sõnum: ${adapteeritav.specificRequest}`)
