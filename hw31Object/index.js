/* Створи об'єкт, що описує автомобіль 
(виробник, модель, рік випуску, середня швидкість,
   обсяг паливного бака, середня витрата палива на 100 км., водії), 
   і наступні функції для роботи з цим об'єктом:
    1.Висновок на екран з інформацією про автомобіль.
    2.Додавання водія, який має право керувати автомобілем.
    3.Заправка автомобіля.
    4.Підрахунок необхідного часу для подолання переданої відстані з 
    середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві
     необхідно робити перерву на 1 годину, а також потрібно перевіряти чи
      має право водій керувати даним автомобілем 
      (ім'я водія функція приймає другим аргументом). 
      Також потрібно перевірити чи вистачить палива, 
      для здійснення цієї поїздки, якщо палива не вистачить потрібно 
      вивести повідомлення, про це і запропонувати заправити автомобіль. */
let avto = {
  manufacturer: 'Germany',
  model: 'Opel',
  year: 2012,
  averageSpeed: 120,
  fuelTankVolume: 70,
  averageConsumption: 7,
  drivers: {
    driver1: 'Ivan',
    driver2: 'Vova',
  }
}

function displayInfo(car) {
  console.log(car.year)
}

function displayInfo(car) {
  for (let key in car) {
    if (key != 'drivers') {
      console.log(`${key} = ${car[key]}`)
    }
  }
}
displayInfo(avto);

function addNewDriver(car, driver) {
  car.drivers.driver3 = driver;
}
addNewDriver(avto, 'Vika')
console.log(avto.drivers.driver3);


function addFuel(car, fuel) {
  car.fuelInTank = car.fuelInTank + fuel;
}
addFuel(avto, 10)
console.log(avto.fuelInTank);


function calcTimeForTravel(car, distance) {
  let time = distance / car.averageSpeed;
  let totalTime;
  if (time <= 4) {
    totalTime = time;
    return totalTime;
  } else {
    let t = (time - time % 4) / 4;
    totalTime = t + time;
  }
  return totalTime;
}
console.log(calcTimeForTravel(avto, 400));


function checkForTravel(objCar, driverName, distance) {

  let timeForTravel = (distance / objCar.averageSpeed) + Math.floor((distance / objCar.averageSpeed) / 4);

  let canDrive;

  for (let key in objCar.drivers) {
    if (objCar.drivers[key] === driverName) {
      canDrive = 'YES'
      break
    } else { canDrive = 'NO' }
  }

  if (canDrive == 'YES') {
    console.log('Водій може керувати автомобілем')
  } else { console.log('Даний водій не може керувати автомобілем') }

  fuelForTravel = (distance / 100) * objCar.averageConsumption;
  if (fuelForTravel > objCar.fuelInTank) {
    console.log('Палива не вистачить, необхідно дозапарвитися')
  } else {
    console.log('щасливої дороги')
  }
  return;
}

checkForTravel(avto, 'Vika', 12390);






