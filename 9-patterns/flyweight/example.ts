// Flyweighti klassis sisaldab osa puu seisundist. need väljad hoiavad väärtusi
// Mis on unikaalsed iga üksiku puu jaoks. Näiteks ei leia siit puu kordinaate, aga
// Puu pinnavorm (texture) ja värv, mida jagatakse mitme puu vahel hoitakse tavaliselt siin klassis. kuna see andmemaht on tavaliselt üsna suur oleks raiskamine hoida
// iga puu juures seda pinnavormi ja värvi individuaalselt eraldi. selle asemel me saame
// kõik korduvad andmed eraldada ühte jagatud klassi, kus hoitakse neid andmeid
// ühekordselt mida kõik teised puu-objektid saavad viidata. See hoiab kokku mälumahtu.

class PuuLiik{
    nimi: string;
    värv: string;
    pinnavorm: ImageBitmap;

    constructor(nimi: string, värv: string, pinnavorm: ImageBitmap){
        this.nimi = nimi
        this.värv = värv
        this.pinnavorm = pinnavorm
    }
    public joonistaPuu(x: number, y: number, canvas: any){}
    public draw(x: number, y: number, canvas: HTMLCanvasElement): void{
        const ctx = canvas.getContext("2d");
        if (ctx === null){
            return;
        }
        ctx.fillStyle = this.color;
        ctx.fillRect(x-3,y,6,20)// tüvi
        ctx.beginPath();
        ctx.arc(x,y-10,15,0,Math.PI*2);
        ctx.fill();
        console.log(`joonistan ${this.nimi} puud`)
    }
}
// Flyweighti tehas otsustab kas taaskasutada olemasolevat flyweighti või
// teha uus objekt, näiteks kui on kaks eri liiki puud ja nende pinnavorm erineb.
class PuuVabrik{
    static puuLiigid: PuuLiik[] = [];

    public static puuTüüp(nimi: string, värv: string, pinnavorm: ImageBitmap){
        let tüüp = PuuVabrik.puuLiigid.find(p => p.nimi == nimi && p.värv == värv && p.pinnavorm == pinnavorm)

        if (tüüp == null){
            tüüp = new PuuLiik(nimi, värv, pinnavorm)
            PuuVabrik.puuLiigid.push(tüüp)
        }
        return tüüp
    }
}

// Objekt ise hoiab oma kontekstis ainult talle unikaalset puu oleku muutujaid.
// Programmis võib olla neid miljardeid

class Puu{
    x: number;
    y: number;
    tüüp: PuuLiik;
    constructor(x: number, y: number, tüüp: PuuLiik){
        this.x = x
        this.y = y
        this.tüüp = tüüp;
    }
    draw(canvas: HTMLCanvasElement): void{
        this.x = x
        this.y = y
        this.tüüp 
    }
}

class Mets{
    puudMetsas: Puu[] = []
    public istutaPuu(x: number, y: number, nimi: string, värv: string, pinnavorm: ImageBitmap): void{
        let tüüp: PuuLiik = PuuVabrik.puuTüüp(nimi, värv, pinnavorm);
    }
}