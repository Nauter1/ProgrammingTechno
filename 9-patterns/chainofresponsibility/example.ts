
 //Interface Deklareerib meetodi et "chain" ehitada
 //Deklareerib meetodi et requesti tegelt teha

interface Handler<Request = number, Result = string> {
    setNext(handler: Handler<Request, Result>): Handler<Request, Result>;

    handle(request: Request): Result;
}


// Tavalise chain meetod saab implementeerida base handleri classi
 
abstract class AbstractHandler implements Handler
{
    private nextHandler: Handler;

    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        // Saab selle meetodiga lihtsasti teha kes järgmine handler on kasutades midagi nagu:
        // Shelf.setNext(Wall).setNext(Floor);
        return handler;
    }

    public handle(request: number): string {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }

        return "";
    }
}

// Kõik handlerid kas tegelevad requestiga või annavad edasi.
class ShelfHandler extends AbstractHandler {
    public handle(request: number): string {
        if (request <= 30) {
            return `This shelf definitely can support the weight.`;
        }
        return super.handle(request);

    }
}

class WallHandler extends AbstractHandler {
    public handle(request: number): string {
        if (request <= 70) {
            return `The shelf failed, however the wall caught it and withstood it.`;
        }
        return super.handle(request);
    }
}

class FloorHandler extends AbstractHandler {
    public handle(request: number): string {
        if (request <= 90) {
            return `Both the wall and shelf failed, however the floor remained as the last defense.`;
        }
        return super.handle(request);
    }
}

/**
 * Kliendikood on tavaliselt tehtud moes et saab töötada iga handleriga, võibolla isegi ei tea et on chain.
 */
function clientCode(handler: Handler) {
    const weights = [30, 70, 90,110];

    for (const weight of weights) {
        console.log(`Adding ${weight}kg weight.`);

        const result = handler.handle(weight);
        if (result) {
            console.log(`  ${result}`);
        } else {
            console.log(`${weight}kg has fallen through the floor, uh oh.`);
        }
    }
}

/**
 * Teine osa kliendikoodist nüüd teeb chaini
 */
const shelf = new ShelfHandler();
const wall = new WallHandler();
const floor = new FloorHandler();

shelf.setNext(wall).setNext(floor);

/**
 * Klient võiks olla võimeline et teha chain misiganes moes tahab
 */
console.log('Chain: Floor > Wall > Shelf\n');
clientCode(shelf);

/* proovisin teha midagi huvitavat siin aga see polnud väga hea :P
const shelf2 = new ShelfHandler();
const wall2 = new WallHandler();
const floor2 = new FloorHandler();

floor2.setNext(wall2).setNext(shelf2);
clientCode(floor2);
*/