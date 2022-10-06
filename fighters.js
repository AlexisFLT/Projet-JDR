const maxLife = 100 +"💓";



class Fighter {
    constructor(name, str, dex, emoji){
        this.name = name;
        this.str = str;
        this.dex = dex;
        this.emoji = emoji;
        this.life = maxLife;
    }
    
    fight(target){
        const dice = Math.floor(Math.random()*this.str + 1); //jet de dé d'attaque (str) - dex (def)//
        const attStr = dice - target.dex;
        const finalDmg = Math.max(0, attStr);
        const targNewHp = Math.max(0, target.life - finalDmg);
        target.life = targNewHp;  
        
        return finalDmg;
    }
}

// const heros= [

const hero= new Fighter ("Alexis Martell", 10, 7, "🧔🏻" );
    // new Fighter ("Nicolas Greyjoy", 10, 5, "👦🏻" ),
// ]
const enemy = new Fighter ("Giant Squid", 15, 3, "🦑");

let round = 0
while(enemy.life > 0 && hero.life > 0){
    enemy.fight(hero);
    heros.fight(enemy);

    console.log('');
    console.log(enemy);
    console.log(hero);
    round++;
}
if(hero.life >0){
    console.log(`Alexis gagne le combat en ${"🕝" +round}`);
}else{
    console.log(`Giant Squid gagne le combat en ${"🕝" +round}`);
};








