import { v4 as uuid} from 'uuid';

import { Car } from 'src/cars/interfaces/car.interface';

export const CARS_SED: Array<Car> = [
  {
    id: uuid(),
    brand: 'Nissan',
    model: 'Pathfinder',
    year: 1992,
  },
  {
    id: uuid(),
    brand: 'Hummer',
    model: 'H2',
    year: 2006,
  },
  {
    id: uuid(),
    brand: 'Volvo',
    model: 'S60',
    year: 2006,
  },
  {
    id: uuid(),
    brand: 'Buick',
    model: 'Park Avenue',
    year: 2002,
  },
  {
    id: uuid(),
    brand: 'Mitsubishi',
    model: 'Galant',
    year: 1995,
  },
  {
    id: uuid(),
    brand: 'Dodge',
    model: 'Viper',
    year: 2000,
  },
  {
    id: uuid(),
    brand: 'GMC',
    model: 'Safari',
    year: 1994,
  },
  {
    id: uuid(),
    brand: 'Acura',
    model: 'RDX',
    year: 2011,
  },
  {
    id: uuid(),
    brand: 'Lamborghini',
    model: 'Murciélago LP640',
    year: 2008,
  },
  {
    id: uuid(),
    brand: 'GMC',
    model: '1500',
    year: 1995,
  },
];
