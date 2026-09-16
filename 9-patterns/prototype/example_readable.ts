class AutoMobile{
    mark: string;
    mudel: string;
    värv: string;
    istekohti: number;


    constructor(mark: string, mudel: string, värv: string, istekohti: number){
        this.istekohti = istekohti
        this.mudel = mudel
        this.värv = värv
        this.mark = mark
    }

    clone(){
        const clone = Object.create(this)
        clone.mark = this.mark
        clone.värv = this.värv
        clone.mudel = this.mudel
        clone.istekohti = this.istekohti
        return clone;
    }
}

function programRun3(){
    const originaal = new AutoMobile("aaa","bbb","ccc",6);
    const kloon = originaal.clone();
    console.log(originaal)
    console.log(kloon)
}

programRun3();