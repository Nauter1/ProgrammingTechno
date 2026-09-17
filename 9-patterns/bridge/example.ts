class Abstraktsioon{
    protected implementatsioon: Implementatsioon

    constructor(implementatsioon: Implementatsioon){
        this.implementatsioon = implementatsioon
    }

    public operatsioon(): string {
        const tulemus = this.implementatsioon.operatsiooniImplementatsioon();
        return `Abstraktsioon: baastegevus käib sellise tulemusega:${tulemus}`
    }
    
}
class LaiendatudAbstraktsioon extends Abstraktsioon{
    public operatsioon(): string{
        const tulemus = this.implementatsioon.operatsiooniImplementatsioon();
        return `Laiendatud Abstraktsioon: Laiendatud operatsiooni tulemus on: ${tulemus}`
    }
}


// Implementatsioon defineerib ära liidese kõikide implementatsiooni klasside jaoks. see ei pea olema sama nagu abstraktsiooni liides, need kaks liidest võivad olla täielikult erinevad. tüüpiliselt annab implementatsiooni liides ainult primitiivsed operatsioonid, samas kui abstraktsioon defineerib ära kõrgematasemelised operatsioonid põhinedes nendele primitiividele.

interface Implementatsioon{
    operatsiooniImplementatsioon(): string;
}

class KonkreetneImplementatsioonA implements Implementatsioon{
    public operatsiooniImplementatsioon(): string {
        return 'Platform A KonkreetneImplementatsioonA tulemus :'
    }
}

class KonkreetneImplementatsioonB implements Implementatsioon{
    public operatsiooniImplementatsioon(): string {
        return 'Platform B KonkreetneImplementatsioonB tulemus :'
    }
}

function KliendiKood6(abstraktsioon: Abstraktsioon){
    console.log(abstraktsioon.operatsioon())
}

let implementatsioon = new KonkreetneImplementatsioonA()
let abstraktsioon = new Abstraktsioon(implementatsioon);
KliendiKood6(abstraktsioon)
console.log('')
implementatsioon = new KonkreetneImplementatsioonB();
abstraktsioon = new LaiendatudAbstraktsioon(implementatsioon)
KliendiKood6(abstraktsioon)