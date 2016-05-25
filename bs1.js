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
console.log(Dog.say());
console.log(Cat.say());
console.log(Woodpecker.say());
var getType = function(obj) {
  return ({}).toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
};
Dog.getTypeOwn = function(){
  if (typeof this.name === "string" && typeof this.say === "function" && typeof this.sound === "string"){
    return "Animal";
  }
  else{
    return "Not Animal";
  };
};
console.log(Dog.getTypeOwn())
console.log(getType(Dog));

console.log(Dog.goAway("what are you doing?"))
console.log(Cat.goAway("what are you doing?"))
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
var dogObject = Object.create(Animalcreate).constructor(2,"Boby","gauh","nerby");
var catObject = Object.create(Animalcreate).constructor(1,"Carl","meow","nerby");
var woodpeckerObject = Object.create(Animalcreate).constructor(1,"Susy","?","far away");
dogObject.goAway=function(){
    return "Oh, no !"
}
catObject.goAway=function(){
    return "What?"
}
woodpeckerObject.goAway=function(){
    return "OH NO!"
}
console.log(dogObject.goAway())
console.log(catObject.goAway())
console.log(woodpeckerObject.goAway())


console.log(dogObject.say())
console.log(catObject.say())
console.log(woodpeckerObject.say())
