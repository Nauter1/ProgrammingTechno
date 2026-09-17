// Abstraktsioon defineerib ära kontrollimise liidese mis on üks osa nende kahe klassi hierarhiast. See hoiab endas viiteid objektidele implementatsioonis ja delegeerib kogu töö sinna
class Telekapult{
    protected field seade: Seade

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
    KanalSuuremas(){
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
