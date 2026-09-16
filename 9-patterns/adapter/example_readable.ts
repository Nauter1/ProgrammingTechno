interface IPistik {
    getPistikuHarudeArv: number;
    getKasHarudOnÜmmargused: boolean;
}

interface IPistikuPesa {
    getAukudeArv: number;
    getKasAukOnÜmmargune: boolean;
    pistikusOn(pistik: IPistik): boolean;
}

class AmeerikaPistik implements IPistik {
    private pistikuHarudeArv: number =2;
    private kasHarudOnÜmmargused: boolean =false;

    public get getPistikuHarudeArv(): number {
        return this.pistikuHarudeArv;
    }
    public get getKasHarudOnÜmmargused(): boolean {
        return this.kasHarudOnÜmmargused
    }
}

class VooluAdapter implements IPistik {
    private ameerikaPistik: AmeerikaPistik;
    /**
     *
     */
    constructor(ameerikaPistik: AmeerikaPistik) {
        this.ameerikaPistik = ameerikaPistik;
    }
    public get getPistikuHarudeArv(): number {return 2}
    public get getKasHarudOnÜmmargused(): boolean {return true}
}

class EuroopaPistikuPesa implements IPistikuPesa {
    private aukudeArv: number = 2;
    private KasAugudOnÜmmargused: boolean = true;

    public get getAukudeArv(): number {
        return this.aukudeArv;
    }
    public get getKasAukOnÜmmargune(): boolean {
        return this.KasAugudOnÜmmargused;
    }

    public pistikusOn(pistik: IPistik): boolean {
        if (
            pistik.getPistikuHarudeArv === this.getAukudeArv &&
            pistik.getKasHarudOnÜmmargused === this.KasAugudOnÜmmargused
        ) {
            console.log("Pistik mahub pistikupessa täpselt")
            return true;
        } 
        console.log("ei mahu :c")
        return false;
    }
}

const ameerikaPistik = new AmeerikaPistik();
const euroopaPistikuPesa = new EuroopaPistikuPesa();

console.log("Ilma adapterita:")
euroopaPistikuPesa.pistikusOn(ameerikaPistik);

const adapterdatud = new VooluAdapter(ameerikaPistik);
console.log("Adapteriga")
euroopaPistikuPesa.pistikusOn(adapterdatud);