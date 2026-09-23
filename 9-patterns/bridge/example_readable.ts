// Abstraktsioon defineerib ära kontrollimise liidese mis on üks osa nende kahe klassi hierarhiast. See hoiab endas viiteid objektidele implementatsioonis ja delegeerib kogu töö sinna
class Telekapult{
    protected seade: Seade

    constructor(seade: Seade){
        this.seade = seade
    }

    lülitaSisseVälja(){
        if(this.seade.onSees()){
            this.seade.lülitaVälja()
        }else{
            this.seade.lülitaSisse()
        }
    }
    heliMaha(){
        this.seade.setHeli(this.seade.getHeli()-10)
    }
    heliÜles(){
        this.seade.setHeli(this.seade.getHeli()+10)
    }
    KanalVäiksemaks(){
        this.seade.setKanal(this.seade.getKanal()-1)
    }
    KanalSuuremaks(){
        this.seade.setKanal(this.seade.getKanal()+1)
    }
}

class nutiPult extends Telekapult{
    vaigistaHeli(){
        this.seade.setHeli(0)
    }
}

interface Seade{
    onSees(): boolean;
    lülitaSisse(): void;
    lülitaVälja(): void;
    getHeli(): number;
    setHeli(protsent: number): void;
    getKanal(): number;
    setKanal(kanaliNumber: number): void;
}

class Telekas implements Seade{
    private kasOnSees: boolean = false;
    private helitase: number = 50;
    private kanal: number = 1;

    onSees(): boolean{
        return this.kasOnSees;
    }
    lülitaSisse(): void {
        this.kasOnSees = true;
        console.log("Telekas sees");
    }
    lülitaVälja(): void {
        this.kasOnSees = false;
        console.log("Telekas väljas (väljas)");
    }
    getHeli(): number {
        return this.helitase;
    }
    setHeli(protsent: number): void {
        this.helitase = Math.max(0, Math.min(100, protsent));
        console.log(`Heli seatud ${this.helitase}`)
    }
    getKanal(): number {
        return this.kanal
    }
    setKanal(kanaliNumber: number): void {
        this.kanal = Math.max(1, kanaliNumber);
        console.log(`Kanal on number ${this.kanal}`)
    }

}

const telekas = new Telekas();

const telekapult = new Telekapult(telekas)

telekapult.lülitaSisseVälja();
telekapult.heliÜles();
telekapult.heliÜles();
telekapult.KanalSuuremaks();
telekas.getHeli();
telekas.getKanal();