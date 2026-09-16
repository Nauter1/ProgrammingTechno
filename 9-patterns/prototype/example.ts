class Prototüüp{
    public primitiiv: any;
    public component: object;
    public ringViide: KomponentTagasiviitega;

    public clone(): this{
        const clone = Object.create(this);
        clone.primitiiv = this.primitiiv
        clone.component = this.component

        clone.ringViide = new KomponentTagasiviitega(clone);
        return clone;
    }
}

class KomponentTagasiviitega{
    public prototype;

    constructor(prototype: Prototüüp){
        this.prototype = prototype;
    }

}

function klientKood3(){
    const pr1 = new Prototüüp();
    pr1.primitiiv = 69;
    pr1.component = new Date();
    pr1.ringViide = new KomponentTagasiviitega(pr1);

    const pr2 = pr1.clone();

    if (pr1.primitiiv == pr2.primitiiv)
    {
        console.log("Algelised väärtused on kloonitud edukalt!!")
    }
    else {
        console.log("Primitiivsed väärtused ei ole kloonile üle kandunud :c")
    }
    if (pr1.component == pr2.component)
    {
        console.log("Komponendi väärtused on kloonitud edukalt!!")
    }
    else {
        console.log("Komponendi väärtused ei ole kloonile üle kandunud :c")
    }
    if (pr1.ringViide == pr2.ringViide)
    {
        console.log("Ka viide on kloonitud edukalt!!")
    }
    else {
        console.log("Viide ei ole kloonile üle kandunud :c")
    }

}

klientKood3();