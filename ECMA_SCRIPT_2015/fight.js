'use strict';

class Fighter {
  constructor(name = "Untitled",power = 5,health = 100){
    this.name = name;
    this.power = power;
    this.health = health;
  }
  setDamage(damage = 0){
  	this.health = this.health - damage;
  	console.log(`Health  ${this.name} now is ${this.health}`);
    //I think it is better way to log fight.
  }
  hit(enemy,point){
    let curDamage = point*this.power;
    enemy.setDamage(curDamage);
  }
}

class ImprovedFighter extends Fighter{
  doubleHit(enemy,point){
    super.hit(enemy,point*2);
  }
}

//instances 
var Jimmy = new Fighter('Jimmy',10,20);
var Jack = new ImprovedFighter('Jack',5,30);

function fight(fighter,improvedFighter,...points){
  for (let i = 0; i < points.length;++i){
    if ((i+1)%2 == 0){
      improvedFighter.hit(fighter,points[i]);
      //improvedFighter.doubleHit(fighter,points[i]); //for doubleHit
    } 
    else{
      fighter.hit(improvedFighter,points[i]);
    }
    if (fighter.health <= 0 || improvedFighter.health <= 0){
    let whoWin = () => {
      if (fighter.health>improvedFighter.health){
      	return fighter.name;
      }
      else if (fighter.health<improvedFighter.health){
      	return improvedFighter.name;
      }
      else{
        return 'Draw';
      }
    };  
      console.log(`${fighter.name}:${fighter.health},${improvedFighter.name}:${improvedFighter.health}`);;

    var winner = whoWin();
    if (winner == 'Draw'){
      console.log('Draw');
      return 0;
    } 
    else{
      console.log(`Fight is finished, our winner ${winner}`);
      return 0;
    }
    }
  }
}
fight(Jimmy,Jack,3,2,1);