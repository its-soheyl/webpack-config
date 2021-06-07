import './styles/index.scss';

const myCar = {
  made: 'ford',
  model: 'Mustang',
  year: 1968,
};

const myNewCar = {
  ...myCar,
  color: 'red',
};

console.log(myCar);
console.log(myNewCar);
