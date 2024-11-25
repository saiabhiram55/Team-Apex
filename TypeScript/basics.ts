 // let age:number=20;
// console.log(age)

// let user={name:"abhi",age:20};

// console.log(user.age);
// console.log(user.name);

// ---- basic ----

// let age:number=15;
// if (age <20){
//     age = age +10; 
// }
// console.log(age);

// let sales:number=400;
// let course:string="cse";
// let is_published:boolean=true;

// let level; //any 

// function render(document :any){
//     console.log(document)
// }

// -----------array---------

// let number=[1,2,3,4];   //store similar type of variables

// console.log(number[0])  //1
// let numbers=[];   //in any type we can any type of variables such as int,str

// numbers[0]=1;
// numbers[1]="2";

// other way is  to over come this problem 
//  let numbers:number[]=[];  //only type numeric

//  ------tuple ------

// let user:[number,string] = [1,"mosh"];

// console.log(user[1].length);  //lenght of string
// console.log(user[0]); //  1
 
//  ------enum-------
// const enum size{ Small,Medium,Large};  //list of constants
// let mysize:size=size.Medium;
// console.log(mysize);

// ------- functions-------

// --default--
// function calculateTax(income:number,taxYear?:number):number{
//     if ((taxYear || 2024) < 2022){
//         return income*1.2;
//     }
//     return income*1.5;
// }

// calculateTax(12000)

// function calculateTax(income:number,taxYear:number):number{
//     if (taxYear  < 2022){
//         return income*1.2;
//     }
//     return income*1.5;
// }

// const taxAmount = calculateTax(12000, 2025);
// console.log(taxAmount);

// let  user ={ name:"abhi" ,age:20};

// console.log(user.name);
// console.log(user.age);
// console.log(user.email);   //showing error at email because no declare of email

// let number: number[] = []; // Declare and initialize an empty array

// number.push(1, 2, 3);
// number.unshift(0);
// number[4] = 4;
// //for loop
// for (let i = 0; i < number.length; i++) {
//   console.log(number[i]);
// }

// // Using for...of loop
// for (let num of number) {
//   console.log(num);
// }

// // Using forEach method
// number.forEach(num => console.log(num));

