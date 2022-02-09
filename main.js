// Load the full build.
var _ = require('lodash');



// const pokeLog = (param) => {
//     let pokeDex = param.results;
//     console.log(pokeDex);
//     return pokeDex;
// }

// const fetchPokemon = () => {
//     fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
//         .then(response => response.json())
//         .then(json => pokeLog(json))
//         .catch(error => console.log(error))
// }

// const products = [
//     { name: 'Laptop', price: 32000, brand: 'Lenovo', color: 'Silver' },
//     { name: 'Phone', price: 700, brand: 'Iphone', color: 'Golden' },
//     { name: 'Watch', price: 3000, brand: 'Casio', color: 'Yellow' },
//     { name: 'Aunglass', price: 300, brand: 'Ribon', color: 'Blue' },
//     { name: 'Camera', price: 9000, brand: 'Lenovo', color: 'Gray' },
// ];


const numbers = [8, 16, 24, 32, 40, 48, 56, 64, 72];

let myChunk = _.chunk(numbers, 3); // splits array into chunks of 3
console.log(myChunk);

const myReverse = _.reverse(myChunk);   // reverses order of numbers in array
console.log(myReverse);

const myWithout = _.without(numbers, 8, 24, 40, 48, 56, 72);   // removes specified numbers from array
console.log(myWithout);

const myShuffle = _.shuffle(numbers);  // shuffles number into random order
console.log(myShuffle);

const myNumString = _.join(myWithout, " ");
console.log(myNumString);



// tests
const assert = require('assert');
const { iteratee } = require('lodash');

if (typeof describe === 'function') {
    describe('function', () => {
        it('should check for array divided into smaller arrays of 3', () => {
            assert.equal(myChunk.length, 3);
        });
        it('should check that order of numbers is reversed', () => {
            assert.equal(myReverse, compactedNumbers.reverse());
        });
        it('should check that certain numbers have been removed from the array', () => {
            assert.equal(myWithout, [16, 32, 64]);
        });
        it('should check that order of numbers has been shuffled', () => {
            assert.notEqual(compactedNumbers, myShuffle);
        });
        it('should check that numbers in array have been merged to a string', () => {
            assert.notEqual(myNumString, "16 32 64");
        });
    });
}