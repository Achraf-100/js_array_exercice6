// EXERCICE 6

//1 
let monTab = ['pomme', 'fraise', 'melon', 'citron'];
console.log(monTab);

monTab.pop();
console.log(monTab);

monTab.shift();
console.log(monTab);

monTab.push('citrouille');
console.log(monTab);

monTab.unshift('framboise');
console.log(monTab);

monTab[1] = monTab[1].toUpperCase();
console.log(monTab);

monTab.reverse();
console.log(monTab);

console.log("____________________");

//2
let chiffres = [4, 5, 2, 1, 3];
console.log(chiffres);

chiffres.sort();
console.log(chiffres);

chiffres = chiffres.join('-');
console.log(chiffres);

chiffres = chiffres.split('-');
console.log(chiffres);

console.log('_______________________');

//3
let vide = [];

vide.push("ayhan",2,3,4,5,6,7,8,9,10);
console.log(vide, vide.length);


console.log(vide.indexOf("ayhan"));
console.log(vide.indexOf(2));
console.log(vide.indexOf(3));


let valentin = ['objet 1', 'objet 2', 'objet 3', 'objet 4', 'objet 5'];

valentin.splice(valentin.indexOf('objet 2'), 1);
console.log(valentin);
