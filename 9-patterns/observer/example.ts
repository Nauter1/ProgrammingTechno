// Subjekti liides näitab ära mingid meetodid kuulajate haldamiseks
interface Subjekt{
    // Lisame jälgija subjekti juurde
    attach(jälgija: Jälgija): void;
    // eemaldame jälgija subjekti juurest
    detach(jälgija: Jälgija): void;

    // teavitusmeetod
    teavita(): void;
}

// Subjekt omab mingit tähtsat olekut ja teavitab jälgijaid kui olek muutub
class KindelSubjekt implements Subjekt {
    // Lihtsuse mõttes on sisemine olek ainult üks number
    public olek: number;
    // Jälgijate nimekiri, päriselt hoitakse seda nimekirja tunduvalt detailsemalt, siin lihtsalt array
    private jälgijad: Jälgija[] = [];
    // Jälgijate haldusmeetodid
    public attach(jälgija: Jälgija): void {
        const onOlemas = this.jälgijad.includes(jälgija)
        if (onOlemas){
            return console.log("Subjekt: Jälgija on juba registreeritud")
        }
        console.log('Subjekt: uus jälgija!!')
        this.jälgijad.push(jälgija)
    }
    public detach(jälgija: Jälgija): void{
        const jälgijaindeks = this.jälgijad.indexOf(jälgija)
        if (jälgijaindeks === -1){
            return console.log("Subjekt: Jälgijat ei leitud")
        }
        this.jälgijad.splice(jälgijaindeks,1)
        console.log("Subjekt: jälgija lahkus :(")
    }
    // teavitus meetod mis kutsub esile uuenduse jälgijatele
    public teavita(): void {
        console.log("Subjekt: Teavitan jälgijaid")
        for (const jälgijad of this.jälgijad) {
            jälgijad.uuendaMind(this);
        }
    }
    // Tavaliselt, tellimisloogia on ainult osa mida üks subjekt teha päriselt oskab
    // subjektid tüüpiliselt hoiavad endas mingit kindlat tähtsat äriloogikat, see
    // päästab valla teavituste laine teavitusmeetodi abil, kui midagi tähtsat kas
    // Hakkab juhtuma või on juba juhtunud
    public mingiÄriloogika(): void{
        console.log("Subjekt: mingi värk läks baltas lahti.")
        this.olek = Math.floor(Math.random()*11);
        console.log(`Subjekt: Mu olek on nüüd: ${this.olek}`)
        this.teavita();
    }
}
// Jälgija liides ütleb ära meetodi millega teda uuendada/Teavitada
interface Jälgija{
    // Uuenduste saamismeetod
    uuendaMind(subjekt: Subjekt): void;
}
// Kindlad jälgijad reageerivad teavitustele mis tulevad subjektil kelle kuulajad nad on.
class KindelKuulajaA implements Jälgija{
    public uuendaMind(subjekt: Subjekt): void {
        if (subjekt instanceof KindelSubjekt && subjekt.olek < 3) {
            console.log("KindelJälgijaA reageeris juhtumile");
        }
    }
}