// -------------union type----------

// Return type is inferred as number[] | string
// function getFirstThree(x: number[] | string) {
//   return x.slice(0, 3);
// }

// const resultArray = getFirstThree([1, 2, 3, 4, 5, 6, 7]);
// console.log(resultArray);  

// const resultString = getFirstThree("abcdefg");
// console.log(resultString);  

// const user: (string | number)[] = [1, "h", 2, "hello", 3, "world"];

// console.log(user);  

// user.forEach(element => {
//   if (typeof element === "string") {
//     console.log(`String value: ${element}`);
//   } else if (typeof element === "number") {
//     console.log(`Number value: ${element}`);
//   }
// });

// class User {
//     x: string ="5";
//     y: number;
// }

// type User={                   // type guards to distinguish between the two types at runtime
//     name:string;
//     id:number;
// }

// type Admin={
//     username:string;
//     id:number;
// }

// let hitesh : User | Admin ={ name:"hitesh" ,id:2345}

// hitesh={username:"hc",id:334}


//    let pi:3.14 =3.14 //fixed value

// ---------tuple----------

//specialized array with some restrictions

// type User = [ number, string ];

// const newuser:User =[112,"h@gmail.com"]

// newuser[1]="h@123.com"     push methds are possible to write

// console.log(newuser[1])

//---------Enum---------


// enum seatChoice{
//     Aisle="123",
//     Middle=4,
//     window,
// }

// const hc = seatChoice.Aisle

// console.log(hc)

// ----------interface--------

// interface User {
//     readonly dbId: string;
//     email: string;
//     UserId: number;
//     googleId: string;
//     startTrail(): string;
//     getCoupon(couponName: string, value: number): number;
// }

// const hitesh: User = {
//     dbId: "22",
//     email: "h@h.com",
//     UserId: 23,
//     googleId: "google123", // Add this missing property
//     startTrail: () => {
//         return "trail started";
//     },
//     getCoupon: (couponName: string, value: number) => {
//         return 10;
//     }
// };

// console.log(hitesh.startTrail()); 
// console.log(hitesh.getCoupon("hitesh105", 10)); 

// interface User{                      //error is at name because it is not given as a input
//     githubToken:string
// }                           

// interface Admin extends User{
//     role:"admin" |"ta"|"learner";
// }

// -----------class--------

// class User{
//     email:string
//     name:string
//     city:string="jaipur"
//     constructor(email:string,name:string){
//         this.email=email;
//         this.name=name;
//     }
// }
// const hitesh=new User("h@h.com","hitesh")
// hitesh.city ="Delhi"

// console.log(hitesh.email)

// class User{
//     protected _coursecount:number = 5;
//     readonly city:string = "hyderabad";
//     constructor(
//         public email:string,
//         public name:string,
//         private userId:number

//     ){}
//     get getApple():string{
//         return`apple${ this.email}`
//     }
//     get coursecount():number{
//         return this._coursecount
//     }
//     set coursecount(courseNum){
//         if(courseNum<=1){
//             throw new Error("course canot should be more than 1")
//         }
//         this._coursecount = courseNum
//     }
// }

// class subUser extends User{
//     isfamily:boolean=true
//     changecourseCount(){
//         this._coursecount =4 
//     }
// }


//-------interface in class  --------

// interface TakePhoto{
//     cameraMode:string,
//     filter:string,
//     burst:number
// }

// interface story {
//     createstory ():void;
// }

// class youtube implements TakePhoto ,story{
//     constructor(
//      public cameraMode:string,
//      public filter:string,
//      public burst:number,
//     ){}
//     createstory():void{
//         console.log("story was created");
//     }
// }


