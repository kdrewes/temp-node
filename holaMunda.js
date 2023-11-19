//console.log('hola munda')

/*
const kyle = 'Kyle Drewes'

const nameFunction = function(kyle) {
    console.log(`Hello ${kyle}, welcome to nodeJS`)
} 

nameFunction(kyle)
*/

const greeting = function(name) {
    console.log(`Hello ${name}, welcome to NodeJS`);
};

const person = function(name, age) {
    console.log(name, age);
};

const Hola_Munda = (phrase) => {
    console.log(phrase)
}

const returnFunction = (name,age) => {
    return name + age
}

// Variables for name and age
const name = 'Kyle Drewes';
const age = 33;

// Function calls
//greeting(name);
//person(name, age);

module.exports = {
    greeting,
    person,
    Hola_Munda,
    returnFunction,
    name,
    age,
}