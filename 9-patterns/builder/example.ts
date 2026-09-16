//Liides mis kirjeldab ära meetodid erinevate toodete tegemiseks

interface Ehitaja {
    KomponentA(): void;
    KomponentB(): void;
    KomponentC(): void;
}

//kindlad ehitajaklassid peavad jälgima ehitaja liidest ja andma kindlaid meetodite implementatsioone. Programmis võib olla mitmeid Ehitajate variatsioone, kõik erinevalt omakorda implementeeritud.
class KindelEhitaja1 implements Ehitaja {
    private product: Toode1;

    /**
     *
     */
    //Värskelt paikapandud ehitaja instants peaks sisaldama tühja toote objekti, seda hiljem kasutatakse edasiste sammude juures kus täpsustatakse mis seal sees hakkab olema.
    constructor() {
        this.product = new Toode1();
        this.reset();
    }

    public reset(): void {
        this.product = new Toode1();
    }

    //Kõik tootmise etapid töötavad sama toote instantsiga
    public KomponentA(): void {
        this.product.parts.push('Jupp A')
    }
    public KomponentB(): void {
        this.product.parts.push('Jupp B')
    }
    public KomponentC(): void {
        this.product.parts.push('Jupp C')
    }

    //Kindlad Ehitajad on mõeldud andma omad meetodid tulemuste kättesaamiseks, Seda sellepärast et erinevat Tüüpi Ehitajad võivad toota täielikult erinevaid tooteid mis ei pruugi jälgida samat liidest. Sellepärast ei tohigi neid meetodeid deklareerida Ehitaja alusvormis (class, vähemalt mitte staatiliselt üleskirjutatud programmeerimiskeeltes)
    //Tavaliselt, pärast päringu tegijale tulemuse tagastamist, peaks Ehitaja olema vamis järgmist toodet tootma, On tavaline, et reset meetod kutsutakse välja getToode() lõpus. Aga see ei ole kohustuslik ja saab ehitajaid sundida ootama spetsiifilist reseti väljakutset kliendi poolt (kes päringu tegi) enne eelmise tulemuse unustust (disposal).
    public getToode(): Toode1 {
        const result = this.product;
        this.reset();
        return result;
    }
}

//On loogiline kasutada samat Ehitaja mustrit uuesti, kui tegemist on keeruka tootega mis nõuab pikemat konfiguratsiooni
class Toode1 {
    public parts: string[] = [];
    public MisOsad(): void{
        console.log(`Toode sisaldab endas: ${this.parts.join(', ')}\n`);
    }
}

//Direktor vastutab ainult sammude käivitamise eest kindlas järjekorras. On kasulik kui tooteid toodetakse mingisuguse kindla konfiguratsioonijärjestuse alusel. Direktori klass on valikuline, kuna kliendil on võimalus Ehitajaid ka otse suunata/muuta/kontrollida.
class Direktor {
    private builder!: Ehitaja;

    //Direktor töötab ükskõik millise Ehitaja instantsiga mida klientkood talle edasi annab, niimoodi võib kliendikood tagasi saadud valmis toodet hiljem ka muuta.
    public setBuilder(builder: Ehitaja): void {
        this.builder = builder;
    }

    //Direktor võib koostada mitmeid toote variante, kasutades samu ehitamissamme.
    public ehitaMVPToode(): void {
        this.builder.KomponentA();
    }
    public ehitaTäielikToode(): void {
        this.builder.KomponentA();
        this.builder.KomponentB();
        this.builder.KomponentC();
    }
}

function klientKood(direktor: Direktor) {
    const ehitaja = new KindelEhitaja1();
    direktor.setBuilder(ehitaja);

    console.log("Standardtoode:")
    direktor.ehitaMVPToode();
    ehitaja.getToode().MisOsad();

    console.log("Toode pluss:")
    direktor.ehitaTäielikToode();
    ehitaja.getToode().MisOsad();

    //ilma direktorita
    console.log("Ainulaadnetoode");
    ehitaja.KomponentA()
    ehitaja.KomponentC()
    ehitaja.getToode().MisOsad()
}

const direktor = new Direktor();
klientKood(direktor)