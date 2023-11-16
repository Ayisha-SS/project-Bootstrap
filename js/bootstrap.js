// function reverseStr(s){
//     // let s = 'hello';
//     let splitStr = s.split('');
//     let reverseStr = splitStr.reverse();
//     let joinStr = reverseStr.join('');
//     console.log(joinStr);
// }
// reverseStr('hello');
// reverseStr(1234);

// function reverseStr(s){
//     try{
//         let splitStr = s.split('');
//         let reverseStr = splitStr.reverse();
//         let joinStr = reverseStr.join('');
//         console.log(joinStr);   
//     }
//     catch(error){
//         console.log('s.split is not defined');
//     }
//     finally{
//         console.log('code is executed succesfully');
//     }
// }
// reverseStr('hello');
// reverseStr(1234);

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
//   readline.question(`What's your name?`, name => {
//     console.log(`Hi ${name}!`);
//     readline.close();
//   });

// let string = 'hello';
// try{
//     let newStr = string.split('').reverse().join('');
//     // throw new Error("error")
//     console.log(newStr);
// }
// catch(error){
//     console.log("s.split not defined");
// }

// let greet = (x) => console.log(x);
// greet('hello');

// let map1 = new Map();
// map1.set(1,{name:'jack',age:24});

// map1.set('name','john');
// map1.set('age','24');

// map1.set(job='intern',salary=25000);
// console.log(map1.get(1));
// console.log(map1.has(1));
// console.log(map1.delete(1)); 
// console.log(map1.clear(1));
// console.log(map1.size);

// for(let [key,value] of map1){
//     console.log(key + - + value);
// }

// let newmap = new Map();
// newmap.set('name','jack');
// newmap.set('age','23');

// newmap.forEach(function(key,value){
//     console.log(key + '- ' + value);
// });
// for(let [key,value] of newmap){
//     console.log(key + '-' + value);
// }

// for(let value of newmap.values()){
//     console.log(value);
// }

// const person = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
//   const person2 = {
//     firstName:"Mary",
//     lastName: "Din"
//   }
  
//   // This will return "John Doe":
//   let x = person.fullName.call(person1);
//   let y = person.fullName.call(person2);
//   console.log(x);
//   console.log(y);

// const person = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function () {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
//   const member = {
//     firstName:"Hege",
//     lastName: "Nilsen",
//   }
  
//   let fullName = person.fullName.bind(member);
//   console.log(fullName);

// function outer(){
//   let str = 'hello';

//   function inner(){
//     console.log(str);
//   }
//   return inner;
// }
// const x = outer();
// console.log(x);
// console.log(x());


// const add = (function () {
//   let counter = 0;
//   return function () {counter += 1; return counter}
// })();

// add();
// add();
// add();

// const fruits = new Map();
// fruits.set('apple',500);
// fruits.set('mango',400);
// fruits.set('kiwi',600);
// fruits.delete('kiwi');
// let x = fruits.has('kiwi')
// console.log(x);

// $('h1').hover(function(){
//     alert('hello');
    
// })

// $('#show').click(function(){
//     $('h1').show();
// });
// $('#hide').click(function(){
//     $('h1').hide();
// });
// $('#toggle').click(function(){
//     $('h1').toggle();
// })

// $('button').click(function(){
//     $('h1').hide(1000).css('color','red').slideDown(1000);
 
// });

// let text = $('h1').text();
// console.log(text);

// let html = $('h1').html();
// console.log(html);

// $(document).ready(function(){
//     console.log('Ready');
// });
// $(window).on('load',function(){
//     console.log('Load');
// });

// $(document).ready(function(){
//     $('.head').before('Welcome')
// })

// $(document).ready(function(){
//     $('#paragraph').remove();
// })

// let box = $('.box');
// $('button').click(function(){
//         box.animate({left:'250px'},3000);
//         box.animate({height:'350px'},3000);
//         box.animate({width:'350px'},3000);
// });
// $('#stop').click(function(){
//     box.stopAll();
// });

// $(document).ready(function(){
//     $('#submit').click(function(){
//         $('*').hide('5000'); 
//     });
// });

