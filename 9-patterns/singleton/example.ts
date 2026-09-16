// Singletoni klass defineerib ära instantsihankija, see laseb klientidel juurde pääseda selle unikaalsele ainsale singletonile
class Singleton{
    static #instance: Singleton;
// singletoni enda vaikekonstruktoor peaks olema alati privaatne et vältida new operaatori kasutamist, mis muidu asendaks eksisteeriva singletoni uuega
    private constructor(){

    }
    // staatiline gettermeetod mis kontrollib juurdepääsu sellele ainsale instansile. selline implementatsioon laseb laiendada singletoni klassi, samas hoides ainult ühte instansi mälus ükskõik millisel ajahetkel
    public static get instance(): Singleton{
        if (!Singleton.#instance){
            Singleton.#instance = new Singleton()
        }
        return Singleton.#instance
    }
// singleton võib omada mingit loogikat ka
    public someMethod(){
        console.log("abababababa")
    }
}
function klientKood4(){
    const single1 = Singleton.instance;
    const single2 = Singleton.instance

    if (single1 === single2){
        console.log("Singletoni instansid on identsed, esile on kutsutud eksisteeriv singleton!")
    }
    else{
        console.log("Singletoni instansid ei ole samad!????")
    }
}

klientKood4();