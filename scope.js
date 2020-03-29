/* ********************** **
** Local and Global Scope **
************************* */

/* let func = function() {
  var local = true; 
};

func();

// console.log(local); // <- will throw an error because the variable 'local' is in the scope of 'func'.

let func2 = function() {
  local2 = true;
};

func2();

console.log(func2()); // <- omitting 'var' from the declaration inside the 'func2' scope results in a global scope for the variable 'local2'. As long as the function is called, the boolean value 'true' is assigned to the global variable 'local2' and is accessible in the global scope (after the function is called).
*/


/* ********************** **
** Parent and Child Scope **
************************* */

/* var g = 'global';

function blender(fruit) {
  var b = fruit;
  var y = 'yogurt';

  function bs() {
    alert(b + ' and ' + y + ' makes ' + b + ' swirl.')
  }
  
  bs();
}

blender('blueberry'); */

var inBlock = false;

for (var i = 0; i < 2; i++) {
  inBlock = true;
}

if (inBlock) {
  console.log('Is there block scope?', inBlock);
}