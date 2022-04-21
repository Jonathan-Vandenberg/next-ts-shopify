

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

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

interface RaceBicycle {
  name: string;
  speed: 60;
  type: 'race bicycle'
}

interface CruiseBicycle {
  name: string;
  material: string;
  speed: number;
  type: 'cruise bicycle'
}

interface MountainBicycle {
  name: string
  material: string
  speed: number
  type: 'mountain bicycle'
}

type Bicycle = RaceBicycle | CruiseBicycle 

const bike: RaceBicycle = {
  name: 'Haro',
  speed: 60,
  type: 'race bicycle'
}

const bike2: CruiseBicycle = {
  name: 'Cruiser',
  speed: 50,
  material: 'metal',
  type: 'cruise bicycle'
}

const bike3: MountainBicycle = {
  name: 'Mountain Power',
  speed: 75,
  material: 'Aluminum',
  type: 'mountain bicycle'
}



type BicycleLogger = (bike: Bicycle) => unknown
type RandomFn = () => number


const play = () => {

  function randomiserFn: RandomFn(){
      const random = Math.random() * 100
      return random
  }

  randomiserFn()

  
  
  function item(random: number){
    if(random < 33){
      return bike
    } else if (random < 66 && random > 33){
      return bike2
    } else return bike3
  }

  item(random)

  
  
  const bicycleLogger: BicycleLogger = (bike: Bicycle) => {
    switch(bike.type){
      case 'cruise bicycle':
        console.log(bike.name)
      break;
      case 'race bicycle':
        console.log(bike.name)
      break;
      default:
        return bike
    }}

  bicycleLogger(bike)
}

export default play