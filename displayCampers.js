const codeloccol = {
 name: 'Coder',
 legs: 4,
 tails: 1,
 friends: ['Codeloccol Campers'],
};
codeloccol.name = 'Happy Coder';
codeloccol["friends"] = "'Codeloccol Campers'";
function code(codeloccol){
     console.log(codeloccol.friends);
 }
code(codeloccol);