// const person={
//   name:'John',
//   age:25,
//   siblings:['anna','peter'],
//   greet:function(name){
//     console.log(`Hello! My name is ${name}`);
//   },
//   job:{
//     title:'developer',
//     company:{
//       name:'Coding Addict',
//       address:'123 Main Street',
//     },
//   },
// };
// person.greet('John');
//
// // delete person.siblings;
// // console.log(person.siblings);
//
// console.log(person.job.company.name);

// Factory function

//Constructor function

// function Person(firstName,secondName){
//   this.firstName=firstName;
//   this.secondName=secondName;
//   console.log(this)
// }
//
// const Nabin=new Person('Naveen','KC');
// const Bob=new Person('Bob','Dylan');


// BUTTON EXAMPLE

// const counter={
//   count:0,
//   increment(){
//   console.log(this);
//   this.count++;
//   console.log(this.count);
// }
// }
//
// const btn=document.querySelector(".increment");

//fail
// btn.addEventListener('click',counter.increment);

//some edge cases
// btn.addEventListener('click',counter.increment.bind(counter));


// function newAccount(name,initialBalance){
//   let balance = initialBalance;
//
//   function showBalance(){
//     console.log(`${name} : Your balance is ${balance}`);
//   }
//   function deposit(amount){
//     balance+=amount;
//     console.log(amount,balance);
//   }
//   function withdraw(amount){
//     if(amount>balance){
//     console.log("Fuck Off");
//     }
//     else{
//       balance-=amount;
//       console.log(amount,balance);
//     }
//
//   }
//   // return {showBalance:showBalance,deposit:deposit,withdraw:withdraw}
//   return showBalance();
// }
// const ram=newAccount('ram',500);
//
// const hari=newAccount('hari',200);
// ram.showBalance();
// ram.deposit(200);
// ram.withdraw(200);
// ram.withdraw(1000);


// Tagged Template Literals
// const statement="Dont touch my Milk";
// const author="Rameshwor Chaurasiya";
// const reference="-Balen Shah(2022)"
//
// const quote=highlight`Here is the statement ${statement} by ${author} which is true indeed ${reference}`;
//
// const result=document.querySelector(".result");
// result.innerHTML=quote;
//
// function highlight(text, ...vars){
//   const awesomeText= text.map((item,index)=>{
//     return `${item} <strong class="blue">${vars[index] || ""}</strong>`
//   }).join("");
//   return awesomeText;
// }
