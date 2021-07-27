const _ = require('lodash');
let num = _.random(10, 30);

//random number generators
console.log(num);
let colors = ['red', 'yellow', 'pink','indigo'];

//join
const myColors = _.join(colors,'-');
console.log(myColors);

//iteration
_.forEach(colors, (value)=>{
console.log(value);
});
 //camelcase
console.log(_.camelCase('let me get you in foo bar '));

