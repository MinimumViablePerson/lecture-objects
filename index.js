let car = {
  make: 'Tesla',
  model: '3',
  yearOfManufcature: 2020,
  price: 45000,
}

let carDealership = [
  {
    make: 'Tesla',
    model: '3',
    yearOfManufcature: 2020,
    price: 45000,
  },
  {
    make: 'Ford',
    model: 'Fiesta',
    yearOfManufcature: 2010,
    price: 5000,
  },
  {
    make: 'Fiat',
    model: 'Punto',
    yearOfManufcature: 2012,
    price: 2500,
  },
  {
    make: 'Opel',
    model: 'Vectra',
    yearOfManufcature: 2015,
    price: 1000,
  },
]

console.log("Here's the cars we have at the moment:")
for (let car of carDealership) {
  console.log(
    `A ${car.make} ${car.model} from ${car.yearOfManufcature} for ${car.price}.`
  )
}
