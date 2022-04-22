// interface Person {
//   name: string;
//   age: number;
// }

// const person = {
//   name: 'Max',
//   age: 30
// }

// interface BusinessPerson extends Person {
//   type: 'business';
//   company: string;
// }

// interface AcademicPerson extends Person {
//   type: 'academic';
//   university: string;
// }

// ////////////////////////////////////////////////////////////////////////////////

// type RaceCar = {
//   name: string;
//   speed: 200;
//   team: string;
// }

// type CityCar = {
//   name: string;
//   speed: 100;
//   storage: number;
// }

// type SUVCar = {
//   name: string;
//   speed: 150;
//   isCarbonFree: boolean;
// }

// type Car = RaceCar | CityCar | SUVCar;

// ////////////////////////////////////////////////////////////////////////////////


// // Type Merging (can only be used with interface)
// interface Person {
//   height: number;
//   weight: number;
// }

// // Union types
// type Human = BusinessPerson | AcademicPerson;

// // Use type to define functions
// type PersonLoggerFn = (age: number, name?: string) => string



// export default function play(){
//   const name = 'john';
//   const age = 30;

//   const logPersonInfo: PersonLoggerFn = (personAge: number, personName: string  = 'Joe Soap') => {
//     const info = 'Name: ' + personName + ', Age: ' + personAge 
//     console.log(info)
//     return info
//   }

//   function logPersonInfo2(person: Person){
//     const info = `Name: ${person.name}, Age: ${person.age}`
//     console.log(info)
//     return info
//   }

//   const car: RaceCar = {
//     name: 'Racer-Boy',
//     speed: 200,
//     team: 'Ferrari'
//   }

// // Using 'type never' to make sure developer propigates switch options correctly
//   function logCarInfo (car: Car){
//     console.log((car as RaceCar).team)

//     switch(car.speed){
//       case 200:
//         console.log(car.team)
//         break;
//       case 100:
//         console.log(car.speed)
//         break;
//       case 150:
//         console.log(car.isCarbonFree)
//         break;
//       default:
//         const _never: never = car
//         return _never
//     }
//   }

//   ////////////////////////////////////////////////////////////////////////////////

//   const object = {
//     name: 'John',
//     age: 38,
//     employed: true
//   }

//   // A more specific type of 'any' for objects
//   const betterThanAny = (object: {[key: string]: string | number}) => {
//     console.log(object.name)
//   }

//   // Another better than any case - unknown type
//   const printInfo = (object: {[key: string]: unknown}) => {
//     if(typeof object.name === 'string'){
//       object.name.toUpperCase()
//     }
//   }
  
  
//   const someone: Human = {
//     name: 'John',
//     age: 38,
//     type: 'business',
//     company: 'Google',
//     height: 193,
//     weight: 85
//   }
  
//   const logHumanInfo = (someone: Human) => {
//     if(someone.type === 'business'){
//       console.log(someone.height)
//     } else if (someone.type === 'academic'){
//       console.log(someone.university)
//     }
//     console.log(someone)
//     return someone
//   }
  
  
//   // logPersonInfo(age, name)
//   // logPersonInfo2(person)
//   // logCarInfo(car)
//   // logHumanInfo(someone)
//   // betterThanAny(object)
//   printInfo(object)
// }

////////////////////////////////////////////////////////////////////

/*------------------------------------------------------------------------*/

// Generics

// class Logger<T> {
//   log(items: Array<T>, callback: (i: T) => void){
//     items.forEach((item) => {
//       callback(item)
//     })
//   }
// }

// interface Person {
//   name: string;
//   age: number;
// }

export function play2(){

  // Specify the generic type when instantiating the new instance of the class function.

  /*--------- Level 1 -----------*/

//   const logger = new Logger<string>()

//   const cars = ['Skoda', 'BMW', 'Porshe', 'VW']

//   logger.log(cars, (car) => {
//     console.log(car)
//   })

//   const logger2 = new Logger<number>()

//   const data = [1,2,3,4]

//   logger2.log(data, (dat) => {
//     console.log(dat)
//   } )

//   const person = [
//     {
//     name: "Jon",
//     age: 39
//   }, {
//     name: 'Jen',
//     age: 29
//   }
// ]

//   const personLogger = new Logger<Person>()

//   personLogger.log(person, (i) => {
//     console.log(i)
//   })

    //**TODODOTO--------- Level 2 -----------TODODOTO**/

    // To make the Logger type have a default value use ' class Logger <T extends People = Student> 
    // The Student type must satisfy constraints of People. Then you can omit declaring the type when instatiating the class.

  // class Logger<T extends People>{
  //   log(people: Array<T>, callback: (person: T) => void){
  //     people.forEach((i) => callback(i))
  //   }
  // }

  // interface People {
  //   name: string
  //   age: number
  // }

  // class Student implements People {
  //   name = ''
  //   age = 0
  //   doctorate = false
  // }

  // class BusinessPerson implements People {
  //   name = ''
  //   age = 0
  //   experienced = false
  // }

  // const students = [{name: 'John', age: 39, doctorate: false}, {name: 'Jen', age: 29, doctorate: true}]
  // const businessPeople = [{name: 'Henry', age: 48, experienced: true}, {name: 'Joe', age: 23, experienced: false}]

  // const studentLogger = new Logger<Student>()
  // const businessLogger = new Logger<BusinessPerson>()

  // studentLogger.log(students, (person) => {
  //   console.log(person)
  // })

  // businessLogger.log(businessPeople, (person) => {
  //   console.log(person.age)
  // })


  //TODOODOT-------- Level 2 again with type and interface -----------TODODODOT*/

  // interface Person {
  //   name: string
  //   age: number
  // }

  // interface Student extends Person {
  //   scholarship: boolean
  // }

  // interface GraduateStudent extends Student {
  //   projects: boolean
  // }

  // // Set Students as the default for generic, can be over-ridden with another interface as above.

  // type StudentInfo<T extends Student = Student> = {
  //   data: T
  //   grades: number[]
  // }

  // const info = {
  //   data: {
  //     name: 'John',
  //     age: 39,
  //     scholarship: true,
  //     projects: true
  //   },
  //   grades: [1,2,3,4]
  // }

  // //Specifying the generic type over-rides the default
  // function logStudentInfo(info: StudentInfo<GraduateStudent>): void{
  //   console.log(info.data.scholarship)
  // }

  // logStudentInfo(info)

  //TODO--------------- Custom types using Terniary Operator in TS ----------------TODO//

  interface Person {
    name: string
  }

  type SingleType<T> = T extends any[] ? T[number] : unknown

  // Custom types
  type Type1 = SingleType<string[]>
  type Type2 = SingleType<number[]>
  // Person doesn't extend any because it's not an array, otherwise it would satisfy as any. 
  type Type3 = SingleType<Person>

}