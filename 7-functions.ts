function function_name(param1: number): number {

    return param1;
}

function concatenate_these_two_strings(str1: string, str2: string): string
{
    return str1+str2;
}

function say_my_name(name: string): void{
    console.log(name);
}

function greet_me(name: string, greeting?: string): string{
    if (greeting === undefined){
        greeting = "hollo"
    }
    return greeting + " " + name;
}

console.log(greet_me("heviveponsgai", "dis is yor vepon"))