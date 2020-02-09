//Use this file to implement Part One of your project

/* let animal = {};

animal.username = 'aardvark';

console.log('animal.username:', animal.username);

animal['tagline'] = 'I\'m the Aardvark! I\'m the Aardvark!!';

console.log('animal.tagline:', animal.tagline);

let noiseArray = [
  'bark',
  'meow',
];

noiseArray.push('sniff');
noiseArray.unshift('blech');
noiseArray[4] = 'ruff';

console.log('noiseArray length', noiseArray.length);
console.log('noiseArray last index', noiseArray.indexOf('ruff'));

noiseArray[noiseArray.length - 1] = 'new noise';

animal['noises'] = noiseArray; */

/* console.log('animal by the keys');
console.log('------------------------');

for (key in animal) {
  console.log(animal[key]);
}; */

/* function countProps(obj) {
  let counter = 0;
  for (key in obj) {
    counter++;
    if (key === 'username') {
      console.log('Hi, my name is', obj.username);
    } else if (key === 'tagline') {
      console.log('I like to say', obj.tagline);
    }
  }
  return counter;
} */

// console.log(countProps(animal));

/* let animals = [];

animals.push(animal);

let quackers = {
  username: 'DaffyDuck',
  tagline: 'Yippeee!',
  noises: [
    'quack',
    'honk',
    'sneeze',
    'growl'
  ]
};

let mittens = {
  username: 'mittens',
  tagline: 'Yawn...',
  noises: [
    'meow',
    'hiss',
    'purr',
    'crash'
  ]
};

let ed = {
  username: 'ed',
  tagline: 'Ohh, Wilbur.',
  noises: [
    'neigh',
    'gallup',
    'cronch'
  ]
};

animals.unshift(quackers);
animals.push(mittens, ed);

console.log('animals', animals);

function AnimalMaker(name) {
  return {
    speak: () => {
      console.log('My name is', name);
    }
  }
} */

/* let animalNames = ['Sheep', 'Tiger', 'Bear'];

let farm = [];

cat = AnimalMaker('Cat');

cat.speak();

for (var i = 0; i < animalNames.length; i++) {
  farm.push(AnimalMaker(animalNames[i]));
  farm[i].speak();
} */

/* function AnimalTestUser(username) {
  let args = arguments.length;
  let extraArgs = [];
  
  if (args > 1) {
    for (var i = 1; i < args; i++) {
      extraArgs.push(arguments[i]);
    }
  }
  return {
    username: username,
    extraArgs: extraArgs
  };
}

let testSheep = AnimalTestUser('Cottonball', {
  'is single': true,
  'is wooly': true,
  'age': 39,
  'nickname': 'fluffinator'
});

console.log(testSheep);
console.log(testSheep.extraArgs[0]['is single']); */

function AnimalCreator(username, species, tagline, noises) {
  let animal = {
    username: username,
    species: species,
    tagline: tagline,
    noises: noises
  };

  return animal;
}

let max = AnimalCreator('max', 'giraffe', 'I\'m pretty tall', 'Girrraaaffff!');

console.log('max', max);