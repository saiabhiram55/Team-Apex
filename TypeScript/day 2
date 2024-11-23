// ----------- object -----------

// let employee:{
//     readonly id:number,  //this property stops us to modify number accidently
//     name:string,
//     retire:(date:Date) => void
// }={ 
//     id:9,
//     name:"abhi",
//     retire:(date:Date) =>{
//     console.log(date)
// }
// };

// employee.id=4;

// ---------  type alias---------  //structure in c language
// type Employee = {
//     readonly id:number,  //this property stops us to modify number accidently
//     name:string,
//     retire:(date:Date) => void 
// }
// let employee: Employee ={ 
//     id:9,
//     name:"abhi",
//     retire:(date:Date) =>{
//     console.log(date)
// }
// };

// console.log(employee)


// ------- union ---------

// function KgtoLbs(weight:number | string){
//     //Narrowing
//     if (typeof weight === "number"){
//         return weight * 2.2;
//     }
//     else{
//         return parseInt(weight)*2.2
//     }
// }

// console.log(KgtoLbs(10));
// console.log(KgtoLbs("15kg"));

// ----number-----
// let userId: number = 30;
// console.log(userId.valueOf());

// -------boolean -------
// let isLoggedIn:boolean=true;
// console.log( isLoggedIn.valueOf())


// Parameter type annotation
// function greet(name: string) {                
//   console.log("Hello, " + name.toUpperCase() + "!!");
// }

// greet("abhiram")

// function addtwo(num){   //num is a any keyword 
//   return num+2;
// }
// addtwo(2)

// let function signupUser(name:string,email:string ,ispaid:boolean) {}

// signupUser("h","h@h.com",true);

//  function signupUser(name:string,email:string ,ispaid:boolean =true) {}   ///default type boolean

// signupUser("h","h@h.com");


// function getvalue(myval:number ):string{        //shows error at inner return because return type is string
//     if (myval >5){
//       return true
//     }
//     return "200 ok"
// }

// ------arrow function-----

// const getHello = ()=>{}     //syntax

// const heroes = ["IronMan","SpiderMan","thor"]

//  let heroDescriptions = heroes.map((hero):string=>{       
//   return `hero is ${hero}`
// })

// console.log(heroDescriptions);


// ---------object---------

// const user ={                      //basic object
//   name:"abhiram",
//   email:"abhiram.123@gmail.com",
//   isActive:true
// }

// console.log(user.email)
// console.log(user.name)

// function createUser(user: { name: string; ispaid: boolean }){
//    console.log(`User Name: ${user.name}`);                          //object is passed as a parameter
//    console.log(`Is Paid: ${user.ispaid}`);
// }

// createUser({name:"abhiram",ispaid:true});

// function createUser():{ name: string; ispaid: boolean }{                 //object is passed as return type
//   return ({name:"abhiram",ispaid:true})
// }

// const user = createUser();
// console.log(`User Name: ${user.name}`);
// console.log(`Is Paid: ${user.ispaid}`);

// -----------type aliases---------               

// type User={
//   name:string,
//   email:string,
//   isActive:boolean
// }

// function createUser(user:User):User{
//   return({name:"ram",email:"ram@",isActive:true})
// }
// const users=createUser({name:"",email:"",isActive:true})

// console.log(`User Name: ${users.name}`);
// console.log(`Email: ${users.email}`);


// -----readonly and optional----

// type User={
//   readonly _id:string,                //we cant edit readonly values
//   name:string,
//   email:string,
//   isActive:boolean,
//   credcardDetails?:number            //? is optional to write value by user
// }

// let myuser:User={
//   _id:"123",
//   name:"h",
//   email:"h@h.com",
//   isActive:true
// }

// myuser.email="h@h1.com"
// myuser._id="234"



// ------array----

const superheroes:string[]=[]
const heropower:Array<number>=[]

type User={
  name:string,
  email:string,
  isActive:boolean
}

const allUsers:User[]=[]

superheroes.push("spiderman")
heropower.push(2)
allUsers.push({name:"",isActive:true,email:""})
