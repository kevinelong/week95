
//PIGGY BANK
// - content
// - insert(denom)
// - remove() //all
class PiggyBank{
    constructor(){
        this.content = 0;
    }
    insert(denom){
        this.content += denom;
    }
    remove(){
        const all = this.content;
        this.content = 0;
        return all;
    }
}
//TEST DRIVEN DEVELOPMENT
let p = new PiggyBank();
p.insert(25);
p.insert(25);
p.insert(25);
console.log(p.content === 75); //true? yes!
console.log(p.remove());
console.log(p.content === 0); //true? yes!
