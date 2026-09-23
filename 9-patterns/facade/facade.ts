// Fassaadi klass annab lihtsa liidese mingisugusele komplekssele loogikale kas
// ühe või mitme alasüsteemi jaoks. Fassaad delegeerib kliendi päringud õigetele
// objektidele alamsüsteemi sees
// fassaad on ka vastutav nende elutsükli eest. kõik see varjestab klienti
// alasüsteemi soovimatu komplekssuse eest.

class Fassaad{
    protected alasüsteem1: Alasüsteem1;
    protected alasüsteem2: Alasüsteem2;

    constructor(alasüsteem1?: Alasüsteem1, alasüsteem2?: Alasüsteem2){
        this.alasüsteem1 = alasüsteem1 || new Alasüsteem1();
        this.alasüsteem2 = alasüsteem2 || new Alasüsteem2();
    }

    public tegevus(): string{
        let tulemus = "Fassaad initsialiseerib alamsüsteeme:\n";
        tulemus += this.alasüsteem1.tegevus1();
        tulemus += this.alasüsteem2.tegevus1();
        tulemus = "Fassaad käsib alamsüsteemidel täita tegevusi:\n";
        tulemus += this.alasüsteem1.tegevusN();
        tulemus += this.alasüsteem2.tegevus2();
        return tulemus;
    }
}

// Alasüsteem suudab vastu võtta päringuid kas fassaadilt või kliendilt otse. igal juhul
// on alasüsteemi jaoks fassaad lihtsalt veel üks klient

class Alasüsteem1{
    public tegevus1(): string{
        return "Alasüsteem 1 valmis"
    }
    public tegevusN(): string{
        return "Alasüsteem 1 tõttab äkshionissee!!!"
    }
}

class Alasüsteem2{
    public tegevus1(): string{
        return "Alasüsteem 1 valmis"
    }
    public tegevus2(): string{
        return "Alasüsteem 2 yipe!"
    }
}

// kliendikood töötab komplekssete alasüsteemidega läbi lihtsa liidese, mille annab fassaad. kui fassaad
// haldab selle alasüsteemi elutsüklit, klient ei pruugi üldsegi selle alasüsteemi olemaolust teadlik olla.
// Selline lähenemine aitab hoida komplekssust kontrolli all.

function klientKood10(fassaad: Fassaad){
    console.log(fassaad.tegevus())
}
// Klientkoodil võib olla mõned alasüsteemi objektid olla juba loodud.
// Sellisel juhul võib vajalik olla fassaadi initsialiseerimine nende objektidega,
// selle asemel et lasta fassaadil luua uued instantsid nendest objektidest
const alasüsteem1 = new Alasüsteem1();
const alasüsteem2 = new Alasüsteem2();
const fassaad = new Fassaad(alasüsteem1,alasüsteem2);
klientKood10(fassaad)