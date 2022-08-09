var a;//Declarando
var b = 'b'//declaramos / asignamos
b = 'bb' //Reasignamos
var a = 'aa'// redeclaramos

//Global Scope
var fruit = 'Apple'; //global
console.log(fruit);

function bestFruit(){
    console.log(fruit);
}
bestFruit();

function countries(){
    country = 'Rep. Dom.';
    console.log(country);
}

countries();
console.log(country);