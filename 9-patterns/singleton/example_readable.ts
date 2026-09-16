class Printer{
    static #instance: Printer
    private järjekord: string[] = []; 

    private constructor(){}

    static getInstance(): Printer{
        if(!Printer.#instance){
            Printer.#instance = new Printer();
        }
        return Printer.#instance;
    }

    print(document: string): void{
        this.järjekord.push(document);
        console.log(`${document} on lisatud prindijärjekorda.`)
    }

    getJärjekord(): string[]{
        return this.järjekord;
    }
}

function loetavKlientKood(){
    const printer1 = Printer.getInstance();
    const printer2 = Printer.getInstance();

    printer1.print("kodutöö.pdf");
    printer2.print("arve.xlsx");

    console.log(printer1 === printer2)
    console.log(printer1.getJärjekord());
}

loetavKlientKood();