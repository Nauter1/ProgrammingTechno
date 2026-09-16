class Maja{
    aadress: string;
    korrustearv: number;
    linn: string;
    onParkismiskoht: boolean;
    onAed: boolean;


    constructor(majaEhitaja: MajaEhitaja){
        this.aadress = majaEhitaja.aadress;
        this.korrustearv = majaEhitaja.korrustearv;
        this.linn = majaEhitaja.linn;
        this.onParkismiskoht = majaEhitaja.onParkismiskoht;
        this.onAed = majaEhitaja.onAed;

    }
}

class MajaEhitaja{
    private readonly _aadress: string;
    private _korrustearv: number = 0;
    private _linn: string;
    private _onParkimisKoht: boolean = false;
    private _onAed: boolean = false;
    
    constructor(aadress: string){
        this._aadress = aadress;
    }

    setKorruseid(korruseid: number){
        this._korrustearv = korruseid
        return this;
    }

    setLinn(linn: string){
        this._linn = linn;
        return this;
    }
    ehitaParkla(){
        this._onParkimisKoht = true;
        return this;
    }
    ehitaAed(){
        this._onAed = true;
        return this;
    }
    build(){
        return new Maja(this)
    }

    get Parkla(){
        return this._onParkimisKoht;
    }
    
    get Aed(){
        return this._onAed;
    }
    
    get Korrused(){
        return this._korrustearv;
    }
    
    get Linn(){
        return this._linn;
    }
    
    get Aadress(){
        return this._aadress;
    }
}

function klientKood2(){
    const muMaja1 = new MajaEhitaja('Sõpruse Pst 182');
    muMaja1.setKorruseid(2);
    muMaja1.setLinn('Tallinn');
    muMaja1.ehitaParkla();
    muMaja1.ehitaAed();
    console.log(muMaja1);
    const muMaja2 = new MajaEhitaja('Sõpruse Pst 182').setLinn('Tallinn').setKorruseid(2).ehitaParkla().ehitaAed();

    console.log(muMaja2);
}

klientKood2();