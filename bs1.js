//realization with constructors function
var Animal = function(age,name,sound,region){
  this.age = age;
  this.name = name;
  this.sound = sound;
  this.region = region;
  this.say = function(){
    return "I'm " + this.name + " and i say " + this.sound
  };
};
//goAway functions
var Dog = new Animal(1,"Bob","gau","nerby");
var Cat = new Animal(1,"James","meow","far");
var Woodpecker = new Animal(1,"Sunny","?","far away");
Dog.goAway = function(sentence){
  return Dog.name + ", " + sentence;
}
Cat.goAway = function(sentence){
  return Cat.name + ", " + sentence;
}
Woodpecker.goAway = function(sentence){
  return Woodpecker.name + ", " + sentence;
}
//getType with this and with obj
var getType = function(obj) {
  return ({}).toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase(); //Ready solution for getType that i find
};
//own solution
var getTypeOwn = function(){
  if (typeof this.name === "string" && typeof this.say === "function" && typeof this.sound === "string"){
    return "Animal";
  }
  else{
    return "Not Animal";
  };
};
//call objects method
console.log(Dog.say());
console.log(Cat.say());
console.log(Woodpecker.say());

console.log(getTypeOwn.call(Dog));
console.log(getTypeOwn.call(Cat));
console.log(getTypeOwn.call(Woodpecker));

console.log(Dog.goAway("what are you doing?"));
console.log(Cat.goAway("what are you doing?"));
console.log(Woodpecker.goAway("what are you doing?"))


//realization with Object.create()
console.log("Another method \n");
var Animalcreate = {
  constructor:function(age,name,sound,region){
    this.age = age;
    this.name = name;
    this.sound = sound;
    this.region = region;
    this.say = function(){
      return "I'm " + this.name + " and i say " + this.sound
    };
    return this;
    }
}
//create Dog,Cat,woodpecker
var dogObject = Object.create(Animalcreate).constructor(2,"Boby","gauh","nerby");
var catObject = Object.create(Animalcreate).constructor(1,"Carl","meow","nerby");
var woodpeckerObject = Object.create(Animalcreate).constructor(1,"Susy","?","far away");
//define goAway and getType
dogObject.goAway=function(){
    return "Oh, no !"
}
catObject.goAway=function(){
    return "What?"
}
woodpeckerObject.goAway=function(){
    return "OH NO!"
}
var getTypeOwn = function(){
  if (typeof this.name === "string" && typeof this.say === "function" && typeof this.sound === "string"){
    return "Animal";
  }
  else{
    return "Not Animal";
  };
};
//call methods of objects
console.log(dogObject.say())
console.log(catObject.say())
console.log(woodpeckerObject.say())

console.log(dogObject.goAway())
console.log(catObject.goAway())
console.log(woodpeckerObject.goAway())

console.log(getTypeOwn.call(dogObject));
console.log(getTypeOwn.call(catObject));
console.log(getTypeOwn.call(woodpeckerObject));
